import express from 'express';
import restaurant from '../routes/restaurantsRoutes/restaurants.routes';
import chefs from '../routes/chefRoutes/chefs.routes';
import dishes from '../routes/dishesRoutes/dishes.routes';
import users from '../routes/usersRoutes/users.routes';
import login from '../routes/loginRoutes/login.routes';

const router = express.Router();

router.use('/restaurant', restaurant);
router.use('/chef', chefs);
router.use('/dishes', dishes);
router.use('/users', users);
router.use('/login', login);

export default router;
