import { IsArray, IsNotEmpty } from 'class-validator';

export class ContextDto {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  date: string;

  @IsNotEmpty()
  @IsArray()
  phones: string[];

  @IsNotEmpty()
  @IsArray()
  params: string[];
}
