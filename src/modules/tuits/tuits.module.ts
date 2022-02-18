import { Module } from '@nestjs/common';
import { TuitService } from './tuit.service';
import { TuitsController } from './tuits.controller';

@Module({
      controllers:[TuitsController],
      providers:[TuitService],
})
export class TuitsModule {}
