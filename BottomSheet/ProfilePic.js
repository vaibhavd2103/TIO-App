import React from "react";
import { ScrollView } from "react-native";
import { TouchableOpacity, TextInput } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "react-native-vector-icons";

const ProfilePic = ({ name }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 4,
        }}
      >
        <Text style={styles.text}>
          Make your profile picture your app icon?
        </Text>
        <Text style={styles.text1}>
          You can change this in profile settings later.
        </Text>
      </View>
      <View style={styles.search1}>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              width: "95%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "700", color: "white" }}>
              ALLOW
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.search2}>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              width: "90%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "700", color: "white" }}>
              CANCEL
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfilePic;

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
    fontSize: 16,

    marginVertical: 3,
  },
  text1: {
    color: "#a2a9b8",
    fontSize: 13,

    marginVertical: 3,
  },
  search1: {
    flexDirection: "row",
    backgroundColor: "#393d4a",
    width: "90%",
    alignItems: "center",
    height: 50,
    borderRadius: 40,
    margin: 6,
    paddingLeft: 10,
    justifyContent: "center",
    marginVertical: 9,
    elevation: 3,
  },
  search2: {
    flexDirection: "row",
    backgroundColor: "#17191F",
    width: "90%",
    alignItems: "center",
    height: 50,
    borderRadius: 40,
    margin: 6,
    paddingLeft: 10,
    justifyContent: "center",
    marginVertical: 9,
    elevation: 3,
  },
});
