import { Controller, Get } from '@nestjs/common';
import {ImageCompService} from './image-comp.service'
@Controller('image-comp')
export class ImageCompController {

    constructor(private readonly imageComp:ImageCompService)
    {
    }

    @Get('hel')
    testHello(){
       return this.imageComp.helloResp();
    }


}
