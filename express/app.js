const express = require("express")
const app = express();
const data = require("./data")

app.get("/", (req, res)=>{
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>')
})

app.get("/api/products", (req, res)=>{
    const newProducts = data.products.map((product)=>{
        const {id, name, image } = product
        return {id, name, image}
    })
    res.json(newProducts)
})

app.get("/api/products/:productID", (req, res)=>{

    // const {productID} = req.params;
    const singleProduct = data.products.find((product)=>product.id === Number(req.params.productID))

    if (!singleProduct){
        return res.status(404).send("Product does not exist")
    }

    res.json(singleProduct)
})




app.listen(5000, ()=>{
    console.log("Server running at: http://localhost:5000")
})