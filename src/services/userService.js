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

export const getAnUser = async ({ nickname }) => {
  try {
    const res = await httpsRequest.get(`users/@${nickname}`, {
      headers: {
        Authorization: "Bearer" + localStorage.getItem("token"),
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getCurrentUser = async () => {
  try {
    const res = await httpsRequest.get("auth/me", {
      headers: {
        Authorization: "Bearer" + localStorage.getItem("token"),
      },
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const signup = async ({ email, password }) => {
  try {
    await httpsRequest.post(
      "auth/register",
      {
        type: "email",
        email,
        password,
      },
      {
        headers: "Content-Type: application/json",
      }
    );
  } catch (err) {
    console.log(err);
  }
};

export const signin = async ({ email, password }) => {
  try {
    const user = await httpsRequest.post("auth/login", {
      email,
      password,
    });
    return user;
  } catch (err) {
    console.log(err);
  }
};

export const followAndUnFollowUser = async ({ user, isFollowed = false }) => {
  try {
    const res = await httpsRequest.post(
      `users/${user.user_id || user.id}/${isFollowed ? "unfollow" : "follow"}`,
      {},
      {
        headers: {
          Authorization: "Bearer" + localStorage.getItem("token"),
        },
      }
    );
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};
