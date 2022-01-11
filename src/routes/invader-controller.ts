import express from 'express';
import { Invader } from '../entities/Invader.entities';
import { InvaderService } from '../services/invader-service';

const router=express.Router();
const invaderService = new InvaderService();
router.post("/", async (req,res)=>{
    const {name}=req.body;
    let invader= new Invader();
    invader.name=name;
    invader = await invaderService.insert(invader);

   return res.json(invader);
});

router.get("/",async (req,res)=>{
    let{name}=req.query;
    const invaders = await invaderService.findAllof((name || "") as string);
    return res.json(invaders);
})


export{
    router as InvaderController
};