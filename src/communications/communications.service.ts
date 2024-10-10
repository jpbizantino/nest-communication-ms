import { Injectable } from '@nestjs/common';
import TwilioService from 'src/twilio/twilio.service';
import { CommunicationDto } from './dto/communication.dto';
import { Language } from './enums';
import {
  MessageTemplate,
  MessageTemplateAR,
  MessageTemplatePT,
} from './enums/message-template.enum';

@Injectable()
export class CommunicationsService {
  constructor(private readonly twilioService: TwilioService) {}

  async create(communicationDto: CommunicationDto) {
    // console.log(communicationDto);

    const message = this.replaceParams(communicationDto);

    communicationDto.context.phones.map(async (mobile) => {
       await this.twilioService.sendMessage(mobile, message);
    });
  }

  replaceParams(communicationDto: CommunicationDto): string {
    let template: MessageTemplate;

    if (communicationDto.language == Language.ES)
      template = new MessageTemplateAR();
    else template = new MessageTemplatePT();

    const selectedTemplate = template[communicationDto.model];

    // TODO: Check if selectedTemplate is undefined

    const finalBodyMessage = this.returnTextMessageBody(
      selectedTemplate,
      communicationDto.context.params,
    );

    console.log(finalBodyMessage);

    return finalBodyMessage;
  }

  private returnTextMessageBody = (
    template: string,
    replacements: string[],
  ): string => {
    let salida = template;

    for (let i = 1; i <= replacements.length; i++) {
      salida = salida.replace(`{{${i}}}`, replacements[i - 1]);
    }
    return salida;
  };

  findAll() {
    console.log('llego a findAll');
    return `This action returns all communications 11`;
  }

  findOne(id: number) {
    return `This action returns a #${id} communication`;
  }

  update(id: number, communicationDto: CommunicationDto) {
    return `This action updates a #${id} communication`;
  }

  remove(id: number) {
    return `This action removes a #${id} communication`;
  }
}
