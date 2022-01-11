import { Like } from "typeorm";
import { JusticEntity } from "../entities/Justic.entities";


export class JusticService{
 
    public async insert(data:JusticEntity){
        const justic=  await JusticEntity.create(data);
        return await justic.save(); 
      }
      public async find(id:number){
        const tribe=await JusticEntity.findOne(id)
        return tribe
      }

      public async findAllof(filterName:string){
        const justices=await JusticEntity.find({
          where:{
            name:Like(`%${filterName}%`),
          }
        });
        return justices;
      } 
}