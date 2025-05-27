import { User } from "./user.model.js";

export const createUserIntoDB = async (userData) => {
  const { name, email, password, phone, address } = userData;
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("User with this email already exists");
  }

  // Hash the password

  const newUser = await User.create(userData);
  return newUser;
};

export const getAllUserFormDB = async () => {
  const allUser = await User.find();
  return allUser;
};

export const getThoseBloodDonnerFromDB = async () => {
  try {
    const bloodDonors = await User.find({
      blood: { $exists: true, $ne: null, $ne: "" },
      isDeleted: false,
    });
    return bloodDonors;
  } catch (error) {
    console.error("Error fetching blood donors:", error);
    throw error;
  }
};

export const updateUserInDB = async (id, updatedData) => {
  // Prevent updating email and password
  delete updatedData.email;
  delete updatedData.password;
  delete updatedData.isDeleted;
  delete updatedData.role;
  delete updatedData.workingList;

  // checking the user info
  console.log("userId", id);
  console.log("userData", updatedData);

  const existingUser = await User.findOne({ _id: id, isDeleted: false });

  if (!existingUser) {
    throw new Error("User not found or has been deleted");
  }

  // Perform the update
  const updatedUser = await User.findByIdAndUpdate(id, updatedData, {
    new: true,
    runValidators: true, // apply schema validators
  });

  return updatedUser;
};

export const deleteUserFromDB = async (id) => {
  console.log("delete id", id);
  const existingUser = await User.findOne({ _id: id });

  if (!existingUser) {
    throw new Error("User not found or has been deleted");
  }
  const updatedUser = await User.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true }
  );
  return updatedUser;
};
