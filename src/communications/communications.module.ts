import { Module } from '@nestjs/common';
import { CommunicationsService } from './communications.service';
import { CommunicationsController } from './communications.controller';
import { TwilioModule } from 'src/twilio/twilio.module';

@Module({
  controllers: [CommunicationsController],
  providers: [CommunicationsService],
  imports: [TwilioModule],
})
export class CommunicationsModule {}
