import * as httpsRequest from "../utilities/httpsRequest";

export const getSuggested = async ({ page, per_page }) => {
  try {
    const res = await httpsRequest.get("users/suggested", {
      params: {
        page,
        per_page,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
