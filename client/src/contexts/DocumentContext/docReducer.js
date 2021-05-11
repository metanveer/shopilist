export const initialState = {
  documents: [],
  currentDocument: null,
  loading: false,
  message: null,
  errorMessage: null,
};

export const DocumentReducer = (initialState, action) => {
  switch (action.type) {
    case "DOCUMENTS_GET_REQUEST":
      return {
        ...initialState,
        documents: [],
        currentDocument: null,
        loading: true,
        message: null,
        errorMessage: null,
      };
    case "DOCUMENTS_GET_SUCCESS":
      return {
        ...initialState,
        documents: action.payload,
        currentDocument: null,
        loading: false,
        message: null,
        errorMessage: null,
      };
    case "DOCUMENTS_GET_FAIL":
      return {
        ...initialState,
        documents: [],
        currentDocument: null,
        loading: false,
        message: null,
        errorMessage: action.payload,
      };
    case "DOCUMENT_GET_REQUEST":
      return {
        ...initialState,
        documents: [],
        currentDocument: null,
        loading: true,
        message: null,
        errorMessage: null,
      };
    case "DOCUMENT_GET_SUCCESS":
      return {
        ...initialState,
        documents: [],
        currentDocument: action.payload,
        loading: false,
        message: null,
        errorMessage: null,
      };
    case "DOCUMENT_GET_FAIL":
      return {
        ...initialState,
        documents: [],
        currentDocument: null,
        loading: false,
        message: null,
        errorMessage: action.payload,
      };

    case "DOCUMENT_DELETE_REQUEST":
      return {
        ...initialState,
        loading: true,
        message: null,
        errorMessage: null,
      };
    case "DOCUMENT_DELETE_SUCCESS":
      return {
        ...initialState,
        documents: [],
        currentDocument: null,
        loading: false,
        message: action.payload,
        errorMessage: null,
      };
    case "DOCUMENT_DELETE_FAIL":
      return {
        ...initialState,

        loading: false,
        message: null,
        errorMessage: action.payload,
      };

    case "DOCUMENT_SAVE_REQUEST":
      return {
        ...initialState,
        documents: [],
        currentDocument: null,
        loading: true,
        message: null,
        errorMessage: null,
      };
    case "DOCUMENT_SAVE_SUCCESS":
      return {
        ...initialState,
        documents: [],
        currentDocument: null,
        loading: false,
        message: action.payload,
        errorMessage: null,
      };
    case "DOCUMENT_SAVE_FAIL":
      return {
        ...initialState,
        documents: [],
        currentDocument: null,
        loading: false,
        message: null,
        errorMessage: action.payload,
      };
    case "DOCUMENT_RESET":
      localStorage.removeItem("currentDoc");
      return {
        ...initialState,
        documents: [],
        currentDocument: null,
        loading: false,
        message: null,
        errorMessage: null,
      };
    case "DOCUMENT_RESET_ERROR":
      return {
        ...initialState,
        message: null,
        errorMessage: null,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
