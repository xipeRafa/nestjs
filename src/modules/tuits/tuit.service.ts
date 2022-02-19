import { Injectable, NotFoundException } from '@nestjs/common';
import { Tuit } from 'src/modules/tuits/tuit.entity';
import { CreateTuitDto } from './dto/create-tuit.dto';
import { UpdateTuitDto } from './dto/update-tuit.dto';

@Injectable()
export class TuitService {
      private tuits: Tuit[] = [
            {
                  id:1,
                  message:'sii'
            }
      ];

      getTuists(): Tuit[] {
            return this.tuits
      }

      getTuit(id:number): Tuit{

            const tuit = this.tuits.find(el => el.id === id)

            if(!tuit){
                  throw new NotFoundException('resouce not found 404')
            }

            return tuit

      }

      createTuit({message}:CreateTuitDto){
            this.tuits.push({
                  id:Date.now(),
                  message
            })
      }

      updateTuit(id:number, {message}:UpdateTuitDto){
            const tuit: Tuit = this.getTuit(id);
            tuit.message = message;
            return tuit
      }

      removeTuit(id:number){
            const index = this.tuits.findIndex(el => el.id === id)
            if(index >= 0){
                  this.tuits.splice(index, 1)
            }
      }

}
