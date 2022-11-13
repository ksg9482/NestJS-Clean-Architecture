import { Module } from '@nestjs/common';
import { DataServices } from 'src/core';
import { MongoDataServices } from './mongo-data-services.service';

@Module({
    providers: [
        {
          provide: DataServices,
          useClass: MongoDataServices,
        },
      ],
      exports: [DataServices]
})
export class MongoDataServicesModule {}
