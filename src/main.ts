import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'reflect-metadata';
import 'es6-shim';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{cors:true});
  await app.listen(4000);
}
bootstrap();
