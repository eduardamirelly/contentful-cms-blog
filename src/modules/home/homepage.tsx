"use client";

import React from "react";
import { H1, Lead, Small } from "@/components/typography";
import { BlogPostCard } from "@/components/blog";
import {
  LoadingState,
  ErrorState,
  EmptyState,
} from "@/components/ui/LoadingState";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { CONTENT } from "@/constants/content";

export default function Homepage(): React.ReactElement {
  const { blogPosts, loading, error, refetch } = useBlogPosts();
  console.log(blogPosts);

  const renderContent = (): React.ReactElement => {
    if (loading) {
      return <LoadingState message={CONTENT.LOADING.BLOG_POSTS} />;
    }

    if (error) {
      return <ErrorState message={error} onRetry={refetch} />;
    }

    if (blogPosts.length === 0) {
      return (
        <EmptyState
          title="No Blog Posts Found"
          description={CONTENT.ERRORS.CONTENTFUL_CONFIG}
        />
      );
    }

    return (
      <section className="space-y-8" aria-label="Blog posts">
        {blogPosts.map((post) => (
          <BlogPostCard key={post.sys.id} post={post} />
        ))}
      </section>
    );
  };

  return (
    <div className="min-h-screen w-full bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <header className="text-center mb-16">
          <H1 className="mb-4">{CONTENT.HERO.TITLE}</H1>
          <Lead className="text-muted-foreground max-w-2xl mx-auto">
            {CONTENT.HERO.SUBTITLE}
          </Lead>
        </header>

        <main>{renderContent()}</main>

        <footer className="text-center border-t border-border pt-8 mt-16">
          <Small className="text-muted-foreground">
            {CONTENT.FOOTER.BUILT_WITH}
          </Small>
        </footer>
      </div>
    </div>
  );
}
