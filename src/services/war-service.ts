import { WarEntity } from "../entities/war.entities";

export class WarService{
    public async insert(data:WarEntity){
      const war =  await WarEntity.create(data);
      return await war.save()

      
    }
}