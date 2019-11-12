import { Module } from '@nestjs/common';
import { ImageCompController } from './image-comp.controller';
import { ImageCompService } from './image-comp.service';
import { MulterModule } from '@nestjs/platform-express';
import { file } from '@babel/types';

@Module({
   
    imports:[],
    controllers: [ImageCompController,],
    providers: [ImageCompService],
    exports: [ImageCompService],
})
export class ImageCompModule {
   
}
