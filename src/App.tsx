import React, {useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import BootSplash from 'react-native-bootsplash';

function App() {
  useEffect(() => {
    BootSplash.hide();
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Text>Product Browser</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
