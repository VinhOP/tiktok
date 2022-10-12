import * as httpsRequest from "../utilities/httpsRequest";

export const search = async (q, type = "less") => {
  try {
    const res = await httpsRequest.get("users/search", {
      params: {
        q,
        type,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
