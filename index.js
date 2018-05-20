
import React from 'react';
import { AppRegistry, Text } from 'react-native';
import Header from './ios/src/components/header';

const App = () => (
    <Header />
);



AppRegistry.registerComponent('albums', () => App);
