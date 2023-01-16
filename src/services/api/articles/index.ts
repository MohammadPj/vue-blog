import { useQuery } from "@tanstack/vue-query";
import { getArticles } from "@/services/api/articles/api";

export const useArticles = () => useQuery(["articles"], getArticles);
