let user = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : "";
let token = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).tokens[
      JSON.parse(localStorage.getItem("currentUser")).tokens.length - 1
    ].token
  : "";

export const initialState = {
  user: "" || user,
  token: "" || token,
  loading: false,
  errorMessage: null,
  message: null,
};

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case "REGISTER_REQUEST":
      return {
        ...initialState,
        loading: true,
        errorMessage: null,
      };
    case "REGISTER_SUCCESS":
      return {
        ...initialState,
        user: action.payload,
        token: action.payload.tokens[action.payload.tokens.length - 1].token,
        loading: false,
        errorMessage: null,
        message: "Registered successfully",
      };
    case "REGISTER_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.payload,
        message: null,
      };
    case "PROFILE_GET_REQUEST":
      return {
        ...initialState,
        loading: true,
        errorMessage: null,
        message: null,
      };
    case "PROFILE_GET_SUCCESS":
      return {
        ...initialState,
        user: action.payload,
        token: action.payload.tokens[action.payload.tokens.length - 1].token,
        loading: false,
        errorMessage: null,
        message: "Profile loaded successfully",
      };
    case "PROFILE_GET_FAIL":
      return {
        ...initialState,
        userId: "",
        token: "",
        loading: false,
        errorMessage: action.payload,
        message: null,
      };
    case "REQUEST_LOGIN":
      return {
        ...initialState,
        loading: true,
        errorMessage: null,
        message: null,
      };
    case "LOGIN_SUCCESS":
      return {
        ...initialState,
        user: action.payload,
        token: action.payload.tokens[action.payload.tokens.length - 1].token,
        loading: false,
        errorMessage: null,
        message: "Logged in successfully",
      };
    case "LOGIN_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.payload,
        message: null,
      };
    case "LOGOUT_REQUEST":
      return {
        ...initialState,
        loading: true,
        errorMessage: null,
        message: null,
      };
    case "LOGOUT_SUCCESS":
      return {
        ...initialState,
        loading: false,
        user: "",
        token: "",
        errorMessage: null,
        message: action.payload,
      };
    case "LOGOUT_FAIL":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.payload,
        message: null,
      };
    case "DELETE_USER_REQUEST":
      return {
        ...initialState,
        loading: true,
        errorMessage: null,
        message: null,
      };
    case "DELETE_USER_SUCCESS":
      return {
        ...initialState,
        user: "",
        token: "",
        errorMessage: null,
        loading: false,
        message: action.payload,
      };
    case "DELETE_USER_FAIL":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.payload,
        message: null,
      };
    case "AUTH_RESET":
      return {
        ...initialState,
        user: "",
        token: "",
        loading: false,
        errorMessage: null,
        message: null,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
