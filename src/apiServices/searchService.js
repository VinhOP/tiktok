import * as request from "./../utilities/request";

export const search = async (q, type = "less") => {
  try {
    const res = await request.get("users/search", {
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
