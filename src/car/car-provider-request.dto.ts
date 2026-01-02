import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, IsNotEmpty,IsNumber,IsArray,IsEmail,IsPhoneNumber,ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

  export class ServiceItemDto{
    @ApiProperty({example:"oil Change"})
    @IsString()
    name:string

    @ApiProperty({example:20})
    @IsNumber()
    cost:number

  }
export class ContactDto{
@ApiProperty({example:'komal@gmail.com'})
@IsEmail()
email:string;

@ApiProperty({example:'0123456789'})

@IsPhoneNumber()
phone:string;
}

export class OwnerDto{
  @ApiProperty({example:"komal"})
  @IsString()
  name:string
  @ApiProperty({type:ContactDto})
  @ValidateNested()
  @Type(() => ContactDto)
  contact: ContactDto;
}
export class carproviderdto {
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

  @ApiProperty({type:ServiceItemDto})
  @IsArray()
  services:ServiceItemDto[];

  @ApiProperty({type:OwnerDto})
  @IsArray()
  owner:OwnerDto[]
}