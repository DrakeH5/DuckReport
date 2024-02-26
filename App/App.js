import { useState } from 'react';
import { Text } from 'react-native';
import SignedInPage from './signedInPage.js';
import SignedOutPage from './SignedOutPage.js';

export default function Homepage(){

  const [signedIn, setSignedIn] = useState()

  function logIn(userName) {
    setSignedIn(userName);
  }

  if(signedIn){
    return <SignedInPage userName={signedIn}/>
  } else {
    return <SignedOutPage changeLogedIn={logIn}/>
  }
}