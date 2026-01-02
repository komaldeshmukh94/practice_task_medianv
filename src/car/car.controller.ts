
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Patch,
  Param,
  Body,
  Query,
  ParseIntPipe,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CarService } from './car.service';
import { CarDto } from './car.dto';
import { UpdateCarDto } from './update-car.dto';
import { ApiOperation, ApiOkResponse, ApiTags,ApiNotFoundResponse,ApiBadRequestResponse,ApiBody, ApiResponse } from '@nestjs/swagger';
import { carproviderdto } from './car-provider-request.dto';
import {carResponseDto} from './car-provider-response.dto'

@ApiTags("Testing API TAGS")
@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService) {}
  @ApiOperation({summary:"testing apioperation tag"},)
  @ApiOkResponse({ description: 'Car fetched successfully' })
  @ApiNotFoundResponse({ description: 'Car not found' })
  @ApiBadRequestResponse({ description: 'Invalid ID format' })
 
  @Get('cars')
  getCars() {
    return this.carService.getCars();
  }



 
  @ApiBody({ type: carproviderdto })
  @ApiResponse({type:carResponseDto})
  
  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  postCar(@Body() car: CarDto) {
    return this.carService.postCar(car);
  }

  @ApiOkResponse({ description: 'Car fetched successfully' })
  @ApiNotFoundResponse({ description: 'Car not found' })
  @ApiBadRequestResponse({ description: 'Invalid ID format' })
  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id: number) {
    return this.carService.getCarById(id);
  }


  @ApiOkResponse({ description: 'Car fetched successfully' })
  @ApiNotFoundResponse({ description: 'Car not found' })
  @ApiBadRequestResponse({ description: 'Invalid ID format' })
  @Delete(':id')
  deleteCarById(@Param('id', ParseIntPipe) id: number) {
    return this.carService.deleteCarById(id);
  }


  @ApiOkResponse({ description: 'Car fetched successfully' })
  @ApiNotFoundResponse({ description: 'Car not found' })
  @ApiBadRequestResponse({ description: 'Invalid ID format' })
  @Put(':id')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  putCarById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCarDto: UpdateCarDto,
  ) {
    return this.carService.putCarById(id,updateCarDto);
  }

  @ApiOkResponse({ description: 'Car fetched successfully' })
  @ApiNotFoundResponse({ description: 'Car not found' })
  @ApiBadRequestResponse({ description: 'Invalid ID format' })
  @Patch(':id')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  patchCarById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCarDto: UpdateCarDto,
  ) {
    return this.carService.patchCarById(id, updateCarDto);
  }
}
