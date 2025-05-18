const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
    userId: { type: ObjectId, required: true, ref: "User" },
    type: { type : String, enum: ["email", "sms", "in-app"], required: true },
    message: { type: String, required: true },
    status: { type: String, enum: ["pending" ,"sent", "failed"] , default: "pending" },
    createdAt: { type: Date, default: Date.now }
});

const notificationModel = mongoose.model("notification", notificationSchema);

module.exports = notificationModel;