
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './ios/src/components/header';
import AlbumList from './ios/src/components/AlbumList';

const App = () => (    
    <View>
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
);

AppRegistry.registerComponent('albums', () => App);
