"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongo_1 = require("../mongo");
const bson_1 = require("bson");
const datastores_1 = require("./datastores");
const v4_1 = __importDefault(require("uuid/v4"));
const run = mongo_1.collection("reports");
exports.reportResolver = {
    id: ({ _id }) => _id.toHexString()
};
exports.slideChartResolver = {
    dataStore: ({ dataStore }) => datastores_1.fetchDatastore(dataStore.toHexString())
};
exports.fetchReports = () => run((reports) => reports.find({}).toArray());
exports.fetchReport = (id) => run((reports) => reports.findOne({ _id: new bson_1.ObjectId(id) }));
exports.createReport = (title) => __awaiter(this, void 0, void 0, function* () {
    const report = {
        title,
        slides: [
            {
                id: v4_1.default(),
                elements: [
                    {
                        id: v4_1.default(),
                        x: 50,
                        y: 130,
                        type: "text",
                        width: 700,
                        height: 0,
                        text: {
                            value: "TitleSlide",
                            fontSize: 48,
                            align: "Center"
                        }
                    }
                ]
            }
        ]
    };
    let res = yield run((reports) => reports.insertOne(report));
    return Object.assign({}, report, { _id: res.insertedId });
});
exports.deleteReport = (id) => __awaiter(this, void 0, void 0, function* () {
    yield run((reports) => reports.deleteOne({ _id: new bson_1.ObjectId(id) }));
    return id;
});
exports.deleteAllReports = () => __awaiter(this, void 0, void 0, function* () {
    yield run((reports) => reports.deleteMany({}));
    return "Ok";
});
exports.updateReport = (report) => __awaiter(this, void 0, void 0, function* () {
    yield run((reports) => reports.updateOne({ _id: new bson_1.ObjectId(report.id) }, { $set: report }));
    return Object.assign({}, report, { _id: new bson_1.ObjectId(report.id) });
});
