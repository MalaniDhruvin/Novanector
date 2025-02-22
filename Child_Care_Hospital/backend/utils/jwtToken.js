export const generateToken = (user, message, statusCode, res) => {
  const token = user.generateJsonWebToken();

  // Determine the cookie name based on the user's role
  const cookieName = user.role === 'Admin' ? 'adminToken' : 'patientToken';

  // Set the cookie expiration duration (in days) using environment variable
  const cookieExpireTime = process.env.COOKIE_EXPIRE
    ? parseInt(process.env.COOKIE_EXPIRE, 10) * 24 * 60 * 60 * 1000
    : 7 * 24 * 60 * 60 * 1000;

  res
    .status(statusCode)
    .cookie(cookieName, token, {
      expires: new Date(Date.now() + cookieExpireTime),
      httpOnly: true,
      secure: true, 
    })
    .json({
      success: true,
      message,
      user,
      token,
    });
};
