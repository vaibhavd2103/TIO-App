import React from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import { AntDesign, Entypo } from "react-native-vector-icons";
import Slider from "@react-native-community/slider";
import { SwipeListView } from "react-native-swipe-list-view";

const Drafts = (props) => {
  const data = [
    {
      img: {
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkJHriFTzIuuXe3HL4GciauuJ5HQnD_UZtgw&usqp=CAU",
      },

      title: " What I did with my first",
      subtitle: "paycheck!",
      date: "  .Nov 8",
      duration: "15 min",
      id: "1",
    },
    {
      img: {
        uri: "https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      },

      title: " What I did with my first",
      subtitle: "paycheck!",
      date: "  .Nov 10",
      duration: "15 min",
      id: "2",
    },
    {
      img: {
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfrLAZZRhW85ny1UWBbuyo4_ATKJgx7dHK6Q&usqp=CAU",
      },

      title: " My Trip to Paris!",
      date: "  .Nov 8",
      duration: "11 min",
      id: "3",
      subtitle: "Chapter 8: Lorem Ipsum",
    },
  ];

  return (
    <View style={styles.container}>
      <SwipeListView
        data={data}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                backgroundColor: "#393d4a",
                height: 150,
                borderBottomWidth: 0.2,
                borderBottomColor: "#696969",
              }}
            >
              <View
                style={{
                  justifyContent: "center",

                  width: "25%",
                  height: "100%",
                  alignItems: "flex-start",
                  paddingLeft: 15,
                }}
              >
                <Image source={item.img} style={styles.image} />
              </View>

              <View style={{ width: "75%", paddingRight: 10 }}>
                <View style={{ paddingTop: 20 }}>
                  <Text style={styles.text}>{item.title}</Text>

                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text
                      style={{ fontSize: 14, color: "white", paddingLeft: 6 }}
                    >
                      {item.subtitle}
                    </Text>
                    <Text style={{ fontSize: 12, color: "grey" }}>
                      {item.date}
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: 20,
                  }}
                >
                  <Entypo name="controller-play" size={28} color="white" />

                  <Slider
                    style={{
                      width: "90%",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: 30,
                    }}
                    minimumValue={0}
                    maximumValue={1}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#17191F"
                    thumbTintColor="white"
                  />
                </View>

                <View style={{ alignItems: "flex-end" }}>
                  <Text
                    style={{
                      color: "grey",
                      paddingBottom: 20,
                      bottom: 10,
                      fontSize: 10,
                      textAlign: "right",
                      paddingRight: 20,
                    }}
                  >
                    {item.duration}
                  </Text>
                </View>
              </View>
            </View>
          );
        }}
        renderHiddenItem={(data, rowMap) => (
          <View
            style={{
              backgroundColor: "#ED4747",
              height: "100%",
              width: "100%",
            }}
          >
            <AntDesign name="delete" size={24} color="white" />
          </View>
        )}
        disableRightSwipe={true}
        rightOpenValue={-75}
      />
    </View>
  );
};

export default Drafts;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    backgroundColor: "#393d4a",
    height: "100%",
  },
  image: {
    height: 100,
    width: 70,
    paddingLeft: 20,
    borderRadius: 10,
  },
  text: {
    fontSize: 14,
    color: "white",
  },
});
