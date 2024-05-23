import React, {useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import BootSplash from 'react-native-bootsplash';
import {Products} from './screens';
import {colors, globalStyles} from './theme';

function App() {
  useEffect(() => {
    BootSplash.hide();
  }, []);

  return (
    <SafeAreaView style={globalStyles.container}>
      <Products />
    </SafeAreaView>
  );
}

export default App;
