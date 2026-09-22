const express = require("express");

const app = express();
const PORT = 3000;

app.get("/status", (req, res) => {
    res.json({
        status: "API is running",
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
