import { ContentsService } from './contents.service';
import { Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadedFile } from '@nestjs/common/decorators';

@Controller('contents')
export class ContentsController {
  constructor(private readonly contentsService: ContentsService) {}
  @Get()
  getAllContents(): string {
    return 'hi';
  }
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File): Promise<string> {
    return this.contentsService.createContent(file);
  }
}
