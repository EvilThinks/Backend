const Exhibition = require('./models/Exhibition');
const mongoose = require("mongoose");

const start = async () => {
  try {
    await mongoose.connect('mongodb+srv://testcrypto:qwerty123@cluster0.eyyi8.mongodb.net/app?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to db");
    Exhibition.insertMany(seedSample(10));
    console.log('added',Exhibition.find())
    process.exit(0)
  } catch (error) {
    console.log("db error",error.message,error.trace);

    process.exit(1);
  }
  
};


start();
const seedSample = (cnt) => {
  const result = [];
  for (let i = 0; i < cnt; i++) {
    result.push({
      imageUrl: "http://placehold.it/1920x900",
      path: "exibitions/as3dasd" + i,
      title: "qweqwe" + i,
      date: new Date(),
    });
  }
  return result;
};
const randomBetweenArray = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};
