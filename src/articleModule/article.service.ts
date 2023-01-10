import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type { Article, Prisma } from '@prisma/client';

@Injectable()
export class ArticleService {
  constructor(private prisma: PrismaService) {}

  findArtice({
    select,
    where,
  }: Prisma.ArticleFindFirstArgsBase): Promise<Article | null | any> {
    {
      return this.prisma.article.findFirst({
        select,
        where,
      });
    }
  }

  createArticle({
    author,
    content,
  }: Prisma.ArticleCreateInput): Promise<Article> {
    return this.prisma.article.create({
      data: { author, content },
    });
  }
}
