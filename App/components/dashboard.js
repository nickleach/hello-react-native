import React, {
  Component,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import Profile from './profile';
import Repositories from './repositories';
import api from '../utils/api';
import Notes from './notes';

const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
});

class Dashboard extends React.Component{
    makeBackground(btn){
        var obj = {
            flexDirection: 'row',
            alignSelf: 'stretch',
            justifyContent: 'center',
            flex: 1
        }
        if(btn === 0){
          obj.backgroundColor = '#48BBEC';
        } else if (btn === 1){
          obj.backgroundColor = '#E77AAE';
        } else {
          obj.backgroundColor = '#758BF4';
        }
        return obj
    }
    goToProfile(){
        this.props.navigator.push({
            component: Profile,
            title: 'Profile Page',
            passProps: {userInfo: this.props.userInfo}
        });
    }
    goToRepos(){
        api.getRepos(this.props.userInfo.login)
        .then((res) => {
            this.props.navigator.push({
                component: Repositories,
                title: 'Repos Page',
                passProps: {
                    userInfo: this.props.userInfo,
                    repos: res
                }
            });
        });
    }
    goToNotes(){
        api.getNotes(this.props.userInfo.login)
        .then((res) => {
            res = res || {};
            this.props.navigator.push({
                component: Notes,
                title: 'Notes',
                passProps: {
                    notes: res,
                    userInfo: this.props.userInfo
                }
            });
        });
    }
    render() {
        console.log(this.props);
        return (
            <View style={styles.container}>
                <Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image}/>
                <TouchableHighlight
                    style={this.makeBackground(0)}
                    onPress={this.goToProfile.bind(this)}
                    underlayColor= '#88D4F5'>
                        <Text style={styles.buttonText}> View Profile </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={this.makeBackground(1)}
                    onPress={this.goToRepos.bind(this)}
                    underlayColor= '#88D4F5'>
                        <Text style={styles.buttonText}> View Repos </Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={this.makeBackground(2)}
                    onPress={this.goToNotes.bind(this)}
                    underlayColor= '#88D4F5'>
                        <Text style={styles.buttonText}> View Notes </Text>
                </TouchableHighlight>
            </View>
        )
    }
}

export default Dashboard;
