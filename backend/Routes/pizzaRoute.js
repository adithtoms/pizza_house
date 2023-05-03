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

router.delete("/deletepizza/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Pizza.deleteOne({ _id: id });
    res.status(200).json({ message: "Pizza deleted", data: result });
  } catch (error) {
    res.status(400).json({ message: "Something went wrong" });
  }
});
export default router