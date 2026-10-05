import app from "./app.js";

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Inventory service is running on port ${port}`);
});