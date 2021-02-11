const { Router } = require("express");
const router = Router();
const Collection = require("../models/Collection");

router.get("/", async (req, res, next) => {
  console.log("collections");
  const { query } = req;
  const reqParams = Object.entries(query);
  let collectionData = null;
  console.log(reqParams,query)
  try {
    if (reqParams.length) {
      collectionData = await Collection.find(query);
    } else{
      collectionData = await Collection.find();
    }
     console.log(reqParams,collectionData.length)
    res.status(200).json({ result: "success", data: collectionData });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "something went wrong" });
  }
});

module.exports = router;
