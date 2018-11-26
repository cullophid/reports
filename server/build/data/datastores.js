"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongo_1 = require("../mongo");
const bson_1 = require("bson");
const run = mongo_1.collection("datastores");
exports.Datastore = {
    id: (datastore) => datastore._id.toHexString()
};
exports.fetchDatastores = () => run((datastores) => datastores.find({}).toArray());
exports.fetchDatastore = (id) => run((datastores) => datastores.findOne({ _id: new bson_1.ObjectId(id) }));
exports.createDatastore = (datastore) => __awaiter(this, void 0, void 0, function* () {
    let res = yield run((datastores) => datastores.insertOne(datastore));
    return Object.assign({}, datastore, { _id: res.insertedId });
});
exports.deleteDatastore = (id) => __awaiter(this, void 0, void 0, function* () {
    yield run((datastores) => datastores.deleteOne({ _id: new bson_1.ObjectId(id) }));
    return id;
});
exports.updateDatastore = (datastore) => __awaiter(this, void 0, void 0, function* () {
    yield run((datastores) => datastores.updateOne({ _id: new bson_1.ObjectId(datastore.id) }, { $set: datastore }));
    return datastore;
});
