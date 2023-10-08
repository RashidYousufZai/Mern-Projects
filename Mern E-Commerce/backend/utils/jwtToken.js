// creating token and saving in cookie
const sendToken = (user, statusCode, res) => {
  const token = user.getJWTToken();

  // option for cookie
  const option = {
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 100),
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, option).json({
    success: true,
    user,
    token,
  });
};

module.exports = sendToken;
