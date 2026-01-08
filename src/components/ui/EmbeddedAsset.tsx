import React from "react";
import Image from "next/image";
import { Asset } from "contentful";

interface EmbeddedAssetProps {
  asset: Asset;
  className?: string;
}

interface SafeAssetFields {
  url: string;
  contentType: string;
  fileName?: string;
  title?: string;
  description?: string;
}

function getSafeAssetFields(asset: Asset): SafeAssetFields | null {
  try {
    const fields = asset?.fields;
    const file = fields?.file;

    if (!fields || !file || typeof file !== "object") {
      return null;
    }

    const url = typeof file.url === "string" ? file.url : null;
    const contentType =
      typeof file.contentType === "string" ? file.contentType : null;

    if (!url || !contentType) {
      return null;
    }

    return {
      url: url.startsWith("//") ? `https:${url}` : url,
      contentType,
      fileName: typeof file.fileName === "string" ? file.fileName : undefined,
      title: typeof fields.title === "string" ? fields.title : undefined,
      description:
        typeof fields.description === "string" ? fields.description : undefined,
    };
  } catch {
    return null;
  }
}

export const EmbeddedAsset: React.FC<EmbeddedAssetProps> = ({
  asset,
  className = "",
}) => {
  const safeFields = getSafeAssetFields(asset);
  if (!safeFields) {
    return null;
  }

  const { url, contentType, fileName, title, description } = safeFields;
  const isImage = contentType.startsWith("image/");
  const isVideo = contentType.startsWith("video/");
  const isPdf = contentType === "application/pdf";

  if (isImage) {
    return (
      <figure className={`my-6 ${className}`.trim()}>
        <div className="relative w-full overflow-hidden rounded-lg border border-gray-200 shadow-sm">
          <Image
            src={url}
            alt={title || fileName || "Embedded image"}
            width={800}
            height={400}
            className="w-full h-auto object-cover"
            priority={false}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          />
        </div>
        {(title || description) && (
          <figcaption className="text-sm text-muted-foreground mt-2 text-center">
            {title && <span className="font-medium">{title}</span>}
            {title && description && <span> - </span>}
            {description && <span>{description}</span>}
          </figcaption>
        )}
      </figure>
    );
  }

  if (isVideo) {
    return (
      <figure className={`my-6 ${className}`.trim()}>
        <video
          src={url}
          title={title || fileName || "Embedded video"}
          className="w-full h-auto rounded-lg shadow-sm border border-gray-200"
          controls
          preload="metadata"
        >
          Your browser does not support the video element.
        </video>
        {(title || description) && (
          <figcaption className="text-sm text-muted-foreground mt-2 text-center">
            {title && <span className="font-medium">{title}</span>}
            {title && description && <span> - </span>}
            {description && <span>{description}</span>}
          </figcaption>
        )}
      </figure>
    );
  }

  if (isPdf) {
    return (
      <div
        className={`my-6 p-4 border border-gray-200 rounded-lg ${className}`.trim()}
      >
        <div className="flex items-center space-x-3">
          <div className="shrink-0">
            <svg
              className="w-8 h-8 text-red-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-medium text-gray-900">
              {title || fileName || "PDF Document"}
            </h4>
            {description && (
              <p className="text-sm text-gray-500">{description}</p>
            )}
          </div>
          <div>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              View PDF
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`my-6 p-4 border border-gray-200 rounded-lg ${className}`.trim()}
    >
      <div className="flex items-center space-x-3">
        <div className="shrink-0">
          <svg
            className="w-8 h-8 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="flex-1">
          <h4 className="text-sm font-medium text-gray-900">
            {title || fileName || "File"}
          </h4>
          <p className="text-sm text-gray-500">
            {contentType} • {description || "Download file"}
          </p>
        </div>
        <div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-blue-600 bg-blue-50 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
};
