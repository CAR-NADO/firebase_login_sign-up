import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Registration from './Registration.js';
import Login from './Login.js';
import Welcome from './Welcome';
import auth from './firebase';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {login, logout, selectUser} from './redux/userSlice'
// import {Redirect} from 'react-router-dom'

function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);
  console.log("redux",user);

  return (
    <BrowserRouter>
      <Switch>
        {
         ! user ? (  <>
          <Route exact path="/register">
          <Registration />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Redirect to ="/register" />
          </> ): (
            <>
         <Route exact path="/">
         <Welcome />
       </Route>
       <Redirect to ="/" />
       </>
        )
        }
        
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
