import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const appPort = configService.get('APP_PORT');
  app.enableCors({ maxAge: 300 });
  await app.listen(appPort);

  console.log(`App started in port : ${appPort}`);
}

bootstrap();
