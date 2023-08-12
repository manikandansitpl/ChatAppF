import { useState } from "react";

import "./App.css";
import AuthPage from "./AuthPage";
import ChatPages from "./ChatPages";
import LoginPage from "./loginCred";
// import { useSelector } from "react-redux";



function App() {
  const [user, setUser] = useState(undefined);
  // const result = useSelector(state=>state.auth.value.username);
  const sess = sessionStorage.getItem('bool');
  if(!sess ){
    return <LoginPage/>
  }
  else {if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatPages user={user} />;
  }}
}

export default App;