import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import TwilioService from './twilio.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [],
  providers: [TwilioService],
  exports: [TwilioService],
})
export class TwilioModule {}
