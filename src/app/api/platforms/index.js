import { composeUrl } from "../utils";

const getPlatformsData = async () =>
  await (await fetch(composeUrl("/platforms/lists/parents"))).json();

export const platforms = {
  getPlatformsData,
};
