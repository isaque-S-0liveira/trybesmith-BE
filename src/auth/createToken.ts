import jwt, { Algorithm, Secret, SignOptions } from 'jsonwebtoken';

const secret: Secret = process.env.JWT_SECRET || 'STRING';

type TokenPayload = {
  id: number,
  username: string
};

const jwtConfig: SignOptions = {
  expiresIn: '7d',
  algorithm: 'HS256' as Algorithm,
};

const generateToken = (data: TokenPayload): string => jwt.sign({ data }, secret, jwtConfig);
const verifyToken = (token: string): unknown => jwt.verify(token, secret);

export default {
  generateToken,
  verifyToken,
};
