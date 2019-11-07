import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput , Appbar, Button } from 'react-native-paper';
import DisplayLove from './components/DisplayLove';

class App extends React.Component {
  state ={
    f_name:'',
    s_name:'',
    result:"loading"
  }

  submitit() {
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.f_name}&sname=${this.state.s_name}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "love-calculator.p.rapidapi.com",
      "x-rapidapi-key": "07ceec76c1msh61e09dea48fd64ap1489f2jsndb95cfd520d2"
    }
  }).then(data =>data.json())
  .then(data2 => {
    console.log(data2);
    this.setState({
      result:data2
    })
  })
  .catch(err => {
    console.log(err);
  });
  }

  render() {
    return (
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content
            title="Love Calculator"
            style={{alignItems:"center"}}
          />
        </Appbar.Header>
        <TextInput
          label='Your Name'
          value={this.state.f_name}
          onChangeText={text => this.setState({ f_name:text })}
        />
        <TextInput
          label='Your Partner Name'
          value={this.state.s_name}
          onChangeText={text => this.setState({ s_name:text })}
        />
        <Button icon="camera" 
        mode="contained" 
        style={{margin:10}}
        onPress={this.submitit.bind(this)}>
          Calculate
        </Button>
        <DisplayLove data = {this.state.result}/>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
