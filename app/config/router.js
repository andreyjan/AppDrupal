import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Blog } from '../components/Blog';
import { BlogItem } from "../components/BlogItem";

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home</Text>
    <Button
      onPress={() => navigation.navigate('Blog')}
      title="Blog"
    />
  </View>
);

export const RootNavigator = StackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            headerTitle: 'Home',
        },
    },
    Blog: {
        screen: Blog,
        navigationOptions: {
            headerTitle: 'Blog',
        },
    },
    BlogItem: {
        screen: BlogItem,
        navigationOptions: ({ navigation }) => ({
          title: navigation.state.params.name,
      }),
    },
});
