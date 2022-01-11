import express from 'express';
import { JusticEntity } from '../entities/Justic.entities';
import { JusticService } from '../services/justic-service';


const router=express.Router();
const justicService = new JusticService();
router.post("/", async (req,res)=>{
    const {name}=req.body;
    let justic= new JusticEntity();
    justic.name=name;
    justic = await justicService.insert(justic);

   return res.json(justic);
});
router.get("/",async (req,res)=>{
    let{name}=req.query;
    const justices = await justicService.findAllof((name || "") as string);
   
    return res.json(justices);
})
export{
    router as JusticController
};