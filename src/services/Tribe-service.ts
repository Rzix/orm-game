import { json } from "express";
import { LessThan, Like, RelationId } from "typeorm";
import { Invader } from "../entities/Invader.entities";
import { JusticEntity } from "../entities/Justic.entities";
import { TribeEntity } from "../entities/Tribe.entities";
export class TribeService{
    static insert(tribe: TribeService) {
        throw new Error('Method not implemented.');
    }
    name: any;
    public async insert(data:TribeEntity){
      const tribe=  await TribeEntity.create(data);
      tribe.save();  
    }


   //----------------------------------------------------


    public async find(id:number){
      const tribe=await TribeEntity.findOne(id)
      return tribe
    }

    public async addInvader(tribe:TribeEntity,invader:Invader){
      console.log("add Invader")
      if(tribe.invaders!=undefined){
        console.log("if 1", tribe.invaders);
        tribe.invaders.push(invader)
      }else{
        tribe.invaders=[invader]
      }
     await tribe.save()
      return tribe
    }

    public async addJustic(tribe:TribeEntity,justic:JusticEntity){
      console.log("add Justic")
      if(tribe.justics!=undefined){
        console.log("if 1",tribe.justics);
        tribe.justics.push(justic)
      }else{
        tribe.justics=[justic]
      }
     return await tribe.save()
      
    }

    public async delete(id:number){
      console.log('deleted')
    return TribeEntity.delete(id);
    }

    static async findAllof(filterName:string){
      const tribes=await TribeEntity.find({
        where:{
          name:Like(`%${filterName}%`),
          // id:LessThan(3)
        },
        join:{
          alias:'tribe',
          innerJoinAndSelect:{
            invader: "tribe.invaders",
            justic:'tribe.justics'        ///////////////////////-------------------
          },
        },
       
      });
      return tribes;
    }  
}