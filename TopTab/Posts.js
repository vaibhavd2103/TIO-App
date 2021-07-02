import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import {
  AntDesign,
  FontAwesome5,
  FontAwesome,
  Ionicons,
  Entypo,
  SimpleLineIcons,
  Feather,
} from "react-native-vector-icons";

const Posts = () => {
  const story = [
    {
      img: {
        uri: "https://www.riotgames.com/darkroom/1440/b2b587d91d3c5d2922953ac62fbb2cb8:dfd0d5c2d07f981fb8cda29623b5e54e/paris.jpg",
      },
      title: "My trip to Paris!",
      subtitle: "8 chapters",
      id: "1",
    },
    {
      img: {
        uri: "https://cdn.getyourguide.com/img/country/57a9dde55289b.jpeg/88.jpg",
      },
      title: "My trip to SwitzerLand!",
      subtitle: "8 chapters",
      id: "2",
    },
    {
      img: {
        uri: "https://static.dw.com/image/55000481_303.jpg",
      },
      title: "My trip to India!",
      subtitle: "8 chapters",
      id: "3",
    },
    {
      img: {
        uri: "https://cdn.britannica.com/02/210202-050-D644C84B/Horyu-ji-Temple-Ikaruga-Nara-Japan-Buddhism.jpg",
      },
      title: "My trip to Japan!",
      subtitle: "8 chapters",
      id: "4",
    },
  ];
  const Stories = [
    {
      img: {
        uri: "https://images.unsplash.com/photo-1524293191286-59ec719556d4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGluayUyMHBpbmVhcHBsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      },
      title: "what did i do with my first paycheck",
      subtitle: "",
      date: "",
      down: 2942,
      msg: 23,
      bookmark: false,
      id: "1",
    },
    {
      img: {
        uri: "https://img.staticmb.com/mbcontent//images/uploads/2021/3/outdoor-stairs-design.jpg",
      },
      title: "My trip to China",
      subtitle: "8 chapters",
      date: "Nov 8",
      down: 2942,
      msg: 23,
      bookmark: true,
      id: "2",
    },
    {
      img: {
        uri: "https://static.dw.com/image/55000481_303.jpg",
      },
      title: "My trip to India!",
      subtitle: "8 chapters",
      date: "Nov 8",
      down: 2942,
      msg: 23,
      bookmark: false,
      id: "3",
    },
    {
      img: {
        uri: "https://cdn.britannica.com/02/210202-050-D644C84B/Horyu-ji-Temple-Ikaruga-Nara-Japan-Buddhism.jpg",
      },
      title: "My trip to Japan!",
      subtitle: "8 chapters",
      date: "",
      down: 2942,
      msg: 23,
      bookmark: false,
      id: "4",
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={({ item }) => {
          return (
            <View style={{ width: "100%" }}>
              <FlatList
                keyExtractor={(item) => item.id}
                data={story}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => {
                  return (
                    <TouchableOpacity onPress={() => {}} activeOpacity={0.8}>
                      <ImageBackground
                        style={styles.Surface}
                        source={item.img}
                        imageStyle={{ borderRadius: 10 }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "100%",
                          }}
                        >
                          <View>
                            <Text
                              style={{
                                fontSize: 15,
                                fontWeight: "700",
                                color: "white",
                              }}
                            >
                              {item.title}
                            </Text>
                            <Text
                              style={{
                                fontSize: 13,
                                fontWeight: "600",
                                color: "white",
                              }}
                            >
                              {item.subtitle}
                            </Text>
                          </View>
                          <TouchableOpacity>
                            <Entypo
                              name="controller-play"
                              size={34}
                              color="white"
                            />
                          </TouchableOpacity>
                        </View>
                      </ImageBackground>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
        data={Stories}
        numColumns={2}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.postSection}>
              <ImageBackground
                style={{ height: 270, width: "100%" }}
                source={item.img}
                imageStyle={{ borderRadius: 10 }}
              >
                {/* --------------------- headphone view-----------------------*/}
                <View
                  style={{
                    width: "100%",
                    height: "20%",
                    alignItems: "center",

                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  {item.bookmark ? (
                    <View
                      style={{
                        backgroundColor: "white",
                        height: 40,
                        width: 45,
                        borderBottomRightRadius: 30,
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        bottom: 7,
                        borderTopLeftRadius: 10,
                      }}
                    >
                      <SimpleLineIcons
                        name="notebook"
                        size={20}
                        color="black"
                        style={{ marginRight: 10 }}
                      />
                    </View>
                  ) : (
                    <View></View>
                  )}
                  <View
                    style={{
                      flexDirection: "row",
                      backgroundColor: "white",
                      width: 70,
                      paddingHorizontal: 10,
                      alignItems: "center",
                      paddingVertical: 3,
                      borderTopLeftRadius: 20,
                      borderBottomLeftRadius: 20,
                    }}
                  >
                    <FontAwesome5 name="headphones" size={17} color="#434b56" />
                    <Text
                      style={{ fontSize: 15, color: "#434b56", marginLeft: 5 }}
                    >
                      {item.down}
                    </Text>
                  </View>
                </View>
                {/* --------------------- play view-----------------------*/}
                <View
                  style={{
                    width: "100%",
                    height: "40%",

                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <AntDesign name="playcircleo" size={40} color="white" />
                </View>
                {/* --------------------- description view-----------------------*/}
                <View
                  style={{
                    width: "100%",
                    height: "40%",
                    padding: 10,
                  }}
                >
                  <View
                    style={{
                      height: "60%",
                      width: "100%",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: "bold",
                        color: "white",
                        maxWidth: "100%",
                      }}
                    >
                      {item.title}
                    </Text>
                    {item.subtitle ? (
                      <Text style={{ fontSize: 15, color: "white" }}>
                        {item.subtitle}
                      </Text>
                    ) : (
                      <Text style={{ fontSize: 15, color: "white" }}></Text>
                    )}
                  </View>
                  {/* --------------------- date view-----------------------*/}
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "100%",

                      height: "34%",
                    }}
                  >
                    {item.date ? (
                      <Text style={{ fontSize: 15, color: "white" }}>
                        {item.date}
                      </Text>
                    ) : (
                      <Text style={{ fontSize: 15, color: "white" }}></Text>
                    )}
                    <View
                      style={{
                        flexDirection: "row",
                      }}
                    >
                      <Feather name="message-square" size={18} color="white" />
                      <Text style={{ color: "white", marginLeft: 5 }}>
                        {item.msg}
                      </Text>
                    </View>
                  </View>
                </View>
              </ImageBackground>
            </View>
          );
        }}
        ListFooterComponent={(item) => {
          return <View style={{ height: 50 }}></View>;
        }}
      />
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#393D4A",
  },
  postSection: {
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "transparent",
    borderRadius: 15,
    width: "50%",
    height: 280,
    padding: 10,
    borderRadius: 10,
  },
  Surface: {
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "pink",
    height: 160,
    width: 300,
    borderRadius: 10,
    marginVertical: 10,
    padding: 15,
    margin: 5,
  },
});
