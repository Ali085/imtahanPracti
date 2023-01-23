const cors = require("cors")
const bodyParser = require("body-parser")
const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")


dotenv.config();
const app = express();





const { Schema } = mongoose;

const userSchema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        imageUrl: { type: String, required: true },

    }, { timestamps: true }
);

const Users = mongoose.model("users", userSchema);



app.use(cors());
app.use(bodyParser.json())


//GetAllUser

app.get("/users", (req, res) => {
    Users.find({}, (err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            res.status(404).json({message: err})
        }
    });
});


//Get User By ID

app.get("/users/:id", (req, res) => {
    const { id } = req.params
    Users.findById(id, (err, doc) => {
        if (!err) {
            if (doc) {
                res.send(doc);
                res.status(200);
            } else {
                res.status(404).json({ message: "Not found" });
            }
        }
    });

});

//Delete user
app.delete("/users/:id", (req, res) => {
    const { id } = req.params

    Users.findByIdAndDelete(id, (err, doc) => {
        if (!err) {
            res.send("Seccessful deleted")
        } else {
            res.send(404).json({ message: err });
        }
    });
}
);

//Add user

app.post("/users", (req, res) => {
    let user = new Users({
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
    });

    user.save();

    res.send({ message: "Success" })
});




const PORT = process.env.PORT
const url = process.env.CONNECTION_URL.replace(
    "<password>",
    process.env.PASSWORD
);

app.get("/", (req, res) => {
    res.send("<h1>Kelem dolmasi</h1>")
})
mongoose.set('strictQuery', false)
mongoose.connect(url, (err) => {

    if (!err) {
        console.log("DB CONNECT");

        app.listen(PORT, () => {
            console.log("Server start");
        })
    }
})