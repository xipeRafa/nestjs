import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Tuit } from './tuit.entity';
import { TuitService } from './tuit.service';
import { TuitsController } from './tuits.controller';

@Module({
      imports: [TypeOrmModule.forFeature([Tuit])],
      controllers:[TuitsController],
      providers:[TuitService],
})
export class TuitsModule {}
