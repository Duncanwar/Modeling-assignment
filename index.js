import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Welcome")
});
// finally, start the server
const server = app.listen(process.env.PORT || 5000, ()=>{
console.log(`Listen on port ${server.address().port}`);
});

export default app;