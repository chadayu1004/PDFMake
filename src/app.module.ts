import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Kpc1Controller } from './kpc1/kpc1.controller';
import { Kpc1Module } from './kpc1/kpc1.module';
import { Kpc1Service } from './kpc1/kpc1.service'; // Import Kpc1Service

@Module({
  imports: [Kpc1Module],
  controllers: [AppController, Kpc1Controller],
  providers: [AppService, Kpc1Service], // Include Kpc1Service in providers
})
export class AppModule {}

