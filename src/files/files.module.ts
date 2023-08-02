import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FilesResolver } from './files.resolver';
import { FilesService } from './files.service';
import { PDFService } from './pdf.service';

@Module({
  imports: [ConfigModule],
  providers: [FilesService, PDFService, FilesResolver],
  exports: [FilesService, PDFService],
})
export class FilesModule {}
