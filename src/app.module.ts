import { Module } from '@nestjs/common';
import { ArticleModule } from './articleModule/article.module';

@Module({
  imports: [ArticleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
