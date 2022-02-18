import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('tuits')
export class TuitsController {
      @Get()
      getTuits(@Query() filterQuery):string {
            const { searchTerm, orderBy } = filterQuery
            return `all ${searchTerm} tuits order by ${orderBy}`
      }

      @Get(':id')
      getTuit(@Param('id') id: string):string{
            return `hola desde tuist id: ${id}`
      }

      @Post()
      @HttpCode(HttpStatus.NO_CONTENT)
      postTuit(@Body('message') message : string): string{
            return `your msg is: ${message}`
      }

      @Patch(':id')
      updateTuit(@Param('id') id:string, @Body() tuit): string{
            return `the tuit ${id} has been updated`
      }

      @Delete(':id')
      deleteTuit(@Param('id') id:string): string{
            return `the tuit ${id} has been Deleted`
      }
}
