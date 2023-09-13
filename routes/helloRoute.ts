import express from "express";

export const helloRouter = express.Router();

//http://localhost:5000/hello

helloRouter.get("/", (req, res) => {
  res.status(210).send("get,I am router-level-middleware");
});
helloRouter.put("/", (req, res) => {
  res.status(210).send("put,I am router-level-middleware");
});
helloRouter.post("/", (req, res) => {
  res.status(210).send("post,I am router-level-middleware");
});
helloRouter.delete("/", (req, res) => {
  res.status(210).send("delete,I am router-level-middleware");
});
