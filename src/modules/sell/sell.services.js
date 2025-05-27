import { Sell } from "./sell.model.js";

export const createSellIntoDB = async (sellData) => {
  const newSellProduct = await Sell.create(sellData);
  return newSellProduct;
};

export const getBooksFromDB = async () => {
  try {
    const books = await Sell.find({
      item: { $regex: /^book$/i },
      $or: [{ isDeleted: false }, { isDeleted: { $exists: false } }],
    });
    return books;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};

export const getItemsFromDB = async () => {
  try {
    const devices = await Sell.find({
      item: { $regex: /^device$/i },
      $or: [{ isDeleted: false }, { isDeleted: { $exists: false } }],
    });
    return devices;
  } catch (error) {
    console.error("Error fetching Device:", error);
    throw error;
  }
};
