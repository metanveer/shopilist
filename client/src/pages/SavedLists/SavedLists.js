import React, { useEffect } from "react";
import Message from "../../components/Message/Message";
import { useAuthState } from "../../contexts/AuthContext";
import {
  getDocuments,
  useDocumentDispatch,
  useDocumentState,
} from "../../contexts/DocumentContext";
import { SavedCard, TextLink, Card } from "./SavedLists.elem";

const SavedLists = () => {
  const dispatch = useDocumentDispatch();
  const { documents, loading, errorMessage } = useDocumentState();
  const { token, user } = useAuthState();

  useEffect(() => {
    async function getDocs() {
      await getDocuments(dispatch, token);
    }
    getDocs();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {!user && <Card>Please Sign in</Card>}
      {user && (
        <SavedCard>
          <div
            style={{
              margin: "0 auto 15px auto",
              fontWeight: "300",
              fontSize: "20px",
              textAlign: "center",
            }}
          >
            <strong>{`${user.name.split(" ")[0]}'s Shopping Lists`}</strong>
          </div>

          {loading ? (
            <Message text="Loading..." />
          ) : errorMessage ? (
            <Message error text={errorMessage} />
          ) : (
            documents.map((doc) => (
              <Card key={doc._id}>
                <TextLink to={`/view-list/${doc._id}`}>{doc.title}</TextLink>
              </Card>
            ))
          )}
        </SavedCard>
      )}
    </>
  );
};

export default SavedLists;
