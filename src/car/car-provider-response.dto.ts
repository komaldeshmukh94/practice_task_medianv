import { ApiProperty } from '@nestjs/swagger';

export class carResponseDto<T = any> {
  @ApiProperty({ example: 200 })
  statusCode: number;

  @ApiProperty({ example: {} })
  data: T;

  @ApiProperty({ example: 'Success' })
  message: string;
}