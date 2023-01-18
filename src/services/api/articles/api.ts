import { http } from "@/services/core/http";
import type { IArticle, IComment } from "@/services/api/articles/types";

export const getTags = (): Promise<{
  tags: string[];
}> => http.get("tags").then((res) => res.data);

export const getArticles = (
  page: number,
  tag: string
): Promise<{
  articles: IArticle[];
  articlesCount: number;
}> =>
  http
    .get("articles", {
      params: {
        limit: 10,
        offset: (page - 1) * 10,
        tag,
      },
    })
    .then((res) => res.data);

export const getFeeds = (): Promise<{
  articles: IArticle[];
  articlesCount: number;
}> => http.get("articles/feed").then((res) => res.data);

export const getArticle = (title: string): Promise<{ article: IArticle }> => {
  return http.get(`articles/${title}`).then((res) => res.data);
};

export const getArticleComments = (
  title: string
): Promise<{ comment: IComment }> => {
  return http.get(`articles/${title}/comments`).then((res) => res.data);
};

export const addArticleComment = (
  body: any,
  title: string
): Promise<{ article: IArticle }> => {
  return http.post(`articles/${title}/comments`, body).then((res) => res.data);
};

export const likeArticle = (title: string): Promise<{ article: IArticle }> => {
  return http.post(`articles/${title}/favorite`).then((res) => res.data);
};

export const deleteArticleComment = (
  title: string,
  id: string
): Promise<any> => {
  return http
    .delete(`articles/${title}/comments/${id}`)
    .then((res) => res.data);
};
