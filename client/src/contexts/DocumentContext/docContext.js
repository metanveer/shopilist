import React, { useReducer } from "react";
import { initialState, DocumentReducer } from "./docReducer";

const DocumentStateContext = React.createContext();
const DocumentDispatchContext = React.createContext();

export function useDocumentState() {
  const context = React.useContext(DocumentStateContext);
  if (context === undefined) {
    throw new Error("useDocumentState must be used within a DocumentProvider");
  }

  return context;
}

export function useDocumentDispatch() {
  const context = React.useContext(DocumentDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useDocumentDispatch must be used within a DocumentProvider"
    );
  }

  return context;
}

export const DocumentProvider = ({ children }) => {
  const [document, dispatch] = useReducer(DocumentReducer, initialState);

  return (
    <DocumentStateContext.Provider value={document}>
      <DocumentDispatchContext.Provider value={dispatch}>
        {children}
      </DocumentDispatchContext.Provider>
    </DocumentStateContext.Provider>
  );
};
