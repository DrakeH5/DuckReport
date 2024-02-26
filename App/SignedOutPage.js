import * as React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function SignedOutPage({changeLogedIn}) {

  const [didItWork, setDidItWork] = useState("")

  function createAccount(){
    fetch('http:192.168.2.189:5500/createAccount', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName: userName,
        password: password,
      }),
    }).then(res => res.json()).then(data => {
        setDidItWork(data)
    });
  }

  function logIn(){
    fetch('http:192.168.2.189:5500/loginToAccount', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName: userName,
        password: password,
      }),
    }).then(res => res.json()).then(data => {
        setDidItWork(data)
        if(data=="success"){
          changeLogedIn(userName)
        }
    });
  }


  const [userName, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
    <View style={{position: "absolute", top: "40%", left: "30%"}}>
        <TextInput onChangeText={text => setUsername(text)} placeholder="Username" style={{padding: 20}} id="userName"></TextInput>
        <TextInput onChangeText={text => setPassword(text)} placeholder="Password" style={{padding: 20}} id="password"></TextInput>
        <Button title="Log In" onPress={logIn} />  
        <Button title="Sign Up" onPress={createAccount} />  
        <Text>{didItWork}</Text>
    </View>
  )
}