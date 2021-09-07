const express=require ("express")
const router=express.Router()
const contact=require("../controllers/contactController")

//Post contact
router.post("/postContact",contact.postContact)
//delete contact
router.delete("/deleteContact/:id",contact.deleteContact)
//get Contact
router.get("/getContact",contact.getAll)
module.exports=router 