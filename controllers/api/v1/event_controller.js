const Event = require('../../../models/event');
const User = require('../../../models/user');
var moment = require('moment');

module.exports.createEvent = async (req, res) =>{
    
    try{
        const {name, description, location, cost} = req.body;
        let dateTime = req.body.dateTime;
        
        // dateTime = await moment(dateTime)._d;
        // console.log(moment().valueOf());
        // console.log(dateTime.valueOf());
        // //console.log(moment.duration(dateTime.diff(moment())));
        // console.log(dateTime.valueOf()-moment().valueOf() - 100*60*60*4);
        // if(dateTime.valueOf()-moment().valueOf() - 100*60*60*4 <= 0){
        //     return res.status(401).json({
        //         error: "Cannot Create an event who's Time has passed"
        //     });
        // }
        let user = await User.findById(req.auth._id, function(err){
            if(err){
                console.log(err);
                return res.status(401).json({
                    error: "Invalid details"
                });
            }   
        })
        
        //let date = new Date().toJSON().slice(0,10).toString();
        //creating a new event
        let event = await Event.create({
            user: req.auth._id,
            name,
            description, 
            dateTime,
            location,
            cost
        });
        //pushing this report in the patient's reports
        user.events.push(event.id);
        user.save();
        return res.status(200).json({
            message: "Report created successfully",
            event
        });
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            error: "Internal Server Error"
          });
    }
}

//returns all events
module.exports.allEvents = async (req,res) =>{
    try{
        
        let events = await Event.find({}, function(err){
            if(err){
                console.log(err);
                return res.status(500).json({
                    message: "Internal Server Error"
                });
            }
        })
        .populate({
            path: 'user',
            select: 'name email'
        })
        
        //if events found return all
        return res.status(200).json({
          
          message: "All Reports of fetched" ,
          events
        });
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            message: "Internal Server Error"
          });
    }
}