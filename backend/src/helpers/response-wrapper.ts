import { Response } from 'express';

export const respond = <T>(res: Response, data: T, message?: string, status = 200) => {
  return res.status(status).json({ data, message });
};