const mongodb = require("mongodb");
const axios = require("axios");
const NodeCache = require("node-cache");
var MongoClient = mongodb.MongoClient;


const mongouri = "mongodb://127.0.0.1:27017/Ecommerce";



//In Data
exports.postInData = async (req, res, next) => {
  const client = await MongoClient.connect(mongouri);

  try {
    const db = client.db("Ecommerce");
    const collection = db.collection("graphdata");

    const dataToInsert = {...req.body};


    // for (const item of dataToInsert) {
      const result = await collection.insertMany(...item);
    // }

    res.status(201).json({
      success: true,
    });
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
    console.log("db closed successfully");
  }
  };


  //In Data
exports.getInData = async (req, res, next) => {
    const client = await MongoClient.connect(mongouri);
  
    try {
      const db = client.db("Ecommerce");
      const collection = db.collection("graphdata");
      let data = await collection.find({}).toArray();
  
      res.status(201).json({
        success: true,
        data: data,
      });
    } catch (error) {
      console.log(error);
    } finally {
      client.close();
      console.log("db closed successfully");
    }
  };