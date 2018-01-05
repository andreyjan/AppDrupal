import React from 'react';
import {StyleSheet, View} from 'react-native';
import HTMLView from 'react-native-htmlview';
import { Api } from '../api/Api.js';

const styles = StyleSheet.create({
  blogItem: {
    flex: 1,
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export class BlogItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      blogItem: []
    };
    this.nid = this.props.navigation.state.params.nid;
  }

  componentDidMount() {
    const api = new Api();
    api.getBlogItem(this.nid).then(function(response) {
      this.setState({
        blogItem: response
      })
    }.bind(this));
  }

  render() {
    let body = '';
    if (this.state.blogItem.hasOwnProperty('body')
      && this.state.blogItem.body.length) {
      body = this.state.blogItem.body[0].value;
    }
    return (
      <View style={styles.blogItem}>
        <HTMLView
          value={body}
        />
      </View>
    );
  }
}
