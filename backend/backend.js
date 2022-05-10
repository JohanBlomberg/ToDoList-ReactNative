const express = require ('express')
const mongoose = require ('mongoose')
const app = express();
const dbURL = 'mongodb+srv://Bucketlist:Bucket@cluster0.0ieve.mongodb.net/Bucketlist?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3002;

app.set('view engine', 'ejs')
app.set(PORT)

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}))
app.use(express.json());

app.post('/api/buckets', async (req, res) => {
    console.log(req.body)
    res.send({message: "Success!"})
})
// app.post('/', async (req, res) => {
//     console.log(req.example)
//     res.send({message: "Success!"})
// })



mongoose.connect(dbURL,
    {useNewUrlParser: true}, () => app.listen(PORT), console.log(`App is listening to ${PORT}`));
