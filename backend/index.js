import express, { json } from 'express';
import db from './MongoDB/connect.js'
import Pizza from './MongoDB/pizzaModel.js'
import pizzaRoute from './Routes/pizzaRoute.js'
import userRoute from './Routes/userRoute.js'
import orderRoute from './Routes/orderRoutes.js'


const app = express();

app.use(json())
const port = process.env.PORT || 8000;
app.get('/', (req, res) => {
    res.send(`Server started`);
});

app.use('/api/pizzas/',pizzaRoute)
app.use('/api/user/',userRoute)
app.use('/api/orders/',orderRoute)



app.listen(port, () => console.log('Server working'));



