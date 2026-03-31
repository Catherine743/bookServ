const users = require("../model/userModel");


// register
exports.registerController = async(req,res) => {
    console.log("Inside user register controller");
    const {username, email, password} = req.body
    // console.log(username, email, password);
    try{
        const existingUser = await users.findOne({email})
        if(existingUser){
            res.status(402).json("User already exists")
        }
        else{
            const newUser = await users.create({
                username, email, password
            })
            res.status(200).json(newUser)
        }
    }
    catch(error){
        console.log(error);
        res.status(500).json(error)
    }
}