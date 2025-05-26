import { User } from "../user/user.model.js";

export const LoginUser = async ({ email, password }) => {
  // here check the user present or not
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("User not found ");
  }

  if (user.password !== password) {
    throw new Error("password is not correct");
  }

  return {
    user: {
      email: user.email,
      role: user.role,
    },
  };
};
