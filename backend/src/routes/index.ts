import express from 'express';
import restaurant from '../routes/restaurantsRoutes/restaurants.routes';
import chefs from '../routes/chefRoutes/chefs.routes';
import dishes from '../routes/dishesRoutes/dishes.routes';

const router = express.Router();

router.use('/restaurant', restaurant);
router.use('/chef', chefs);
router.use('/dishes', dishes);
console.log('a');

export default router;
