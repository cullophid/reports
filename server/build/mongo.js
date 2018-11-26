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
const mongodb_1 = require("mongodb");
const { MONGODB_URL = "localhost:27017/reports" } = process.env;
exports.run = (f) => __awaiter(this, void 0, void 0, function* () {
    let client = yield mongodb_1.MongoClient.connect(MONGODB_URL, { useNewUrlParser: true });
    let db = client.db("reports");
    let result = yield f(db);
    client.close();
    return result;
});
exports.collection = (collection) => (f) => exports.run((db) => f(db.collection(collection)));
