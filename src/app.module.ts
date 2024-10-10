import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CommunicationsModule } from './communications/communications.module';
import { TwilioModule } from './twilio/twilio.module';

@Module({
  imports: [CommunicationsModule, TwilioModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
