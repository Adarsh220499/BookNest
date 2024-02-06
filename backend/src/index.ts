import express , { Request, Response} from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string); //tries to connect to the database and crashes if the connection doesn't  work

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors()); //Used for security. Basically checks URLs for faulty requests and denies them id request is bad

app.get("/api/test", async(req: Request , res: Response) => {
        res.json({message : "Hello from this Endpoint"});
});

app.listen(1000, () => {
    console.log("server is runnning on localhost : 1000")
});