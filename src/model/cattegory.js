const mongoose = require("mongoose");
const CattegorySchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true},
    charges: {type: Number, trim: true},
    vehicles: [{ type: mongoose.Schema.Types.ObjectId, required: false, ref: 'vehicles'}]//have to check
})

const Cattegory = mongoose.model('cattegories', CattegorySchema);
module.exports = Cattegory;