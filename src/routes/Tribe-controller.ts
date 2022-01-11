import express from 'express';
import { TribeEntity } from '../entities/Tribe.entities';
import { InvaderService } from '../services/invader-service';
import { TribeService } from '../services/Tribe-service';

const router=express.Router();
const tribeService = new TribeService();
const invaderService= new InvaderService();
router.post('/', async (req,res)=>{
    const {name}=req.body;
    const tribe= new TribeEntity();
    tribe.name=name;
     await tribeService.insert (tribe)
   return res.json(tribe)
})

router.put('/:tribeId/new-invader/:invaderId',async (req,res)=>{
  const{tribeId,invaderId}=req.params;

  const tribe = await tribeService.find(parseInt(tribeId))
    if(!tribe){
        return res.status(404).send('Tribe not found');  
    }


    const invader =await invaderService.find(parseInt(invaderId))
    if(!invader){
        return res.status(404).send('Invader not found');  
    }

    const updatedtribe=await tribeService.addInvader(tribe,invader)
    return res.json(updatedtribe)
})

router.put('/:tribeId/new-justic/:justicId',async (req,res)=>{
    const{tribeId,justicId}=req.params;

    const tribe = await tribeService.find(parseInt(tribeId))
    if(!tribe){
        return res.status(404).send('Tribe not found');  
    }

    const justic =await invaderService.find(parseInt(justicId))
    if(!justic){
        return res.status(404).send('Justic not found');  
    }
    
    const updatedtribe=await tribeService.addInvader(tribe,justic)
    return res.json(updatedtribe)   
})

router.get("/",async (req,res)=>{
    let{name}=req.query;
    const tribes = await TribeService.findAllof((name || "") as string);
   
    return res.json(tribes);
})

router.delete('/:id', async(req,res)=>{
    try{
    const{id}=req.params;
    const tribe= await tribeService.find(parseInt(id));
    if(!tribe){
        return res.status(404).send('Tribe not found')
    }
        await tribeService.delete(parseInt(id))
        return res.json(tribe);
}

catch(e){
return res.status(500).send(`Erorr${e}`)
}
})




export{
    router as TribeController
} 