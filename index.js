const express=require("express");
const {GoogleGenerativeAI}= require("@google/generative-ai");
const API_KEY = "AIzaSyAQXJtoIC2i277PClxecJVNSY-_86AAnsc";
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const app=express();
const port=8080;


const path =require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.post('/server', async (req, res) => {
  const { age,gender,height,weight,disease } = req.body;

  if (!age && !gender && !disease) {
    return res.status(400).json({ error: "Prompt is required." });
  }
  const prompt=`with consideration of age ${age},gender ${gender}, height ${height}, weight ${weight} and have ${disease} prepare a indian deit chart with alignnemt of foods ayurvedic properties. List down the food with 3 times meal.Also, divede the in category of 3 table . Write only useful part of data. Don't describe too much.`;
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // Response ko client ko bhejein
    // res.json({ answer: text });
    res.send(text);
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({ error: "Failed to generate content." });
  }
});

app.listen(port,()=>{
    console.log(`app is listing ${port}`);
});
app.get("/",(req,res)=>{
    res.render("frontPage.ejs");
});
app.get("/data",(req,res)=>{
    res.render("data.ejs");
});
let latestSum = 0;
let latestSum2=0;
let latestSum3=0;
let latestSum4=0;
let latestSum5=0;
let latestSum6=0;
let latestSum7=0;
let latestSum8=0;
app.post("/save-sum", (req, res) => {
  latestSum = req.body.sum;
  latestSum2=req.body.sum2;
  latestSum3=req.body.sum3;
  latestSum4=req.body.sum4;
  latestSum5=req.body.sum5;
  latestSum6=req.body.sum6;
  latestSum7=req.body.sum7;
  latestSum8=req.body.sum8;
//   console.log("Received sum:", latestSum);
//   console.log("Recive: ",latestSum2);
  res.redirect("/add");   // after saving, go to /add
});

app.get("/add",(req,res)=>{
    res.render("add.ejs",{
      sum:latestSum,sum2:latestSum2,sum3:latestSum3,sum4:latestSum4,sum5:latestSum5,sum6:latestSum6,sum7:latestSum7,sum8:latestSum8
    });
})
app.get("/signUp",(req,res)=>{
  res.render("signUp.ejs");
})
app.get("/signIn",(req,res)=>{
  res.render("signIn.ejs");
})
app.get("/home",(req,res)=>{
  res.render("landingPage.ejs");
})
app.get("/ayurFood",(req,res)=>{
  res.render("ayurFood.ejs");
})
app.get("/footer",(req,res)=>{
  res.render("includes/footer.ejs");
})
app.get("/prot",(req,res)=>{
  res.render("protFood.ejs");
})
app.get("/allfood",(req,res)=>{
  res.render("allFood.ejs");
})
app.get("/dhosa",(req,res)=>{
  res.render("dhosaCal.ejs");
})
app.get("/doctor",(req,res)=>{
  res.render("doctor.ejs");
})