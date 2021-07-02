import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React, { useRef, useState } from "react";
import Profile from "../Screens/Profile";
import Home from "../TabScreens/Home";
import Add from "../TabScreens/Add";
import Search from "../Screens/Search";
import Posts from "../TopTab/Posts";
import Drafts from "../TopTab/Drafts";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  AntDesign,
  FontAwesome5,
  FontAwesome,
  Ionicons,
  Entypo,
  SimpleLineIcons,
  Feather,
} from "react-native-vector-icons";
import RBSheet from "react-native-raw-bottom-sheet";
import Bio from "../BottomSheet/Bio";
import BottomAdd from "../BottomSheet/BottomAdd";
import Notifications from "../Screens/Notifications";
import Messages from "../Screens/Message";
import { LinearGradient } from "expo-linear-gradient";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="BottomTab"
            component={BottomTab}
            options={{
              headerShown: false,
            }}
          />
          {/* <Stack.Screen
            name="TopTabNav"
            component={TopTabNav}
            options={{
              headerShown: false,
            }}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const Tab = createBottomTabNavigator();

function BottomTab() {
  const refRBSheet = useRef();
  return (
    <>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          activeTintColor: "#4585FF",
          // Floating Tab Bar...
          style: {
            backgroundColor: "#23272f",
            zIndex: 20,

            // Max Height...
            height: 67,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            // Shadow...
            elevation: 5,
            // shadowColor: "#ffffff",
            // shadowOffset: { width: 1, height: 5 },
            // shadowOpacity: 0.7,
            // shadowRadius: 15,
            paddingHorizontal: 20,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackNav}
          options={{
            tabBarIcon: ({ color }) => (
              <SimpleLineIcons name="home" size={24} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Add"
          component={Add}
          options={{
            tabBarIcon: ({ focused, color }) => {
              return (
                <>
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => refRBSheet.current.open()}
                  >
                    <View
                      style={{
                        width: 80,
                        height: 80,
                        backgroundColor: "#23272f",
                        borderRadius: 60,
                        bottom: 20,

                        elevation: 5,
                        shadowColor: "#ffffff",
                        shadowOffset: { width: 1, height: 5 },
                        shadowOpacity: 0.7,
                        shadowRadius: 15,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <AntDesign
                        name="plus"
                        size={24}
                        color={focused ? color : "grey"}
                      />
                    </View>

                    <RBSheet
                      ref={refRBSheet}
                      height={180}
                      closeOnDragDown={true}
                      closeOnPressMask={true}
                      customStyles={{
                        wrapper: {
                          backgroundColor: "transparent",
                        },
                        container: {
                          borderTopLeftRadius: 30,
                          borderTopRightRadius: 30,
                          backgroundColor: "#23272F",
                          alignItems: "center",
                          width: "100%",
                        },

                        draggableIcon: {
                          backgroundColor: "grey",
                        },
                      }}
                    >
                      <BottomAdd />
                    </RBSheet>
                  </TouchableOpacity>
                </>
              );
            },
          }}
        ></Tab.Screen>

        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name="search1" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
      <View
        style={{
          width: "100%",
          height: 1000,
          backgroundColor: "#393D4A",
          position: "absolute",
          zIndex: -20,
        }}
      ></View>
    </>
  );
}

const TopTab = createMaterialTopTabNavigator();

export function TopTabNav() {
  return (
    <TopTab.Navigator
      tabBarOptions={{
        style: { backgroundColor: "#23272F" },
        activeTintColor: "white",
        labelStyle: { fontWeight: "bold" },
      }}
    >
      <TopTab.Screen name="Posts" component={Posts} />
      <TopTab.Screen name="Drafts" component={Drafts} />
    </TopTab.Navigator>
  );
}

const HomeStack = createStackNavigator();

function HomeStackNav() {
  return (
    <>
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Home"
          component={MsgNotificationStack}
          options={{
            headerShown: false,
          }}
        />
        <HomeStack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
          }}
        />
      </HomeStack.Navigator>
    </>
  );
}

function MsgNotificationStack(props) {
  const [numMessage, setNumMessage] = useState("2");
  return (
    <>
      <View
        style={{
          width: "120%",
          height: 100,
          position: "absolute",
          backgroundColor: "#393D4A",
          top: 50,
        }}
      ></View>
      <LinearGradient
        style={{
          width: "100%",
          height: 100,
          flexDirection: "row",
          borderBottomRightRadius: 30,
          borderBottomLeftRadius: 30,
          justifyContent: "space-evenly",
          alignItems: "flex-end",
          paddingBottom: 20,
        }}
        colors={["#1D1F25", "#363A47"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text
          style={{
            fontSize: 24,
            color: "white",
            fontWeight: "bold",
            width: "60%",
            textAlign: "left",
            paddingLeft: 20,
          }}
        >
          TIO
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "40%",
            justifyContent: "space-evenly",
          }}
        >
          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => props.navigation.navigate("Notifications")}
          >
            <FontAwesome name="bell-o" size={26} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => props.navigation.navigate("Messages")}
          >
            <Ionicons name="mail-open-outline" size={32} color="white" />
            <View
              style={{
                backgroundColor: "#ED4747",
                height: 17,
                width: 17,
                borderRadius: 17,
                position: "absolute",
                left: 23,
                justifyContent: "center",
                alignItems: "center",
                bottom: 18,
              }}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: 9,
                  fontWeight: "normal",
                }}
              >
                {numMessage}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => props.navigation.navigate("Profile")}
          >
            <Image
              style={{ height: 32, width: 32, borderRadius: 32 }}
              source={{
                uri: "https://546458-1766807-raikfcquaxqncofqfm.stackpathdns.com/pub/media/wordpress/d5f1425700d7460bb2aa1e1e8e1b7e49.jpg",
              }}
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Messages"
          component={Messages}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </>
  );
}

export default AppNavigator;
