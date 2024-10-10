// https://www.twilio.com/en-us/blog/integrate-dialogflow-conversations-nestjs

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Twilio } from 'twilio';
import { EnvironmentEnums } from './enums';

@Injectable()
export default class TwilioService {
  private readonly client: Twilio;

  constructor(private configService: ConfigService) {
    this.client = new Twilio(
      this.configService.get(EnvironmentEnums.SERVICE_TWILIO_ACCOUNT_SID),
      this.configService.get(EnvironmentEnums.SERVICE_TWILIO_AUTH_TOKEN),
    );
  }

  public sendMessage = async (to: string, message: string) => {
    const response = await this.client.messages.create({
      body: message,
      from: `whatsapp: ${this.configService.get(EnvironmentEnums.SERVICE_TWILIO_PHONE)}`,
      to: `whatsapp: ${to}`,
    });

    console.log(response);
  };
}
