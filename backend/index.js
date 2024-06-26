import app from "./app.js";
import connectMongoDB from "./db/connectMongoDB.js";

const port = process.env.PORT;

connectMongoDB().then(() => {
  app.on("error", (err) => console.log("Express Runtime Error", err));
  app.listen(port, () => console.log(`Server is running on port ${port}`));
});
