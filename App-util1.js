import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function AppUtil() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>

        <Text>{"\n"}and wow!</Text>
      </View>
    );
}

