import React from 'react';
import { ActivityIndicator, AsyncStorage, View, TextInput, Button, StyleSheet } from 'react-native';
import { Login } from './Login';
import { Api } from '../api/Api';

const styles = StyleSheet.create({
  button: {
    width: 150,
    marginTop: 20,
    marginBottom: 20,
  }
});

export class AddContent extends React.Component {

  constructor() {
    super();
    this.state = {
      hasToken: false,
      token: null,
      isLoaded: false,
      title: null,
      body: null
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('id_token').then((token) => {
      this.setState({
        hasToken: token !== null,
        token: token,
        isLoaded: true
      })
    });
  }

  submitBlog(title, body) {
    let node = JSON.stringify({
      type:[{target_id:'blog'}],
      title:[{value:title}],
      body:[{value:body}]
    });
    let api = new Api();
    api.submitContent(node, this.state.token).catch(e => e);
    const {navigate} = this.props.navigation;
    navigate('Home');
  }

  render() {
    if (this.state.isLoaded === false) {
      return (
        <ActivityIndicator />
      )
    }

    if (this.state.hasToken === false) {
      return <Login />;
    }

    return (
      <View>
        <TextInput
          editable={true}
          onChangeText={(title) => this.setState({title})}
          placeholder='Title'
          value={this.state.title}
        />
        <TextInput
          editable={true}
          onChangeText={(body) => this.setState({body})}
          placeholder='Body'
          value={this.state.body}
        />
        <View style={styles.button}>
          <Button
            title="Submit"
            onPress={ () => this.submitBlog(this.state.title, this.state.body) }
          />
        </View>
      </View>
    );
  }
}