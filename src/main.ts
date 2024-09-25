import { NestFactory } from '@nestjs/core';
import { ConfigService} from '@nestjs/config';
import { AppModule } from './app';

async function startApp() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService)
  await app.listen(
    config.get<number>('PORT'),
    config.get<string>('HOST'),():void=>{
    console.log(`Listening on port ${config.get<number>('PORT')}`)
  });
}
startApp();
