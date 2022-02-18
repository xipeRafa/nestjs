import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TuitsController } from './tuits/tuits.controller';
import { TuitService } from './tuit/tuit.service';

@Module({
  imports: [],
  controllers: [AppController, TuitsController],
  providers: [AppService, TuitService],
})
export class AppModule {}
