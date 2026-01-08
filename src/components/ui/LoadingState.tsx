import React from "react";
import { P } from "@/components/typography";
import Card from "@/components/card";

interface LoadingStateProps {
  message?: string;
  className?: string;
}

export const LoadingState: React.FC<LoadingStateProps> = ({
  message = "Loading...",
  className = "",
}) => (
  <Card className={`mb-16 ${className}`.trim()}>
    <Card.Content>
      <P className="text-center text-muted-foreground">{message}</P>
    </Card.Content>
  </Card>
);

interface ErrorStateProps {
  message: string;
  onRetry?: () => void;
  className?: string;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  message,
  onRetry,
  className = "",
}) => (
  <Card className={`mb-16 ${className}`.trim()}>
    <Card.Content className="text-center">
      <P className="text-destructive mb-4">{message}</P>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          Try Again
        </button>
      )}
    </Card.Content>
  </Card>
);

interface EmptyStateProps {
  title?: string;
  description?: string;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = "No content available",
  description = "Please check back later or contact support if this issue persists.",
  className = "",
}) => (
  <Card className={`mb-16 ${className}`.trim()}>
    <Card.Content className="text-center">
      <P className="font-medium mb-2">{title}</P>
      <P className="text-muted-foreground text-sm">{description}</P>
    </Card.Content>
  </Card>
);
