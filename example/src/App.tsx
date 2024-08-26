import { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as SkarbSDKManager from 'react-native-scarb-sdk';

export function generateUuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export default function App() {
  const init = () => {
    const deviceId = generateUuid();

    SkarbSDKManager.initialize('Danila', true, deviceId);
    console.log('initialized');
  };

  const sendSource = () => {
    console.log('send source');
    SkarbSDKManager.sendSource('facebook', { click: 'clicked govno' });
  };

  const sendTest = () => {
    console.log('send test');
    SkarbSDKManager.sendTest('test', 'test');
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <View style={styles.screen}>
      <TouchableOpacity style={styles.button} onPress={sendSource}>
        <Text style={styles.buttonText}>Send Source</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={sendTest}>
        <Text style={styles.buttonText}>Send Test</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 12,
  },
  button: {
    backgroundColor: '#3774de',
    paddingHorizontal: 14,
    height: 50,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 17,
  },
});
