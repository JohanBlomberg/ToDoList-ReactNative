const express = require ('express')
const mongoose = require ('mongoose')
const app = express();
const dbURL = 'mongodb+srv://Bucketlist:Bucket@cluster0.0ieve.mongodb.net/Bucketlist?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3002;

app.use(express.static('public'));
app.use(express.json());

app.post("api/buckets", (req, res) => {
    console.log(req.body)
})



mongoose.connect(dbURL,
    {useNewUrlParser: true}, () => app.listen(PORT), console.log(`App is listening to ${PORT}`));
