import { Request, Response, NextFunction } from 'express';

const isAdmin =
	(admin: string) =>
	async (req: Request, res: Response, next: NextFunction) => {
		const id = req.body.userId;
		if (!id) {
			return res.status(403).send('access denied');
		}

		if (id === admin) {
			return next();
		}

		return res.status(403).send('access denied');
	};

export default isAdmin;
