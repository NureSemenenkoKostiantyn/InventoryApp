const express = require('express');
const path = require("path");
const app = express();
const productsRouter = require("./routes/products");
const port = 5000;


const data = {
  rows: [
    { id: 1, 
      nameColumn: 'Hello', 
      partNumberColumn: 'World', 
      labelColumn: 'Hellllo', 
      startInvColumn: 'World', 
      invReceivedColumn: 'Hellllo', 
      invShippedColumn: 'World', 
      invOnHandColumn: 'Hellllo', 
      minRequiredColumn: 'World' },
    { id: 2, 
      nameColumn: 'Hellllo', 
      partNumberColumn: 'World', 
      labelColumn: 'Hellllo', 
      startInvColumn: 'World', 
      invReceivedColumn: 'Hellllo', 
      invShippedColumn: 'World', 
      invOnHandColumn: 'Hellllo', 
      minRequiredColumn: 'World' },
    { id: 3, 
      nameColumn: 'Hellllo', 
      partNumberColumn: 'World', 
      labelColumn: 'Hellllo', 
      startInvColumn: 'World', 
      invReceivedColumn: 'Hellllo', 
      invShippedColumn: 'World', 
      invOnHandColumn: 'Hellllo', 
      minRequiredColumn: 'World' }
  ]
}
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/api/products", productsRouter);
/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.get("/getTable", (req, res) => {
  res.json({ message: "ok" });
});

app.get('/get', (req, res) => {
  res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


