import React from 'react';
import { View, TextInput, Button } from 'react-native';
import {Authentication} from "../Utils/Authentication";

export class Login extends React.Component {

  constructor() {
    super();
    this.state = { username: null, password: null };
    this.authentication = new Authentication();
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <TextInput
          editable={true}
          onChangeText={(username) => this.setState({username})}
          placeholder='Username'
          // ref='username'
          // returnKeyType='next'
          // style={styles.inputText}
          value={this.state.username}
        />

        <TextInput
          editable={true}
          onChangeText={(password) => this.setState({password})}
          placeholder='Password'
          // ref='password'
          // returnKeyType='next'
          secureTextEntry={true}
          // style={styles.inputText}
          value={this.state.password}
        />

        <Button
          title="Log In"
          onPress={ () => this.authentication.userLogin(this.state.username, this.state.password, navigate) }
        />
      </View>
    );
  }
}