import { Controller, Get, UseInterceptors, UploadedFile, Post } from '@nestjs/common';
import {ImageCompService} from './image-comp.service'
import {FileInterceptor,} from '@nestjs/platform-express';
import { diskStorage } from 'multer'
import { extname } from 'path'
@Controller('image-comp')
export class ImageCompController {

    constructor(private readonly imageComp:ImageCompService)
    {
    }

    @Get('hel')
    testHello(){
        console.log('called')
       return this.imageComp.helloResp();
    }
    @Post('upload')
    @UseInterceptors(FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads/',
        filename: function ( req, file, cb ) {
          const ext = file.originalname.split('.');
          console.log("ext is:",ext)
          
        cb( null, file.originalname+ '-' + Date.now()+`.${ext[1]}`);}
      })
      
    }))
    uploadFile(@UploadedFile() file) {
      console.log('called')
      // console.log(file.extname)
      // console.log(file);
      
      return "file uploaded successfully"
    }



}
