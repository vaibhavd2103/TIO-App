import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { TopTabNav } from "../AppNavigator/AppNavigator";
import {
  AntDesign,
  FontAwesome5,
  FontAwesome,
  Ionicons,
  Entypo,
} from "react-native-vector-icons";
import { StatusBar } from "expo-status-bar";
import RBSheet from "react-native-raw-bottom-sheet";
import Bio from "../BottomSheet/Bio";
import ProfilePic from "../BottomSheet/ProfilePic";

const Profile = (props) => {
  const refRBSheet = useRef();
  return (
    <>
      <StatusBar style="light" />
      <View
        style={{
          width: "120%",
          height: 100,
          position: "absolute",
          backgroundColor: "#23272F",
          top: 130,
        }}
      ></View>
      <View
        style={{
          height: 200,
          width: "100%",
          justifyContent: "center",
          backgroundColor: "#17191F",
          paddingHorizontal: 15,
          borderBottomLeftRadius: 35,
          borderBottomRightRadius: 35,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          {/* Icon */}
          <Ionicons
            name="arrow-back-sharp"
            size={25}
            color="white"
            onPress={() => props.navigation.goBack()}
          />
          <Entypo name="dots-three-vertical" size={18} color="white" />
        </View>

        <View
          style={{
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <View style={{ width: "70%" }}>
            <Text style={{ fontSize: 18, color: "white", fontWeight: "bold" }}>
              Lauren Smith
            </Text>
            <TouchableOpacity
              onPress={() => refRBSheet.current.open()}
              style={{ justifyContent: "center" }}
            >
              <View>
                <Text
                  style={{ color: "#4585FF", fontWeight: "bold", fontSize: 14 }}
                >
                  Add a Bio
                </Text>
                <RBSheet
                  ref={refRBSheet}
                  height={280}
                  closeOnDragDown={true}
                  closeOnPressMask={true}
                  customStyles={{
                    wrapper: {
                      backgroundColor: "transparent",
                    },
                    container: {
                      width: "100%",
                      backgroundColor: "transparent",
                    },

                    draggableIcon: {
                      backgroundColor: "grey",
                      width: 70,
                      height: 3,
                    },
                  }}
                >
                  <Bio />
                </RBSheet>
              </View>
            </TouchableOpacity>
            <View
              style={{ flexDirection: "row", width: "100%", marginTop: 10 }}
            >
              <View style={styles.smallBox}>
                <Text style={styles.count}>0</Text>
                <Text style={styles.info}>Followers</Text>
              </View>
              <View style={styles.smallBox}>
                <Text style={styles.count}>27</Text>
                <Text style={styles.info}>Following</Text>
              </View>
              <View style={styles.smallBox}>
                <Text style={styles.count}>18</Text>
                <Text style={styles.info}>Posts</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              width: "30%",
              backgroundColor: "transparent",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <ImageBackground
              source={{
                uri: "https://546458-1766807-raikfcquaxqncofqfm.stackpathdns.com/pub/media/wordpress/d5f1425700d7460bb2aa1e1e8e1b7e49.jpg",
              }}
              style={{ height: 90, width: 90 }}
              imageStyle={{ borderRadius: 100 }}
            >
              <View
                style={{
                  backgroundColor: "#17191F",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 30,
                  width: 30,
                  borderRadius: 60,
                  elevation: 3,
                  position: "absolute",
                  top: 60,
                }}
              >
                {/* Icon */}

                <FontAwesome
                  name="camera"
                  size={14}
                  color="#A2A9B8"
                  onPress={() => refRBSheet.current.open()}
                />
                <RBSheet
                  ref={refRBSheet}
                  height={250}
                  closeOnDragDown={true}
                  closeOnPressMask={true}
                  customStyles={{
                    wrapper: {
                      backgroundColor: "transparent",
                    },
                    draggableIcon: {
                      backgroundColor: "grey",
                      width: 70,
                      height: 3,
                    },
                    container: {
                      width: "100%",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  <ProfilePic />
                </RBSheet>
              </View>
            </ImageBackground>
          </View>
        </View>
      </View>

      <NavigationContainer independent={true}>
        <TopTabNav />
      </NavigationContainer>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  smallBox: {
    flex: 1,
  },
  count: {
    color: "#A2A9B8",
    fontSize: 14,
  },
  info: {
    color: "white",
    fontSize: 14,
  },
});
