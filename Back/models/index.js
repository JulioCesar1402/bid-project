const connection = require("../connection");
const { ObjectID } = require("mongodb");

const getAll = () =>
  connection().then((db) => db.collection("products").find({}).toArray());

const increasePrices = (id) =>
  connection().then((db) =>
    db
      .collection("products")
      .updateOne({ _id: ObjectID(id) }, { $inc: { price: 5 } })
  );

const getById = (id) =>
  connection().then((db) =>
    db.collection("products").findOne({ _id: ObjectID(id) })
  );

module.exports = {
  getAll,
  increasePrices,
  getById,
};