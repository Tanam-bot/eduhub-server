const generateToken = (payload, secret, expiresIn) => {
  const Token = jwt.sign(payload, secret, {
    algorithm: "HS256",
    expiresIn,
  });
  return Token;
};

const verifyToken = (token, secret) => {
  return jwt.verify(token, secret);
};

export const jwtHelper = {
  generateToken,
  verifyToken,
};
