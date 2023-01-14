const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(8080, () => {
  console.log(`Server is running on port 8080.`);
});

app.post("/post", (req, res) => {
    const { exec } = require('child_process');
    var yourscript = exec('sh script.sh ' + req.body.input,
                          (error, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        if (error !== null) {
            console.log(`exec error: ${error}`);
        }
    });
})