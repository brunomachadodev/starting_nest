import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const host = '0.0.0.0';
  const port = process.env.PORT || 3000;

  const app = await NestFactory.create(AppModule);
  // await app.listen(process.env.PORT || 8080);
  await app.listen(port, host, () => {console.log("Server started =====")});
}
bootstrap();
