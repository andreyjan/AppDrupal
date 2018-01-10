import React from 'react';
import { StyleSheet, View, Text, Button, AsyncStorage, ActivityIndicator } from 'react-native';
import { Authentication } from "../Utils/Authentication";

const styles = StyleSheet.create({
  button: {
    width: 150,
    marginTop: 20,
    marginBottom: 20,
  }
});

export class Home extends React.Component {

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
    const {navigate} = this.props.navigation;
    const authentication = new Authentication();

    let actions = '';
    if (this.state.isLoaded === false) {
        actions = <ActivityIndicator />;
    }
    else {
      if (this.state.hasToken === true) {
        actions = (
          <View>
            <View style={styles.button}>
              <Button
                style={styles.button}
                onPress={() => navigate('AddContent')}
                title="Add Content"
              />
            </View>
            <View style={styles.button}>
              <Button
                style={styles.button}
                title="Log Out"
                onPress={ () => authentication.userLogout(navigate) }
              />
            </View>
          </View>
        );
      }
      else {
        actions = (
          <View style={styles.button}>
            <Button
              style={styles.button}
              onPress={() => navigate('Login')}
              title="Log In"
            />
          </View>
        );
      }
    }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home</Text>
        <View style={styles.button}>
          <Button
            style={styles.button}
            onPress={() => navigate('Blog')}
            title="Blog"
          />
        </View>
        { actions }
      </View>
    );
  }
}