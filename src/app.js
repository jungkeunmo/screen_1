import express from "express"; 
import path from "path"; 

const PORT = 7000; 
const app = express(); 

app.set("view engine", "pug"); 
app.use(express.static(path.join(__dirname, "/assets"))); 

app.get("/" , (req, res) => {
    res.render("screen");
}); 

app.listen(PORT, () => {
    console.log(`${PORT} SERVER START🥕`);
}); 
