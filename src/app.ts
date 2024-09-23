import { Module } from '@nestjs/common';
import { MarketModule, MovieModule } from './modules';

@Module({
  imports: [MovieModule,MarketModule],
})
export class AppModule { }
