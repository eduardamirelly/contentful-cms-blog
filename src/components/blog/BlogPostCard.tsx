import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { H2, Muted } from "@/components/typography";
import Card from "@/components/card";
import { richTextRenderOptions } from "@/utils/richTextRenderer";
import type { BlogPost } from "@/types/blog.types";

interface BlogPostCardProps {
  post: BlogPost;
  className?: string;
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({
  post,
  className = "",
}) => {
  const { fields, sys } = post;

  const formatPublishedDate = (dateString: string): string => {
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return "Invalid date";
    }
  };

  return (
    <Card key={sys.id} className={`mb-8 ${className}`.trim()}>
      <Card.Header>
        <Card.Title>
          <H2 className="mb-0 line-clamp-2">{fields.title}</H2>
        </Card.Title>
        <Card.Description>
          <Muted>
            Published on {formatPublishedDate(fields.publishedAt)} by{" "}
            <span className="font-medium">{fields.publishedBy}</span>
          </Muted>
        </Card.Description>
      </Card.Header>

      <Card.Content>
        <div className="prose prose-lg max-w-none prose-gray">
          {documentToReactComponents(fields.content, richTextRenderOptions)}
        </div>
      </Card.Content>
    </Card>
  );
};
