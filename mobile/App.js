import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, Button } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Button
            style={styles.newItemButton}
            title="+"
            color="#000"
            accessibilityLabel="Learn more about this purple button"
            />
        </View>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={
            ({item}) => <Text style={styles.item}>{item.key}</Text>
        }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 22,
    backgroundColor: '#898'
  },
  header: {
    height: 50,
    alignItems: 'flex-end'
  },
  item: {
    padding: 10,
    fontSize: 20,
    height: 50,
    backgroundColor: '#fff',
    marginTop: 5
  },
  newItemButton: {
    fontSize:30,
    color: '#000',
    marginRight: 30
  }
})
