import userModel from "../models/userModel.js";

export const getUserData = async (req, res) => {
  try {
    const { userId } = req.user;
    const user = await userModel.findById(userId);
    if (!user) {
      return res.json({ success: false, message: "'user not found! " });
    }
    res.json({
      success: true,
      userData: {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        phoneno: user.phoneno,
        isAccountVerified: user.isAccountVerified
      },
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
