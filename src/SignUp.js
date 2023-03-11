import React from 'react';
import { ImageBackground, StyleSheet, View, Platform } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const SignUp = ({ navigation }) => {
  const titleFont = Platform.OS === 'android' ? 'Roboto' : 'Helvetica';
  const titleFontWeight = Platform.OS === 'android' ? 'bold' : '600';

  return (
    <ImageBackground
      source={require('../assets/bg.jpg')}
      style={styles.background}>
      <View style={styles.container}>
        
        <View>
          <View style={styles.titleContainer}>
            <Text h1 style={[styles.title, { fontFamily: titleFont, fontWeight: titleFontWeight }]}>
              Lens35
            </Text>
            <Text style={styles.subtext}>Frame all your moments</Text>
          </View>

          <View>
            <Input
              placeholder="Mobile Number"
              color="#fff"
              placeholderTextColor="#fff"
              leftIcon={<Icon name="user" size={24} color="#fff" />}
            />
            <Input
              placeholder="Email ID"
              color="#fff"
              placeholderTextColor="#fff"
              leftIcon={<Icon name="user" size={24} color="#fff" />}
            />
            <Input
              placeholder="Email"
              placeholderTextColor="#fff"
              color="#fff"
              secureTextEntry
              leftIcon={<Icon name="lock" size={24} color="#fff" />}
            />
            <Button title="Register"  containerStyle={{ marginVertical: 10 }}/>
            <Button title="Back to Login" containerStyle={{ marginVertical: 10 }}  onPress={() => navigation.navigate('Login')} />
          </View>
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.footer}>
            © 2023 aravindrpillai.com | All rights reserved.
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 50,
    marginTop: "50%",
  },
  title: {
    textAlign: 'center',
    color: '#fff',
  },
  subtext: {
    textAlign: 'center',
    color: '#fff',
    marginTop: 10,
    fontSize: 16,
  },
  footerContainer: {
    marginBottom: 20,
  },
  footer: {
    textAlign: 'center',
    fontSize: 12,
    color: '#fff',
  },
});

export default SignUp;
