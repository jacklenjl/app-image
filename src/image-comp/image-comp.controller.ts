import { Controller, Get, UseInterceptors, UploadedFile, Post, Body, Res } from '@nestjs/common';
import {ImageCompService} from './image-comp.service'
import {FileInterceptor,} from '@nestjs/platform-express';
import { diskStorage } from 'multer'
const imagemin = require("imagemin");
const imageminJpegtran = require("imagemin-jpegtran");
const imageminOptipng = require("imagemin-optipng");
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
    @UseInterceptors(FileInterceptor('pic', {
      storage: diskStorage({
        // destination: './uploads/',
        filename: function ( req, file, cb ) {
          const ext = file.originalname.split('.');
          console.log("ext is:",ext)
          
        cb( null, 'Compressed'+file.originalname);}
      })
      
    }))
    async uploadFile(@UploadedFile() file,@Body() dto,@Res() res) {
      console.log('called',file,dto)
       const files = await imagemin([file.path], {
              destination: "public/imagesOpt",
              plugins: [imageminJpegtran(), imageminOptipng()]
            });
        console.log("compressed file is", files[0].destinationPath)
        const sizeVal= parseInt(file.size)-parseInt(files[0].data.length)
        console.log( (files[0].data.length))
       res.download(files[0].destinationPath)
      //  console.log("sssssssss",sizeVal)
      //  return  { head_val: sizeVal }
    }



}
