import React from 'react';
import { ActivityIndicator, AsyncStorage, View, Text, Button } from 'react-native';
import { Authentication } from '../Utils/Authentication';
import { Login } from './Login';

export class AddContent extends React.Component {

  constructor() {
    super();
    this.state = { hasToken: false, isLoaded: false };
  }

  componentDidMount() {
    AsyncStorage.getItem('id_token').then((token) => {
      this.setState({ hasToken: token !== null, isLoaded: true })
    });
  }

  render() {
    if (this.state.isLoaded === false) {
      return (
        <ActivityIndicator />
      )
    }

    const authentication = new Authentication();
    if (this.state.hasToken === false) {
      return <Login />;
    }

    const {navigate} = this.props.navigation;
    return (
      <View>
        <Text>Protected Content</Text>
        <Button
          title="Log Out"
          onPress={ () => authentication.userLogout(navigate) }
        />
      </View>
    );
  }
}