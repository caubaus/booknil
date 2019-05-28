import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import BookItem from './components/BookItem';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <BookItem />
        <BookItem />
        <BookItem />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16
  }
});
