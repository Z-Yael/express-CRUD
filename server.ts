import express from "express";
//import num1, { num2, string1 } from "./demoData";
import { helloRouter } from "./routes/helloRoute";
import { menuRouter } from "./routes/menuRouter";
const app = express();
const PORT = 5000;

app.use(express.static("public")); //Read the file in Public

//get(.....k) ---middleware --> Get method
//app.get(url/route,(req,res)=>{})
//http://localhost:5000/-->route
app.get("/route1", (req, res) => {
  res.send("Hello I am route1");
  //console.log(num1, num2, string1);
});

//router level middleware
//call and use from routers folder
app.use("/hello", helloRouter);

//testing of router level middleware (menuRouter)
app.use("/menu", menuRouter);

app.listen(PORT, () => console.log(`Server is running at Port: ${PORT}`));
