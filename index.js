const express = require('express');
const { resolve } = require('path');
const menuitems = require("./schema");
const connect = require("./dataBase");

connect();


const app = express();
const port = 3010;





// app.use(express.static('static'));
app.use(express.json())

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


app.put('/menu/:id',async(req,res) => {
  const {name,price,description} = req.body;
  const id = req.params.id;

  const item =await menuitems.findById(id);

  if(name){
    item.name = name
  }
  if(price){
    item.price = price
  }
  if(description){
    item.description = description
  }

  await item.save()

  res.status(200).send("item updated")

})


app.delete("/menu/:id", async (req, res) => {

  try {
      const deletedItem = await MenuItem.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ error: "Item not found" });
      res.json({ message: "Item deleted successfully" });
  } catch (err) {
      res.status(500).json({ error: "Server error" });
  }
});
