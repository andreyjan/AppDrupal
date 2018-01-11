import React from 'react';
import { StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import HTMLView from 'react-native-htmlview';
import { Api } from '../api/Api.js';

const styles = StyleSheet.create({
  blogItem: {
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export class BlogItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      blogItem: [],
      isLoaded: false
    };
    this.nid = this.props.navigation.state.params.nid;
  }

  componentDidMount() {
    const api = new Api();
    api.getBlogItem(this.nid).then(function(response) {
      this.setState({
        blogItem: response,
        isLoaded: true
      })
    }.bind(this));
  }

  render() {
    if (this.state.isLoaded === false) {
      return (
        <ActivityIndicator size="large" color="#0000ff" />
      )
    }

    let body = '';
    if (this.state.blogItem.hasOwnProperty('body')
      && this.state.blogItem.body.length) {
      body = this.state.blogItem.body[0].value;
    }
    return (
      <ScrollView contentContainerStyle={styles.blogItem}>
        <HTMLView
          value={body}
        />
      </ScrollView>
    );
  }
}
