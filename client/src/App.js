import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import GlobalStyle from "./GlobalStyles";
import { light, dark } from "./configs/colors";
import { ThemeProvider } from "styled-components";
import ItemsContextProvider from "./contexts/ShoppingListContext";
import Header from "./components/Header/Header";
import { Container } from "./GlobalStyles";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import SavedLists from "./pages/SavedLists/SavedLists";
import ViewList from "./pages/ViewList/ViewList";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import { AuthProvider } from "./contexts/AuthContext";
import { DocumentProvider } from "./contexts/DocumentContext";
import Profile from "./pages/Profile/Profile";

const App = () => {
  const userTheme = localStorage.getItem("shopilistTheme");

  const [theme, setTheme] = useState(userTheme === "dark" ? dark : light);

  return (
    <AuthProvider>
      <ItemsContextProvider>
        <DocumentProvider>
          <ThemeProvider theme={{ ...theme, setTheme }}>
            <GlobalStyle />
            <Router>
              <Header />
              <Container>
                <Switch>
                  <Route path="/not-found">
                    <NotFound />
                  </Route>
                  <Route path="/about">
                    <About />
                  </Route>
                  <Route path="/saved-lists">
                    <SavedLists />
                  </Route>
                  <Route path="/register">
                    <Register />
                  </Route>
                  <Route path="/profile">
                    <Profile />
                  </Route>
                  <Route path="/login">
                    <Login />
                  </Route>
                  <Route path="/view-list/:id">
                    <ViewList />
                  </Route>
                  <Route path="/edit/:id">
                    <Home />
                  </Route>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Redirect to="/not-found" />
                </Switch>
              </Container>
            </Router>
          </ThemeProvider>
        </DocumentProvider>
      </ItemsContextProvider>
    </AuthProvider>
  );
};

export default App;
