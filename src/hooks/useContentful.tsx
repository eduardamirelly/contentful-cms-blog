import { contentfulClient } from "@/config/contentfulConfig";

export const fetchContentfulEntries = async () => {
  const entries = await contentfulClient.getEntries({
    content_type: "blogPost",
  });
  return entries;
};
