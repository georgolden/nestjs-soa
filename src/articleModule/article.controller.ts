// Decorators
import { Controller, Get, Post, Param, Body } from '@nestjs/common';
// No Idea why it is not a type
import { ArticleService } from './article.service';
// Types
import type { ArticleCreateDto } from './dto/articleCreateDto';
import type { Article as ArticleModel } from '@prisma/client';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get(':id')
  getArticleByAuthor(@Param('id') id: string): Promise<ArticleModel> {
    return this.articleService.findArtice({ where: { id } });
  }

  @Post('article')
  createArticle(
    @Body() articleCreateDto: ArticleCreateDto,
  ): Promise<ArticleModel> {
    return this.articleService.createArticle(articleCreateDto);
  }
}
