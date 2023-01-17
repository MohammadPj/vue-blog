import { useMutation, useQuery } from "@tanstack/vue-query";
import {
  addArticleComment,
  deleteArticleComment,
  getArticle,
  getArticleComments,
  getArticles, getFeeds, getTags, likeArticle,
} from "@/services/api/articles/api";

export const useTags = () => useQuery(["tags"], getTags);

export const useArticles = () => useQuery(["articles"], getArticles);

export const useFeeds = () => useQuery(["feeds"], getFeeds);

export const useArticle = (title: string) =>
  useQuery(["article", title], () => getArticle(title));

export const useArticleComments = (title: string) =>
  useQuery(["comments", title], () => getArticleComments(title));

export const addArticleCommentUseMutation = (title: string) =>
  useMutation({ mutationFn: (body: any) => addArticleComment(body, title) });

export const likeArticleUseMutation = (title: string) =>
  useMutation({ mutationFn: () => likeArticle(title) });

export const deleteArticleCommentUseMutation = (title: string) =>
  useMutation({ mutationFn: (id: string) => deleteArticleComment(title, id) });
