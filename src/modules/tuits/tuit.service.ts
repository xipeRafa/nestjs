import { Injectable, NotFoundException } from '@nestjs/common';
import { Tuit } from 'src/modules/tuits/tuit.entity';

@Injectable()
export class TuitService {
      private tuits: Tuit[] = [
            {
                  id:'1',
                  message:'sii'
            }
      ];

      getTuists(): Tuit[] {
            return this.tuits
      }

      getTuit(id:string): Tuit{

            const tuit = this.tuits.find(el => el.id === id)

            if(!tuit){
                  throw new NotFoundException('resouce not found 404')
            }

            return tuit

      }

      createTuit(message:string){
            this.tuits.push({
                  id:Date.now().toString(),
                  message
            })
      }

      updateTuit(id:string, message:any){
            const tuit: Tuit = this.getTuit(id);
            tuit.message = message;
            return tuit
      }

      removeTuit(id:string){
            const index = this.tuits.findIndex(el => el.id === id)
            if(index >= 0){
                  this.tuits.splice(index, 1)
            }
      }

}
