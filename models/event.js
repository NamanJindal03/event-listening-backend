const mongoose = require('mongoose');
var moment = require('moment'); 
const eventSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  name: {
    type: String,
    required: true,
  },
  description:{
    type: String,
    required: true
  },
  dateTime : {
    type: String,
    required: true
  },
  location : {
    type: String,
    required: true
  },
  cost:{
    type:Number,
    required:true
  }
},{
  timestamps: true
});


const Event = mongoose.model('Event', eventSchema);
module.exports = Event;