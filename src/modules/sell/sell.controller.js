import {
  createSellIntoDB,
  getBooksFromDB,
  getItemsFromDB,
} from "./sell.services.js";

export const createSellPost = async (req, res, next) => {
  try {
    const userInfo = req.body;
    const result = await createSellIntoDB(userInfo);
    res.status(200).json({
      success: true,
      message: "Sell post updated successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllBooks = async (req, res, next) => {
  try {
    const result = await getBooksFromDB();
    res.status(200).json({
      success: true,
      message: "All books get successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllDevices = async (req, res, next) => {
  try {
    const result = await getItemsFromDB();
    res.status(200).json({
      success: true,
      message: "All Device get successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
