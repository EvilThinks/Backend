const { Router } = require("express");
const router = Router();
const Exhibition = require("../models/Exhibition");

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  console.log("exibitions", id);
  switch (id) {
    case "current":
      try {
        const data = await Exhibition.find();
        res.status(200).json({ result: "success", data: data });
      } catch (error) {
        res.status(500).json({ message: "something went wrong" });
      }
      break;
    case "onview":
      try {
        const data = await Exhibition.find().limit(6);
        res.status(200).json({ result: "success", data: data });
      } catch (error) {
        res.status(500).json({ message: "something went wrong" });
      }
      break;

    default:
      res.status(404).json({ message: "something went wrong" });
      break;
  }
});

module.exports = router;
