import {
  createCurrentUserHook,
  createClient,
//   createImageUrlBuilder,
} from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2021-03-25",
  useCdn: process.env.NODE_ENV === "production",
};

//for queries
export const sanityClient = createClient(config);

//for images
export const urlFor = (source) => createImageUrlBuilder(config).image(source);

//for current logged in user
export const useCurrentUser = createCurrentUserHook(config);
