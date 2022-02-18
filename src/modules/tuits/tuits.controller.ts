import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { TuitService } from './tuit.service';
import { Tuit } from './tuit.entity';

@Controller('tuits')
export class TuitsController {

      constructor(private readonly tuitService : TuitService){

      }

      @Get()
      getTuits(@Query() filterQuery): Tuit[] {
            const { searchTerm, orderBy } = filterQuery
            return this.tuitService.getTuists()
      }

      @Get(':id')
      getTuit(@Param('id') id: string):Tuit{
            return this.tuitService.getTuit(id)
      }

      @Post()
      @HttpCode(HttpStatus.NO_CONTENT)
      createTuit(@Body('message') message : string):void{
            return this.tuitService.createTuit(message)
      }

      @Patch(':id')
      updateTuit(@Param('id') id:string, @Body('message') tuit): Tuit{
            return this.tuitService.updateTuit(id, tuit)
      }

      @Delete(':id')
      removeTuit(@Param('id') id:string): void{
            return this.tuitService.removeTuit(id)
      }
}
