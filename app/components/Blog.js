import React from 'react';
import { View, Text } from 'react-native';
import HTMLView from 'react-native-htmlview';
import { Api } from '../api/Api.js';

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
    // console.log(this.state.blog);
    return (
      <View>
        <Text>Blog here!</Text>
        {this.state.blog.map(function(node) {
          return (
            <View key={node.nid}>
              <Text>{node.title}</Text>
              <HTMLView value={node.body} />
            </View>
          );
        })}
      </View>
    );
  }
}