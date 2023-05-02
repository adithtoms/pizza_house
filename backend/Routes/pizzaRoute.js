import express from 'express'
import Pizza from '../MongoDB/pizzaModel.js'

const router = express.Router()




router.get("/getallpizzas", async (req, res) => {
  try {
    const pizza = await Pizza.find({})
    res.send(pizza)
  } catch (err) {
    return res.status(400).json({ message: err })
  }
})

router.post("/addpizza", async (req, res) => {
  const pizza = req.body.pizza;
  try {
    const newPizza = new Pizza({
      name: pizza.name,
      image: pizza.image,
      varients: ["small", "medium", "larg"],
      description: pizza.description,
      category: pizza.category,
      price: [pizza.price],
    });
    await newPizza.save();
    res.status(201).send("New Pizza Added");
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/getpizzabyid", async (req, res) => {
  const pizzaId = req.body.pizzaId;
  try {
    const pizza = await Pizza.findOne({ _id: pizzaId });
    res.send(pizza);
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/updatepizza", async (req, res) => {
  const updatedPizza = req.body.updatedPizza;
  try {
    const pizza = await Pizza.findOne({ _id: updatedPizza._id });
    (pizza.name = updatedPizza.name),
      (pizza.description = updatedPizza.description),
      (pizza.image = updatedPizza.image),
      (pizza.category = updatedPizza.category),
      (pizza.price = [updatedPizza.price]);
    await pizza.save();
    res.status(200).send("Pizza Update Success");
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.post("/deletepizza", async (req, res) => {
  const pizzaId = req.body.pizzaId;
  try {
    await Pizza.findOneAndDelete({ _id: pizzaId });
    res.status(200).send("Pizza Deleted");
  } catch (error) {
    res.status(404).json({ message: error });
  }
});
export default router