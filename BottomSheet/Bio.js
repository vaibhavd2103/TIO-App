import React from "react";
import { ScrollView } from "react-native";
import { TouchableOpacity, TextInput } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "react-native-vector-icons";

const Bio = ({ name }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          paddingTop: 4,
          alignItems: "center",
          marginVertical: 3,
        }}
      >
        <Text style={styles.text}>ADD BIO</Text>
      </View>
      <View style={styles.search}>
        <View style={{ flexDirection: "row", width: "95%" }}>
          <TextInput
            placeholderTextColor="grey"
            placeholder="Your Bio here"
            style={{ position: "absolute", top: 8, fontSize: 18 }}
          />
        </View>
      </View>
      <View style={styles.search2}>
        <TouchableOpacity>
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              numberOfLines={1}
              style={{
                fontSize: 18,
                fontWeight: "700",
                color: "white",
                width: "100%",
                maxWidth: "100%",
              }}
            >
              SAVE
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Bio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#23272F",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 3,
  },
  search: {
    flexDirection: "row",
    backgroundColor: "#393d4a",
    height: 90,
    borderRadius: 15,
    margin: 6,
    paddingLeft: 10,
    marginVertical: 20,
  },
  search2: {
    backgroundColor: "#393d4a",
    width: "90%",
    height: 50,
    borderRadius: 40,
    elevation: 3,
    alignItems: "center",
    justifyContent: "center",
  },
});
