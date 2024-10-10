import { Body, Controller, Delete, Get, Param, Patch } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CommunicationsService } from './communications.service';
import { CommunicationDto } from './dto/communication.dto';

@Controller('communications')
export class CommunicationsController {
  constructor(private readonly communicationsService: CommunicationsService) {}

  @MessagePattern({ cmd: 'create' })
  create(@Payload() createCommunicationDto: CommunicationDto) {
    return this.communicationsService.create(createCommunicationDto);
  }

  @MessagePattern({ cmd: 'findAll' })
  @Get()
  findAll() {
    return this.communicationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.communicationsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCommunicationDto: CommunicationDto,
  ) {
    return this.communicationsService.update(+id, updateCommunicationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.communicationsService.remove(+id);
  }
}
