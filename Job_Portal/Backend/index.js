import { app } from "./app.js";
import { connectDB } from "./src/db/index.js";

connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
});
