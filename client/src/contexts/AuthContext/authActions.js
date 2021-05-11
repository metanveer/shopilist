import axios from "axios";

export async function registerUser(dispatch, regPayload) {
  const config = {
    method: "POST",
    url: `/api/users/register`,
    headers: { "Content-Type": "application/json" },
    data: regPayload,
  };

  try {
    dispatch({ type: "REGISTER_REQUEST" });
    const { data } = await axios(config);

    if (data.email) {
      dispatch({ type: "REGISTER_SUCCESS", payload: data });
      localStorage.setItem("currentUser", JSON.stringify(data));
      return data;
    }
    return;
  } catch (error) {
    dispatch({
      type: "REGISTER_ERROR",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
}
export async function getProfile(dispatch, token) {
  const config = {
    method: "GET",
    url: `/api/users/me`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    dispatch({ type: "PROFILE_GET_REQUEST" });
    const { data } = await axios(config);

    if (data.email) {
      dispatch({ type: "PROFILE_GET_SUCCESS", payload: data });
      return data;
    }
    return;
  } catch (error) {
    dispatch({
      type: "PROFILE_GET_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
}

export async function loginUser(dispatch, loginPayload) {
  const config = {
    method: "POST",
    url: `/api/users/login`,
    headers: { "Content-Type": "application/json" },
    data: loginPayload,
  };

  try {
    dispatch({ type: "REQUEST_LOGIN" });
    const { data } = await axios(config);

    if (data.name) {
      dispatch({ type: "LOGIN_SUCCESS", payload: data });
      localStorage.setItem("currentUser", JSON.stringify(data));
      return data;
    }

    return;
  } catch (error) {
    dispatch({
      type: "LOGIN_ERROR",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
}

export async function logout(dispatch, token) {
  try {
    const config = {
      method: "POST",
      url: `/api/users/logout`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: null,
    };
    dispatch({ type: "LOGOUT_REQUEST" });
    const { data } = await axios(config);

    if (data.message) {
      dispatch({ type: "LOGOUT_SUCCESS", payload: data.message });
      localStorage.removeItem("currentUser");
      return data;
    }

    return;
  } catch (error) {
    dispatch({
      type: "LOGOUT_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
}
export async function deleteUser(dispatch, token) {
  try {
    const config = {
      method: "DELETE",
      url: `/api/users/me`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: null,
    };
    dispatch({ type: "DELETE_USER_REQUEST" });
    const { data } = await axios(config);

    if (data.message) {
      dispatch({ type: "DELETE_USER_SUCCESS", payload: data.message });
      localStorage.removeItem("currentUser");
      return data;
    }

    return;
  } catch (error) {
    dispatch({
      type: "DELETE_USER_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
}
