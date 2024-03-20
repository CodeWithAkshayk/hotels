const express = require("express");
const router = express.Router();

const MenuItem = require("../models/menuItem");

router.get("/",async (req,res)=>{
    try{
        const response = await MenuItem.find();
        console.log("success fetch ");
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error:"Internal server error"});
    }
});
router.post("/",async (req,res)=>{
    try{
        const data = req.body;
        const menuItem = new MenuItem(data);
        const response = await menuItem.save();
        console.log("success fetch ");
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error:"Internal server error"});
    }
});


// to update data

router.put('/:id', async (req ,res)=> {
    try{
        const menuId = req.params.id;
        const data = req.body;
        const response =await MenuItem.findByIdAndUpdate(menuId, data, {new:true});
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


// to get specific data
router.get("/:taste",async (req,res)=>{
    try{
        const Taste = req.params.taste;
        if(Taste  == "sweet"||Taste == "spicy" || Taste  == "sour"){
            const response = await MenuItem.find({taste:Taste});
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
});


router.delete("/:id", async(req,res)=>{
    try{
        const deleteId = req.params.id;

        const response = await MenuItem.findByIdAndDelete(deleteId);
        console.log("successfully deleted")
        res.status(200).json({message:"menuItem is successfully deleted"});
        if(!response){
            res.status(404).json({error:"Entered invalid id "});
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"Internal Server Error"});
    }
});

module.exports = router;
