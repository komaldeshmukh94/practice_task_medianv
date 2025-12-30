// DTO is a data transfer object used to define object
// car.dto.ts
// Added Validation Pipes
import { IsInt, IsString, IsNotEmpty } from 'class-validator';
export class CarDto {
  @IsInt()
  id: number;

  @IsString()
  @IsNotEmpty()
  brand: string;

  @IsString()
  @IsNotEmpty()
  color: string;

  @IsString()
  @IsNotEmpty()
  model: string;
}

