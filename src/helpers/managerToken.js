const jwt = require('jsonwebtoken');

exports.generateToken = (uid) => {
  const expiresIn = 60 * 15;
  try {
    const token = jwt.sign({ uid }, process.env.JWT_SECRET || 'secret', {
      expiresIn,
    });
    return { token, expiresIn };
  } catch (error) {
    console.log(error);
  }
};
