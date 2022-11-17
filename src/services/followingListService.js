import * as httpsRequest from "../utilities/httpsRequest";

export const getFollowingList = async ({ page }) => {
  try {
    const res = await httpsRequest.get("me/followings", {
      params: {
        page,
      },
      headers: {
        Authorization: "Bearer" + localStorage.getItem("token"),
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
