// DTO is a data transfer object used to define object
// car.dto.ts
// Added Validation Pipes
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, IsNotEmpty, IsArray } from 'class-validator';
export class CarDto {
  @ApiProperty({example:1})
  @IsInt()
  id: number;

  @ApiProperty({example:"Toyota"})
  @IsString()
  @IsNotEmpty()
  brand: string;

  @ApiProperty({example:"White"})
  @IsString()
  @IsNotEmpty()
  color: string;

  @ApiProperty({example:"Fortuner"})
  @IsString()
  @IsNotEmpty()
  model: string;

}
