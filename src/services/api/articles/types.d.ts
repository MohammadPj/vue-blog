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

export interface IComment {
  author: IAuthor;
  body: string;
  createdAt: string;
  id: string;
  updateAt: string
}