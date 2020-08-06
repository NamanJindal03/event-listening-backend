const User = require('../../../models/user');
module.exports.getUserById = (req, res, next, id) =>{
    User.findById(id).exec((err, user) =>{
        if(err || !user){
            return res.status(400).json({
                error:"No user was found in DB"
            })
        }
        req.profile = user;
        next();
    })
}
module.exports.getUserEvents = (req, res) =>{
    return res.status(200).json(
         req.profile.events
    )
}