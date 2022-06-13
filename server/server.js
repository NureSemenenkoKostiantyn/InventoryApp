const express = require('express');
const path = require("path");
const app = express();
const productsRouter = require("./routes/products");
const shippingRouter = require("./routes/shipping");
const port = 5000;


app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/api/products", productsRouter);

app.use("/api/shipping", shippingRouter);
/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message }); 
  return;
});





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


