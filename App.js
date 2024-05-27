import 'react-native-gesture-handler';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { StatusBar, Alert } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { StyleSheet, Image, Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Login from './Components/Login';
import StudentNavigation from './Navigation/StudentNavigation';
import TeacherNavigation from './Navigation/TeacherNavigation';
import StudentMain from './Students/StudentMain';
import IMAGES from './assets/img';

const Stack = createStackNavigator();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(0)); 

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync(); 
        await Font.loadAsync({
          'oswald': require('./assets/Fonts/Oswald-VariableFont_wght.ttf'),
        });
        
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }).start(() => setAppIsReady(true)); 
      } catch (e) {
        console.warn('Error loading fonts', e);
        Alert.alert('Error', 'Unable to load fonts, please restart the app.');
      } finally {
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, [fadeAnim]);

  if (!appIsReady) {
    return (
      <Animated.View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', opacity: fadeAnim, backgroundColor: 'white' }}>
        <Image style={{ position: 'relative', bottom: 150, width: 430, objectFit: 'contain' }} source={IMAGES.AITU} />
      </Animated.View>
    );
  }

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          transitionSpec: {
            open: {
              animation: 'timing',
              config: {
                duration: 500,
              },
            },
            close: {
              animation: 'timing',
              config: {
                duration: 500,
              },
            },
          },
        }}
        initialRouteName="Login"
      >
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name="StudentNavigation" component={StudentNavigation} />
        <Stack.Screen name='TeacherNavigation' component={TeacherNavigation} />
        <Stack.Screen name="StudentMain" component={StudentMain} />
        <Stack.Screen name="SubjectDetails">
          {({ route }) => {
            const Component = route.params.component;
            return <Component />;
          }}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

