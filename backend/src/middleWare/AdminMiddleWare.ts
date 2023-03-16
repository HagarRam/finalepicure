import { Request, Response, NextFunction } from 'express';
import { ObjectId } from 'mongoose';

const isAdmin =
	(admin: string) =>
	async (req: Request, res: Response, next: NextFunction) => {
		if (req.body.user._id === admin) {
			return next();
		}
		return res.status(403).send('access denied');
	};
export default isAdmin;
