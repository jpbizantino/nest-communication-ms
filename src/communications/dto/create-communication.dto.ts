import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Channel, Language, MessageModel } from '../enums';

export class CreateCommunicationDto {
  @ApiProperty({ enum: Channel })
  @IsEnum(Channel)
  @IsNotEmpty()
  channel: Channel;

  @ApiProperty({ enum: MessageModel })
  //   @IsString()
  //   @IsEnum(MessageModel)
  @IsNotEmpty()
  model: string;

  @ApiProperty({ enum: Language })
  //   @IsString()
  //   @IsEnum(Language)
  @IsNotEmpty()
  language: string;

  @ApiProperty()
  @IsNotEmpty()
  context: string;
}
