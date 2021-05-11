import axios from "axios";

export async function getDocuments(dispatch, token) {
  const config = {
    method: "GET",
    url: `/api/shoppinglists/`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    dispatch({ type: "DOCUMENTS_GET_REQUEST" });
    const { data } = await axios(config);

    if (data.length > 0) {
      dispatch({ type: "DOCUMENTS_GET_SUCCESS", payload: data });
      return data;
    }
    return;
  } catch (error) {
    dispatch({
      type: "DOCUMENTS_GET_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
    console.log(error);
  }
}

export async function getDocument(dispatch, payload) {
  const config = {
    method: "GET",
    url: `/api/shoppinglists/${payload.id}`,
    headers: {
      Authorization: `Bearer ${payload.token}`,
    },
  };

  try {
    dispatch({ type: "DOCUMENT_GET_REQUEST" });

    const { data } = await axios(config);

    if (data.title) {
      dispatch({ type: "DOCUMENT_GET_SUCCESS", payload: data });
      return data;
    }
    return;
  } catch (error) {
    dispatch({
      type: "DOCUMENT_GET_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
}
export async function deleteDocument(dispatch, payload) {
  const config = {
    method: "DELETE",
    url: `/api/shoppinglists/${payload.id}`,
    headers: {
      Authorization: `Bearer ${payload.token}`,
    },
  };

  try {
    dispatch({ type: "DOCUMENT_DELETE_REQUEST" });

    const { data } = await axios(config);

    if (data.message) {
      dispatch({ type: "DOCUMENT_DELETE_SUCCESS", payload: data.message });
      return data;
    }
    return;
  } catch (error) {
    dispatch({
      type: "DOCUMENT_DELETE_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
}

export async function saveDocument(dispatch, payload) {
  const config = {
    method: "POST",
    url: `/api/shoppinglists/`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${payload.token}`,
    },
    data: payload.document,
  };

  try {
    dispatch({ type: "DOCUMENT_SAVE_REQUEST" });
    const { data } = await axios(config);

    if (data.message) {
      dispatch({ type: "DOCUMENT_SAVE_SUCCESS", payload: data.message });

      return data.message;
    }
    return;
  } catch (error) {
    dispatch({
      type: "DOCUMENT_SAVE_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
}
export async function updateDocument(dispatch, payload) {
  const config = {
    method: "PUT",
    url: `/api/shoppinglists/${payload.id}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${payload.token}`,
    },
    data: payload.document,
  };

  try {
    dispatch({ type: "DOCUMENT_SAVE_REQUEST" });
    const { data } = await axios(config);

    if (data.message) {
      dispatch({ type: "DOCUMENT_SAVE_SUCCESS", payload: data.message });

      return data.message;
    }
    return;
  } catch (error) {
    dispatch({
      type: "DOCUMENT_SAVE_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
}
