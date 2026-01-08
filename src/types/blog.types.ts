import { Document } from "@contentful/rich-text-types";
import { Entry, EntrySkeletonType } from "contentful";

export interface BlogPostFields {
  title: string;
  content: Document;
  publishedAt: string;
  publishedBy: string;
}

export interface BlogPost {
  fields: BlogPostFields;
  sys: {
    id: string;
  };
}

export interface ContentfulResponse {
  items: Entry<EntrySkeletonType, undefined, string>[];
  total: number;
  skip: number;
  limit: number;
}

export type LoadingState = "idle" | "loading" | "success" | "error";

export interface UseBlogPostsReturn {
  blogPosts: BlogPost[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}