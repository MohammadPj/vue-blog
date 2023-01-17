import { useQuery } from "@tanstack/vue-query";
import { getArticle, getArticles } from "@/services/api/articles/api";

export const useArticles = () => useQuery(["articles"], getArticles);

export const useArticle = (title: string) =>
  useQuery(["article", title], () => getArticle(title));
