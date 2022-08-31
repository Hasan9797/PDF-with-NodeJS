const express = require("express");
const router = require("./routes");

const app = express();
app.use(express.json());
app.use("/pdf", router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
