import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home</Text>
    <Button
      onPress={() => navigation.navigate('Blog')}
      title="Blog"
    />
  </View>
);

const BlogScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Blog</Text>
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
        screen: BlogScreen,
        navigationOptions: {
            headerTitle: 'Blog',
        },
    },
});
