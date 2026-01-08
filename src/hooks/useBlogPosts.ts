import { useEffect, useState, useCallback } from "react";
import { fetchContentfulEntries } from "./useContentful";
import type { BlogPost, UseBlogPostsReturn, LoadingState } from "@/types/blog.types";
import { Entry, EntrySkeletonType } from "contentful";
import { Document } from "@contentful/rich-text-types";

export const useBlogPosts = (): UseBlogPostsReturn => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loadingState, setLoadingState] = useState<LoadingState>("idle");
  const [error, setError] = useState<string | null>(null);

  const loading = loadingState === "loading";

  const transformEntry = (entry: Entry<EntrySkeletonType, undefined, string>): BlogPost => ({
    fields: {
      title: entry.fields.title as string || "Untitled",
      content: entry.fields.content as Document,
      publishedAt: entry.fields.publishedAt as string || new Date().toISOString(),
      publishedBy: (entry.fields.publishedBy as string) || "Anonymous",
    },
    sys: {
      id: entry.sys.id,
    },
  });

  const fetchBlogPosts = useCallback(async () => {
    setLoadingState("loading");
    setError(null);

    try {
      const response = await fetchContentfulEntries();
      
      if (!response?.items) {
        throw new Error("No items returned from Contentful");
      }

      const transformedPosts = response.items.map(transformEntry);
      const sortedPosts = transformedPosts.sort((a, b) => 
        new Date(b.fields.publishedAt).getTime() - new Date(a.fields.publishedAt).getTime()
      );

      setBlogPosts(sortedPosts);
      setLoadingState("success");
    } catch (err) {
      const errorMessage = err instanceof Error 
        ? err.message 
        : "Failed to fetch blog posts";
      
      console.error("Error fetching blog posts:", err);
      setError(errorMessage);
      setLoadingState("error");
      setBlogPosts([]);
    }
  }, []);

  const refetch = useCallback(async () => {
    await fetchBlogPosts();
  }, [fetchBlogPosts]);

  useEffect(() => {
    fetchBlogPosts();
  }, [fetchBlogPosts]);

  return {
    blogPosts,
    loading,
    error,
    refetch,
  };
};