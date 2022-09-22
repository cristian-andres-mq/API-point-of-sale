const express = require("express");
const {
  getItemController,
  addItemController,
  editItemController,
  deleteItemController,
} = require("./../controllers/itemController");

const router = express.Router();

//routes
//Method - GET
router.get("/get-item", getItemController);

//Method - POST
router.post("/add-item", addItemController);

//Method - PUT
router.put("/edit-item", editItemController);

//Method - DELETE
router.delete("/delete-item", deleteItemController);

module.exports = router;