import { Text, View, TextInput, Button} from 'react-native';
import { useState } from 'react';


export default function SignedInPage({userName}) {

    const [logs, setLogs] = useState("")
    const [logHistory, setLogHistory] = useState("")


    function getLogHistory(){
        fetch('http:192.168.2.189:5500/getLog', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userName: userName,
          }),
        }).then(res => res.json()).then(data => {
            setLogHistory(data)
        });
      }



    function Log(){
        fetch('http:192.168.2.189:5500/addToLog', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userName: userName,
            Log: logs
          }),
        }).then(res => res.json()).then(data => {
            alert(data)
            getLogHistory()
        });
      }


      getLogHistory()

  return (
    <View style={{position: "absolute", top: "40%", left: "30%"}}>
        <TextInput onChangeText={text => setLogs(text)} placeholder="Ducks:" style={{padding: 20}} id="userName"></TextInput>
        <Button title="Log" onPress={Log} />  
        <Text>Log History</Text>
        <Text>{logHistory}</Text>
    </View>
  )

}