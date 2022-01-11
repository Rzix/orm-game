import{createConnection}from 'typeorm';
import express from 'express';
import { InvaderController } from './routes/invader-controller';
import { TribeController } from './routes/Tribe-controller';
import { WarController } from './routes/war-controller';
import { JusticController } from './routes/Justic-controller';

const app = express();

async function main() {
    try{
    await createConnection({
        type:"postgres",
        host : "localhost",
        port:5432,
        username: 'postgres', 
        password: 'reza2019',
        extra:{
            trustServerCertificate:true
        },
        database:'test',
        synchronize:true,
        entities : ["src/entities/*.ts"], // هارو توی خروجی میزارهentity تمام 
        logging:true
    });
    console.log('database connected...');
    }catch (e:any){
        console.error(e)
    }
    try{    
    app.use(express.json())
    app.use('/api/invader',InvaderController)
    app.use('/api/tribe',TribeController)
    app.use('/api/war',WarController)
    app.use('/api/justic',JusticController)

    app.listen(3000,()=>console.log('Listening on port 3000'))
    

    }
catch(e:any){
    console.error(e);
    console.log('connection error');

}
}
//nodemon --watch ./**/*.ts --exec npx ts-node src/index.ts
main() 