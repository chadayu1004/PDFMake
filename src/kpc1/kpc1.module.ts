import { Module } from '@nestjs/common';
import { Kpc1Controller } from './kpc1.controller';
import { Kpc1Service } from './kpc1.service'; // Make sure to import Kpc1Service

@Module({
  controllers: [Kpc1Controller],
  providers: [Kpc1Service], // Make sure to provide Kpc1Service
})
export class Kpc1Module {}
