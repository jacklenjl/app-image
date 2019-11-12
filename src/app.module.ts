import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImageCompModule } from './image-comp/image-comp.module';


@Module({
  imports: [ImageCompModule,],
  controllers: [AppController,],
  providers: [AppService,],
})
export class AppModule {}
