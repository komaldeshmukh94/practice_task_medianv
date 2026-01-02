import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CarDto } from './car.dto';
import { CARS } from './cars.mock';
import { UpdateCarDto } from './update-car.dto';

@Injectable()
export class CarService {
  private cars: CarDto[] = CARS;

  getCars() {
    return this.cars;
  }

  postCar(car: CarDto) {
    this.cars.push(car);
    return car;
  }

  getCarById(id: number) {
    const car = this.cars.find(car => car.id === id);
    if (!car) {
      throw new HttpException('Car Not Found', HttpStatus.NOT_FOUND);
    }
    return car;
  }

  deleteCarById(id: number) {
    const index = this.cars.findIndex(car => car.id === id);
    if (index === -1) {
      throw new HttpException('Car Not Found', HttpStatus.NOT_FOUND);
    }
    return this.cars.splice(index, 1);
  }
 putCarById(id: number, updateData: UpdateCarDto) {
    const car = this.getCarById(id);
    Object.assign(car, updateData);
    return car;
  }


  patchCarById(id: number, updateData: UpdateCarDto) {
    const car = this.getCarById(id);
    Object.assign(car, updateData);
    return car;
  }
}



