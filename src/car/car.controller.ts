import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import {CarService} from "./car.service"
import { CarDto } from './car.dto';
import { LargeNumberLike } from 'crypto';
import { Body,Query } from '@nestjs/common';

@Controller('car')
export class CarController {
// Injecting carservice in car controller 
constructor(private carService:CarService){}

@Get('cars')
public getCars(){
return this.carService.getCars()
}

@Post()
public postCar(@Body() car:CarDto)
{
this.carService.postCar(car)
}

@Get(':id')
public getCarById(@Param('id') id:number)
{
return this.carService.getCarById(id)
}

@Delete(':id')
public deleteCarById(@Param('id') id:number){
this.carService.deleteCarById(id)
}

@Put(':id')
public putCarById(@Param('id') id:number,@Query() query){
const propertyName=query.property_name;
const propertyValue=query.property_value;
return this.carService.putCarById(id,propertyName,propertyValue)
}
}
