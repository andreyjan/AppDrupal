import React from 'react';

export class Api {

  getBlog() {
    return fetch(Api.getBaseUrl() + 'blog_list')
      // .then(Api.checkStatus(response))
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      })
      .catch(e => e);
  }

  getBlogItem(nid) {
    return fetch(Api.getBaseUrl() + 'node/' + nid + '?_format=json')
    // .then(Api.checkStatus(response))
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      })
      .catch(e => e);
  }

  authenticateUser(userName, password) {
    return fetch(Api.getBaseUrl() + 'user/login?_format=json', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: userName,
        pass: password,
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      })
      .catch(e => e);
  }

  getSessionToken() {
    return fetch(Api.getBaseUrl() + 'session/token')
      .then((response) => response.text())
      .then((text) => {return text;})
      .catch(e => e);
  }

  static userLogout(token) {
    return fetch(Api.getBaseUrl() + 'user/logout?csrf_token=' + token)
      .catch(e => e);
  }

  static getBaseUrl() {
    return 'http://dev-app-drupal.pantheonsite.io/';
  }

  static checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      let error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }
}
