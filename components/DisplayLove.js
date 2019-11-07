import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DisplayLove = (prop) => {
    if(prop.data == "loading") {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Result</Text>
            </View>
        )
    }else if(prop.data.message) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Soory something went wrong with API</Text>
                <Text style={styles.text}>Please try AGAIN.</Text>
            </View>
        )
    } else {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{prop.data.percentage}</Text>
                <Text style={styles.text}>{prop.data.result}</Text>
            </View>
        )
    }
}

export default DisplayLove

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center'
    },
    text: {
        fontSize: 30,
        textAlign: 'center'
    }
  });