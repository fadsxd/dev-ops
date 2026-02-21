import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaksModule } from './tasks/tasks.module';

@Module({
  imports: [TaksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
