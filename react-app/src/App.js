import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
// import SignupFormPage from "./components/SignupFormPage";
// import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import UserCurrent from "./components/UserCurrentPage";
import CardCreate from "./components/CardCreatePage";
import OneCard from "./components/CardOnePage";
import SplashPage from "./components/UserSplashPage";
import OneDeck from "./components/DeckOnePage";
import DeckCreate from "./components/DeckCreatePage";
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/profile" >
            <UserCurrent />
          </Route>
          <Route path="/deck/create">
            <DeckCreate />
          </Route>
          <Route path="/create">
            <CardCreate />
          </Route>
          <Route exact path='/deck/:idx'>
          <OneDeck />
          </Route>
          <Route exact path="/:idx">
            <OneCard />
          </Route>
          <Route exact path="/">
            <SplashPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
