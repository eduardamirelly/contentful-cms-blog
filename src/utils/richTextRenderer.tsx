import React from "react";
import { Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { H1, H2, H3, H4, H5, H6, P, Code } from "@/components/typography";

export const richTextRenderOptions: Options = {
  renderMark: {
    [MARKS.BOLD]: (text: React.ReactNode) => (
      <strong className="font-semibold">{text}</strong>
    ),
    [MARKS.ITALIC]: (text: React.ReactNode) => (
      <em className="italic">{text}</em>
    ),
    [MARKS.UNDERLINE]: (text: React.ReactNode) => (
      <u className="underline">{text}</u>
    ),
    [MARKS.CODE]: (text: React.ReactNode) => <Code>{text}</Code>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <P className="mb-4">{children}</P>,
    [BLOCKS.HEADING_1]: (node, children) => (
      <H1 className="mb-6">{children}</H1>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <H2 className="mb-5">{children}</H2>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <H3 className="mb-4">{children}</H3>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <H4 className="mb-3">{children}</H4>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
      <H5 className="mb-3">{children}</H5>
    ),
    [BLOCKS.HEADING_6]: (node, children) => (
      <H6 className="mb-2">{children}</H6>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
      <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => (
      <li className="ml-4">{children}</li>
    ),
    [BLOCKS.QUOTE]: (node, children) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4 text-gray-600">
        {children}
      </blockquote>
    ),
    [BLOCKS.HR]: () => <hr className="my-8 border-gray-200" />,
  },
};
