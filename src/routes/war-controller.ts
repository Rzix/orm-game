import express from 'express';
import { WarEntity } from '../entities/war.entities';
import { WarService } from '../services/war-service';

const router=express.Router();
const warservice = new WarService();
router.post("/", async (req,res)=>{
    const {location}=req.body;
    let war = new WarEntity();
    war.location =location ;
     await warservice.insert(war);

   return res.json(war);
});
export{
    router as WarController
};