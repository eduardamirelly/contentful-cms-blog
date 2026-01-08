import { createClient } from "contentful";

export const contentfulConfig = {
  spaceId: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN,
};

export const contentfulClient = createClient({
  space: contentfulConfig.spaceId || "",
  accessToken: contentfulConfig.accessToken || "",
});
