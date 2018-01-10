import React from 'react';
import { AsyncStorage } from 'react-native';
import { Api } from '../api/Api';

export class Authentication extends React.Component {

  async saveItem(item, selectedValue) {
    try {
      await AsyncStorage.setItem(item, selectedValue);
    } catch (error) {
      console.error('AsyncStorage error: ' + error.message);
    }
  }

  userLogin(userName, password, navigate) {
    if (!userName || !password) return;

    const api = new Api();
    api.authenticateUser(userName, password)
      .then((response) => {
        if (typeof  response.csrf_token !== 'undefined') {
          this.saveItem('id_token', response.csrf_token);
          alert('Login Success!');
          navigate('Home');
        }
        else {
          alert('An error occurred. Please try again!');
        }
      })
      .catch(e => e);
  }

  async userLogout(navigate) {
    const api = new Api();
    api.getSessionToken()
      .then((token) => Api.userLogout(token))
      .catch(e => e);
    try {
      await AsyncStorage.removeItem('id_token');
      alert('Logout Success!');
      navigate('Home');
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  }
}
