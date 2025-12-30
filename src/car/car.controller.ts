
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

@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Get('cars')
  getCars() {
    return this.carService.getCars();
  }

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  postCar(@Body() car: CarDto) {
    return this.carService.postCar(car);
  }

  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id: number) {
    return this.carService.getCarById(id);
  }

  @Delete(':id')
  deleteCarById(@Param('id', ParseIntPipe) id: number) {
    return this.carService.deleteCarById(id);
  }

  @Put(':id')
  putCarById(
    @Param('id', ParseIntPipe) id: number,
    @Query('property_name') propertyName: keyof CarDto,
    @Query('property_value') propertyValue: string,
  ) {
    return this.carService.putCarById(id, propertyName, propertyValue);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  patchCarById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCarDto: UpdateCarDto,
  ) {
    return this.carService.patchCarById(id, updateCarDto);
  }
}
