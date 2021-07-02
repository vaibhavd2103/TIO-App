import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Messages = () => {
  return (
    <View style={styles.container}>
      <Text>Messages Screen</Text>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
