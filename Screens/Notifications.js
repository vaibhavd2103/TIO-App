import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import {
  Entypo,
  Ionicons,
  SimpleLineIcons,
  FontAwesome5,
} from "react-native-vector-icons";
import Slider from "@react-native-community/slider";

const Notifications = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <View
          style={{
            width: "15%",
            paddingLeft: 20,
          }}
        >
          <Image
            style={{ height: 40, width: 40, borderRadius: 40 }}
            source={{
              uri: "https://i1.wp.com/freehindiwishes.com/wp-content/uploads/2020/10/Best-DP-For-Instagram-For-Girl-16.jpg?resize=400%2C400",
            }}
          />
        </View>
        <View style={{ width: "50%", paddingLeft: 10 }}>
          <Text style={{ color: "white", fontSize: 14 }}>
            John Doe requested
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: "white", fontSize: 14 }}>to follow you</Text>
            <Text
              style={{
                color: "grey",
                fontSize: 10,
                paddingLeft: 5,
                top: 2,
              }}
            >
              .3:48 pm
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "40%",
            flexDirection: "row",
            justifyContent: "flex-end",
            paddingRight: 5,
          }}
        >
          <View
            style={{
              height: 30,
              width: 80,
              backgroundColor: "#393D4A",
              borderRadius: 30,
              justifyContent: "center",
              elevation: 7,
            }}
          >
            <TouchableOpacity>
              <Text style={{ color: "white", paddingLeft: 20, fontSize: 12 }}>
                Accept
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 30,
              width: 80,
              backgroundColor: "#262931",
              borderRadius: 30,
              justifyContent: "center",
              marginLeft: 6,
              elevation: 7,
              marginRight: 10,
            }}
          >
            <TouchableOpacity>
              <Text style={{ color: "white", paddingLeft: 20, fontSize: 12 }}>
                Ignore
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.list}>
        <View
          style={{
            width: "15%",
            paddingLeft: 20,
          }}
        >
          <Image
            style={{ height: 40, width: 40, borderRadius: 40 }}
            source={{
              uri: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            }}
          />
        </View>
        <View style={{ width: "50%", paddingLeft: 10 }}>
          <Text style={{ color: "white", fontSize: 14 }}>
            John Doe started following
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: "white", fontSize: 14 }}>you</Text>
            <Text
              style={{
                color: "grey",
                fontSize: 10,
                paddingLeft: 5,
                top: 2,
              }}
            >
              .3:48 pm
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "40%",
            flexDirection: "row",
            justifyContent: "flex-end",
            paddingRight: 5,
          }}
        >
          <View
            style={{
              height: 32,
              width: 130,
              backgroundColor: "#393D4A",
              borderRadius: 30,
              justifyContent: "center",
              elevation: 7,
              alignItems: "center",
              justifyContent: "center",
              marginRight: 10,
            }}
          >
            <TouchableOpacity>
              <Text style={{ color: "white", fontSize: 12 }}>Follow Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.list}>
        <View
          style={{
            width: "15%",
            paddingLeft: 20,
          }}
        >
          <Image
            style={{ height: 40, width: 40, borderRadius: 40 }}
            source={{
              uri: "https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_90,w_1400/fl_lossy,pg_1/ok26lkxxcptihvwljzaw/girl-in-red",
            }}
          />
        </View>
        <View style={{ width: "50%", paddingLeft: 10 }}>
          <Text style={{ color: "white", fontSize: 14 }}>
            John Doe just uploaded their
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: "white", fontSize: 14 }}>first podcast</Text>
            <Text
              style={{
                color: "grey",
                fontSize: 10,
                paddingLeft: 5,
                top: 2,
              }}
            >
              .3:48 pm
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "40%",
            flexDirection: "row",
            justifyContent: "flex-end",
            paddingRight: 5,
          }}
        >
          <View
            style={{
              height: 32,
              width: 130,
              backgroundColor: "#393D4A",
              borderRadius: 30,
              justifyContent: "center",
              elevation: 7,
              alignItems: "center",
              justifyContent: "center",
              marginRight: 10,
            }}
          >
            <TouchableOpacity>
              <Text style={{ color: "white", fontSize: 12 }}>Listen Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.list}>
        <View
          style={{
            width: "15%",
            paddingLeft: 20,
          }}
        >
          <Image
            style={{ height: 40, width: 40, borderRadius: 40 }}
            source={{
              uri: "https://images.medicinenet.com/images/article/main_image/puberty-in-girls.jpg",
            }}
          />
        </View>
        <View style={{ width: "50%", paddingLeft: 10 }}>
          <Text style={{ color: "white", fontSize: 14 }}>
            John Doe requested
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: "white", fontSize: 14 }}>to follow you</Text>
            <Text
              style={{
                color: "grey",
                fontSize: 10,
                paddingLeft: 5,
                top: 2,
              }}
            >
              .3:48 pm
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "40%",
            flexDirection: "row",
            justifyContent: "flex-end",
            paddingRight: 5,
          }}
        >
          <View
            style={{
              height: 30,
              width: 80,
              backgroundColor: "#393D4A",
              borderRadius: 30,
              justifyContent: "center",
              elevation: 7,
            }}
          >
            <TouchableOpacity>
              <Text style={{ color: "white", paddingLeft: 20, fontSize: 12 }}>
                Accept
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 30,
              width: 80,
              backgroundColor: "#262931",
              borderRadius: 30,
              justifyContent: "center",
              marginLeft: 6,
              elevation: 7,
              marginRight: 10,
            }}
          >
            <TouchableOpacity>
              <Text style={{ color: "white", paddingLeft: 20, fontSize: 12 }}>
                Ignore
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.list}>
        <View
          style={{
            width: "15%",
            paddingLeft: 10,
          }}
        >
          <Image
            style={{ height: 40, width: 40, borderRadius: 40 }}
            source={{
              uri: "https://img.flaticon.com/icons/png/512/33/33906.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF",
            }}
          />
        </View>
        <View style={{ width: "85%" }}>
          <Text style={{ color: "white", fontSize: 14 }}>
            25 people heard your podacast 'My First Car'
          </Text>

          <Text
            style={{
              color: "grey",
              fontSize: 10,
              top: 2,
            }}
          >
            .3:48 pm
          </Text>
        </View>
      </View>
      <View style={styles.list}>
        <View
          style={{
            width: "15%",
            paddingLeft: 10,
          }}
        >
          <Image
            style={{ height: 40, width: 40, borderRadius: 40 }}
            source={{
              uri: "https://img.flaticon.com/icons/png/512/33/33906.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF",
            }}
          />
        </View>
        <View style={{ width: "85%" }}>
          <Text style={{ color: "white", fontSize: 14 }}>
            10 people heard your podacast 'My First Car'
          </Text>

          <Text
            style={{
              color: "grey",
              fontSize: 10,
              top: 2,
            }}
          >
            .3:48 pm
          </Text>
        </View>
      </View>
      <View style={styles.list}>
        <View
          style={{
            width: "15%",
            paddingLeft: 10,
          }}
        >
          <Image
            style={{ height: 40, width: 40, borderRadius: 40 }}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpIgzJ91lF8qoT0gWqwLo_3t2Llx2I_Fezt9x1cFNBJoGgcEcvct_l7S5OU_g1_Okuaf0&usqp=CAU",
            }}
          />
        </View>
        <View style={{ width: "85%" }}>
          <Text style={{ color: "white", fontSize: 14 }}>
            John Doe commented on your post
          </Text>

          <Text
            style={{
              color: "grey",
              fontSize: 10,
              top: 2,
            }}
          >
            .3:48 pm
          </Text>
        </View>
      </View>
      <View
        style={{
          alignItems: "center",
          backgroundColor: "#23272F",
          height: 190,
          borderBottomWidth: 0.3,
          borderBottomColor: "grey",
          width: "100%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            marginBottom: 13,
            paddingLeft: 15,
            alignItems: "center",
            paddingTop: 10,
          }}
        >
          <Image
            source={{
              uri: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/11/1489599819-caroline-forbes-the-vampire-diaries-season-8.jpg?crop=0.668xw:1.00xh;0.0170xw,0&resize=480:*",
            }}
            style={styles.image}
          />

          <Text style={{ color: "white", paddingLeft: 7, fontSize: 14 }}>
            Chapter 8 of ''My trip to paris' by Abbas Mirza is {"\n"} out,
            listen now!
            <Text style={{ color: "grey", fontSize: 10, paddingLeft: 5 }}>
              {" "}
              .3:48pm
            </Text>
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            width: "95%",
            backgroundColor: "#393D4A",
            height: 100,
            borderBottomWidth: 0.2,
            borderBottomColor: "#696969",
            alignItems: "center",
            borderRadius: 10,
          }}
        >
          <View style={{ justifyContent: "center", paddingLeft: 20 }}>
            <Image
              source={{
                uri: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/11/1489599819-caroline-forbes-the-vampire-diaries-season-8.jpg?crop=0.668xw:1.00xh;0.0170xw,0&resize=480:*",
              }}
              style={{ height: 60, width: 55, borderRadius: 10 }}
            />
          </View>

          <View style={{ width: "67%", paddingLeft: 15 }}>
            <View
              style={{
                paddingTop: 35,
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 10,
                width: "100%",
              }}
            >
              <View style={{ paddingRight: 33, paddingTop: 5 }}>
                <Text style={{ fontSize: 14, color: "white" }}>
                  My Trip to Paris
                </Text>

                <Text
                  style={{ fontSize: 12, color: "white" }}
                  numberOfLines={1}
                >
                  Chapter 8: Lorem Ipsum
                </Text>
              </View>

              <View
                style={{
                  backgroundColor: "#23272F",
                  height: 20,
                  width: 55,
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  borderRadius: 20,
                  marginLeft: 35,
                }}
              >
                <FontAwesome5 name="headphones" size={14} color="white" />
                <Text style={{ color: "white", fontSize: 12 }}>{"  "}2942</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: 5,
              }}
            >
              <Entypo name="controller-play" size={28} color="white" />

              <Slider
                style={{
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="white"
                thumbTintColor="white"
              />
            </View>

            <View style={{ alignItems: "flex-end" }}>
              <Text
                style={{
                  color: "grey",
                  paddingBottom: 20,
                  bottom: 10,
                  left: 10,
                  fontSize: 10,
                }}
              >
                15 min
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    backgroundColor: "#23272f",
    // paddingTop: 50,
    // marginTop: -50,
    zIndex: 20,
  },
  header: {
    width: "100%",
    height: 90,
    backgroundColor: "#23272f",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 40,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  list: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#23272e",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 0.2,
    borderBottomColor: "grey",
  },
});

export default Notifications;
