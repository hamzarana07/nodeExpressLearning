const express = require("express");
const app = express();
const data = require("./data");

app.get("/", (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">Products</a>');
});

app.get("/api/products", (req, res) => {
  const newProducts = data.products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

app.get("/api/products/:productID", (req, res) => {
  // const {productID} = req.params;
  const singleProduct = data.products.find((product)=> {
    return product.id === Number(req.params.productID);
  });

  if (!singleProduct) {
    return res.status(404).send("Product does not exist");
  }

  res.json(singleProduct);
});

app.get("/api/v1/query", (req, res) => {
//   console.log(req.query);
    const { search, limit } = req.query;
    let sortedProducts = [...data.products]
    if (search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if (limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    if (sortedProducts.length < 1){
        // res.status(200).send("No products match your query")
        res.status(200).json({success:true, data:[]})
    }
    res.status(200).json(sortedProducts)
});

app.listen(5000, () => {
  console.log("Server running at: http://localhost:5000");
});
