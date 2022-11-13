import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongoDataServicesModule } from './mongo-data-services/mongo-data-services.module';

@Module({
  imports: [MongoDataServicesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
