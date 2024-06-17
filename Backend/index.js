import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
<<<<<<< HEAD
import contactRoute from "./route/contact.route.js";
=======
>>>>>>> c15737e92cf5cea8e0c60c08c172c415954b2d74

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to mongoDB
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
<<<<<<< HEAD
app.use("/contact", contactRoute);
=======
>>>>>>> c15737e92cf5cea8e0c60c08c172c415954b2d74

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});