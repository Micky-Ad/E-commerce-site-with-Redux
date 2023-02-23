const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI ||
   'mongodb://127.0.0.1:27017/mernshopping', 
// "mongodb+srv://LRicciardo:MongoPass123@cluster0.nrfy0d9.mongodb.net/mernshopping?retryWrites=true&w=majority",
{
  useNewUrlParser: true,
  useUnifiedTopology: true
  // useCreateIndex: true,
  // useFindAndModify: false
}
);

module.exports = mongoose.connection;
