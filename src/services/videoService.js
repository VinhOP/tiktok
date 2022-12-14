import * as httpsRequest from "../utilities/httpsRequest";

export const getVideoList = async ({ type, page }) => {
  try {
    const res = await httpsRequest.get("videos", {
      params: {
        type,
        page,
      },
      headers: {
        Authorization: "Bearer" + localStorage.getItem("token"),
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
