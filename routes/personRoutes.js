const express = require( 'express' );
const router = express.Router();
const {handleGEtAll,handleGETWorkType}=require("../controller/personcontroller")

const Person = require("../models/Person");

router.post("/",async(req, res) => {
    try{
        const data = req.body;
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log("save sucess");
        res.status(201).json({message: 'Data has been saved'});
    


    }catch(err){
        console.log(err);
        res.status(500).json({error:"Internal Server Error"});
    }
    });


router.get( "/", handleGEtAll);



router.get( "/:workType", handleGETWorkType);


router.put('/:id', async (req ,res)=> {
    try{
        const  personId = req.params.id;
        const data = req.body;
        const response =await Person.findByIdAndUpdate(personId, data, {new:true});
        console.log("success fully updated");
        res.status(200).json({message:"success fully updated"});
        if(!response){
            console.log(error);
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal Server Error"});
    }
});


module.exports = router;
