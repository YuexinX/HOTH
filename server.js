import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";



const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;


app.listen(port, ()=>{console.log(`running on port: ${port}`);});
app.use(express.static("public"));
