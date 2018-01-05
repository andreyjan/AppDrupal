import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Api } from '../api/Api.js';
import {BlogItem} from "./BlogItem";

const styles = StyleSheet.create({
  blogView: {
    flex: 1,
    alignItems: 'stretch',
  },
  blogItem: {
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#000000',
    paddingBottom: 10,
  },
  blogItemTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  blogItemBody: {
    marginTop: 10,
    fontSize: 20,
  },
  button: {
    width: 150,
  }
});

const striptags = require('striptags');

export class Blog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      blog: []
    };
  }

  componentDidMount() {
    const api = new Api();
    api.getBlog().then(function(response) {
      this.setState({
        blog: response
      })
    }.bind(this));
  }

  render() {

    return (
      <View style={styles.blogView}>
        {this.state.blog.map(function(node) {
          const {navigate} = this.props.navigation;
          let body = striptags(node.body);
          return (
            <View key={node.nid} style={styles.blogItem}>
              <Text style={styles.blogItemTitle}>{node.title}</Text>
              <Text numberOfLines={3} style={styles.blogItemBody}>{body}</Text>
              <View style={styles.button}>
                <Button
                  title="Read More"
                  onPress={() =>
                    navigate('BlogItem', { name: node.title, nid: node.nid })
                  }
                />
              </View>
            </View>
          );
        }.bind(this))}
      </View>
    );
  }
}