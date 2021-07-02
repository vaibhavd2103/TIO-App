import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";

import {
  MaterialCommunityIcons,
  FontAwesome5,
  Entypo,
  Feather,
  Ionicons,
} from "react-native-vector-icons";
import Slider from "@react-native-community/slider";

const Home = (props) => {
  const Stories = [
    {
      id: "1",
      userimg: {
        uri: "https://pbs.twimg.com/profile_images/3260787908/13b71572676d06cf1d410a7019535114.jpeg",
      },
      username: "Dameon Salvatore",
      Date: "8 Nov",
      celeb: true,
      img: {
        uri: "https://images3.alphacoders.com/120/thumb-1920-120459.jpg",
      },
      title: "What I did with my first paycheck!",
      likes: "2942",
      duration: "15 min",
      comments: "23",
    },
    {
      id: "2",
      userimg: {
        uri: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg?width=982&height=726&auto=webp&quality=75",
      },
      username: "Vaibhav Dange",
      Date: "8 Nov",
      celeb: false,
      img: {
        uri: "https://analyticsindiamag.com/wp-content/uploads/2020/10/7d744a684fe03ebc7e8de545f97739dd.jpg",
      },
      title: "What I did with my first paycheck!",
      likes: "2942",
      duration: "15 min",
      comments: "23",
    },
    {
      id: "3",
      userimg: {
        uri: "https://static.toiimg.com/photo/msid-81909054/81909054.jpg?577731",
      },
      username: "Vicky Kaushal",
      Date: "8 Nov",
      celeb: true,
      img: {
        uri: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/27/08/jennifer-lawrence.jpg?width=982&height=726&auto=webp&quality=75",
      },
      title: "What I did with my first paycheck!",
      likes: "2942",
      duration: "15 min",
      comments: "23",
    },
    {
      id: "4",
      userimg: {
        uri: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      username: "Indra",
      Date: "8 Nov",
      celeb: false,
      img: {
        uri: "https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg",
      },
      title: "What I did with my first paycheck!",
      likes: "2942",
      duration: "15 min",
      comments: "23",
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={Stories}
        style={{ width: "100%", alignSelf: "center", paddingHorizontal: 35 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <View style={{ ...styles.listContainer }}>
              {/*------------------------- header----------------*/}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  borderBottomWidth: 0.2,
                  borderBottomColor: "darkgrey",
                  paddingBottom: 8,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    width: "90%",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={item.userimg}
                    style={{ height: 45, width: 45, borderRadius: 60 }}
                  />
                  <View style={{ marginLeft: 5 }}>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text
                        style={{
                          color: "white",
                          fontSize: 15,
                          fontWeight: "bold",
                          marginRight: 5,
                        }}
                      >
                        {item.username}
                      </Text>
                      {item.celeb ? (
                        <MaterialCommunityIcons
                          name="check-decagram"
                          size={20}
                          color="dodgerblue"
                        />
                      ) : (
                        <View></View>
                      )}
                    </View>
                    <Text style={{ color: "#d2d2d2", fontSize: 13 }}>
                      {item.Date}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    width: "10%",
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                  }}
                >
                  <MaterialCommunityIcons
                    name="dots-vertical"
                    size={30}
                    color="#c1c1c1"
                  />
                </View>
              </View>
              {/*-----------------------------image section-------------------------------------------------------*/}

              {/*--------------------------------Image------------------------------*/}
              <View style={{ flexDirection: "row", paddingTop: 10 }}>
                <Image
                  source={item.img}
                  style={{ height: 115, width: 100, borderRadius: 10 }}
                />
                {/*--------------------------------Title and likes------------------------------*/}
                <View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "75%",
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          fontSize: 14,
                          color: "white",
                          marginLeft: 5,
                          maxWidth: "85%",
                          paddingLeft: 5,
                        }}
                      >
                        {item.title}
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row", paddingRight: 5 }}>
                      <FontAwesome5 name="headphones" size={17} color="white" />
                      <Text
                        style={{ fontSize: 15, color: "white", marginLeft: 5 }}
                      >
                        {item.likes}
                      </Text>
                    </View>
                  </View>

                  {/* ----------------------- slider and play------------------------*/}
                  <View style={{ flexDirection: "row", paddingTop: 20 }}>
                    <Entypo name="controller-play" size={34} color="white" />

                    <Slider
                      style={{
                        width: "75%",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      minimumValue={0}
                      maximumValue={1}
                      minimumTrackTintColor="#FFFFFF"
                      maximumTrackTintColor="#a1a1a1"
                    />
                  </View>

                  <Text
                    style={{
                      color: "#a1a1a1",
                      fontSize: 11,
                      textAlign: "right",
                      right: 60,
                      bottom: 15,
                    }}
                  >
                    {item.duration}
                  </Text>
                  {/* ----------------------- slider and play------------------------*/}
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-end",
                      right: 50,
                    }}
                  >
                    <Feather name="message-square" size={18} color="white" />
                    <Text
                      style={{ color: "white", marginLeft: 5, marginRight: 10 }}
                    >
                      {item.comments}
                    </Text>

                    <Feather name="send" size={17} color="white" />
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#393D4A",
    alignSelf: "center",
  },
  listContainer: {
    height: 210,
    width: "100%",
    backgroundColor: "#23272F",
    marginTop: 10,
    alignSelf: "center",
    borderRadius: 10,
    padding: 10,
  },
});
