/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  NavigatorIOS,
  View
} from 'react-native';
import Main from './App/components/main';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
});

class helloworld extends Component {
  render() {
    var nick = "nick";
    return (
      <NavigatorIOS
      style={styles.container}
        initialRoute={{
            title: 'Github Notetaker',
            component: Main
        }}/>

    );
  }
}



AppRegistry.registerComponent('helloworld', () => helloworld);
