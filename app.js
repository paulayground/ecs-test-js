const app = require("express")();

app.get("/", (req, res) => {
  res.json({
    message: "hello!!!!",
  });
});

app.listen(4000, () => {
  console.log("Server started");
});
