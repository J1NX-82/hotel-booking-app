import User from "../models/User.js";

export const protect = async (req, res, next) => {
  const { userId } = req.auth;
  if (!userId) {
    return res.json({ success: false, message: "not authenticated" });
  }

  const user = await User.findById(userId);
  if (!user) {
    return res.json({ success: false, message: "User not found in DB" });
  }

  req.user = user;
  next();
};
