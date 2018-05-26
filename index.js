
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './ios/src/components/header';
import AlbumList from './ios/src/components/AlbumList';

const App = () => (    
    <View style={{ flex: 1 }}>
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
);

AppRegistry.registerComponent('albums', () => App);
