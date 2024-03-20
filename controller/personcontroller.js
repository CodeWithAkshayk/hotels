const Person = require("../models/Person");

async function handleGEtAll(req,res){
    try{
        const response = await Person.find();
        console.log("success fetch");
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({ error : "Server Error"});
    }
}

async function handleGETWorkType(req,res){
    try{
        const workType = req.params.workType;
        if(workType == "chef"||workType == "waiter" || workType == "manager"){
            const response = await Person.find({work:workType});
            console.log("success fully featched");
            res.status(200).json(response);
        }else{
            console.log("not a  valid request");
            res.status(404).json({error:"client side error"});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error:"Internal Server Error"});
    }
}

module.exports={handleGEtAll,
    handleGETWorkType};