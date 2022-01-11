import { Like } from "typeorm";
import { Invader } from "../entities/Invader.entities";

export class InvaderService{
    static findAll() {
        throw new Error('Method not implemented.');
    }
    // static find(arg0: number) {
    //     throw new Error('Method not implemented.');
    // }
    public async insert(data:Invader){
      const invader=  await Invader.create(data);
      return await invader.save();//ذخیره سازی داده و ذخیره سازی تغییرات 
    }
  
    public async find(id:number){
      const invader=await Invader.findOne(id)
      return invader
    }
    public async findAllof(filterName:string){
      const invaders=await Invader.find({
        where:{
          name:Like(`%${filterName}%`),
        }
      });
      return invaders;
    }    

}