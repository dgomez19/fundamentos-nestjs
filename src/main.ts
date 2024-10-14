import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      forbidUnknownValues: false,
      whitelist: true, // IGNORA TODOS LOS CAMPOS QUE SE ENVIEN QUE NO ESTEN DEFINIDOS EN NUESTROS "DTO"
      forbidNonWhitelisted: true, // VERIFICA QUE SI SE ENVIAN DATOS DE MAS, GENERA ERROR.
    }),
  );
  await app.listen(3000);
}
bootstrap();
