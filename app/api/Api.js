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
