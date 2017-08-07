const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usecaseSchema = new Schema({
  title:  String,
  body:   String,
  milestones: [{
    id: Number,
    name: String,
    name_de: String,
    name_en: String,
    start_date: Date,
    end_date: Date,
    usecase: Number,
  }],
});

mongoose.model('Usecase', usecaseSchema);
