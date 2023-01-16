import { http } from "@/services/core/http";

export interface IAuthor {
  bio?: string;
  following: boolean;
  image: string;
  username: string;
}

export interface IArticle {
  body: string;
  createdAt: string;
  updatedAt: string;
  description: string;
  favorited: boolean;
  favoritesCount: number;
  slug: string;
  tagList: string[];
  title: string;
  author: IAuthor;
}

export const getArticles = async (): Promise<{
  articles: IArticle[];
  articlesCount: number;
}> => http.get("articles").then((res) => res.data);
