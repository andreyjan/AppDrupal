import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Blog } from '../components/Blog';
import { BlogItem } from '../components/BlogItem';
import { Login } from '../components/Login';
import { AddContent } from '../components/AddContent';
import { Home } from '../components/Home';

export const RootNavigator = StackNavigator({
    Home: {
        screen: Home,
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
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Login',
        },
    },
    AddContent: {
        screen: AddContent,
        navigationOptions: {
            title: 'Add Content',
        },
    }
});