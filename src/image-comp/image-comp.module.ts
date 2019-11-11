import { Module } from '@nestjs/common';
import { ImageCompController } from './image-comp.controller';
import { ImageCompService } from './image-comp.service';

@Module({
    controllers: [ImageCompController],
    providers: [ImageCompService],
    exports: [ImageCompService],
})
export class ImageCompModule {}
