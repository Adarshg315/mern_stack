const mongoose = require('mongoose');
const connection = "mongodb+srv://mongoadarsh:pB;a/2idG!b2:gB@cluster0-2k3dw.mongodb.net/items?retryWrites=true&w=majority";
mongoose.connect(
    connection,
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));
