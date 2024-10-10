import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { Channel, Language, MessageModel } from '../enums';
import { ContextDto } from './context.dto';

export class CommunicationDto {
  @ApiProperty({ enum: Channel })
  @IsEnum(Channel)
  @IsNotEmpty()
  channel: Channel;

  @ApiProperty({ enum: MessageModel })
  @IsEnum(MessageModel)
  @IsNotEmpty()
  model: string;

  @ApiProperty({ enum: Language })
  @IsEnum(Language)
  @IsNotEmpty()
  language: string;

  @ApiProperty()
  @IsNotEmpty()
  context: ContextDto;
}
