import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconF from 'react-native-vector-icons/Feather';
import IconI from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IconA from 'react-native-vector-icons/AntDesign';
import IconO from 'react-native-vector-icons/Octicons';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.mainContain}>
        <LinearGradient
          colors={["#8185ff", "#899fff"]} // Replace these colors with your desired gradient colors
          start={{ x: 0, y: 0 }} // Start position of the gradient (top-left corner)
          end={{ x: 1, y: 0 }} // End position of the gradient (top-right corner)
          style={styles.linearGradient}
        >
          <View style={{ flex: 0.3 }}>
            <View
              style={{
                height: 50,
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 25,
              }}
            >
              <View
                style={{
                  backgroundColor: "#97aaff",
                  width: 180,
                  height: 35,
                  borderRadius: 7,
                  flexDirection: "row",
                  paddingHorizontal: 5,
                }}
              >
                <IconF
                  name="key"
                  size={13}
                  color="#e8e9ff"
                  style={{ marginTop: 9 }}
                />
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "600",
                    marginTop: 7,
                    marginLeft: 5,
                  }}
                >
                  Rabby
                </Text>
                <Text
                  style={{
                    color: "#e8e9ff",
                    fontWeight: "600",
                    marginTop: 7,
                    marginLeft: 5,
                  }}
                >
                  0x5853...eb85
                </Text>
                <IconF
                  name="chevron-right"
                  size={13}
                  color="#fff"
                  style={{ marginTop: 10, marginLeft: 5 }}
                />
                <TouchableOpacity>
                  <IconI
                    name="copy-outline"
                    size={13}
                    color="#fff"
                    style={{ marginTop: 10, marginLeft: 10 }}
                  />
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={{
                  backgroundColor: "#97aaff",
                  width: 35,
                  height: 35,
                  borderRadius: 7,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IconI name="wallet-outline" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 30, marginLeft: 25 }}>
              <Text style={{ color: "#fff", fontSize: 30, fontWeight: "600" }}>
                $174,669,119
              </Text>
            </View>
            <View
              style={{
                marginTop: 13,
                marginLeft: 25,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: 180,
                }}
              >
                <TouchableOpacity style={styles.conatainerOneButtonView}>
                  <Text style={styles.conatainerOneButtonText}>Token</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.conatainerOneButtonView}>
                  <Text style={styles.conatainerOneButtonText}>DeFi</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.conatainerOneButtonView}>
                  <Text style={styles.conatainerOneButtonText}>NFT</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.ContainerOneRightMenu}>
                <IconM name="beta" size={18} color="#fff" />
                <View style={styles.containerOneHrStyle}></View>
                <IconM name="alpha-w-circle-outline" size={18} color="#fff" />
              </View>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              backgroundColor: "#fff",
              width: "100%",
              borderBottomRightRadius: 30,
              borderBottomLeftRadius: 30,
            }}
          >
            <View style={styles.containerTwoBox}>
              <TouchableOpacity style={styles.containerTwoIconsBox}>
                <IconA name="swap" size={25} color="#000" />
                <Text style={{ color: "#000" }}>Swap</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.containerTwoIconsBox}>
                <IconF name="send" size={25} color="#8899ff" />
                <Text style={{ color: "#000" }}>Send</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.containerTwoIconsBox}>
                <IconM name="call-received" size={25} color="#000" />
                <Text style={{ color: "#000" }}>Receive</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.containerTwoIconsBox}>
                <IconM name="gas-station-outline" size={25} color="#8899ff" />
                <Text style={{ color: "#000" }}>Gas Top Up</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.containerTwoIconsBox}>
                <IconO name="clock" size={25} color="#000" />
                <Text style={{ color: "#000" }}>Transactions</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.containerTwoIconsBox}>
                <Icon name="cubes" size={25} color="#8899ff" />
                <Text style={{ color: "#000" }}>Connected</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.containerTwoIconsBox}>
                <IconI name="shield-checkmark-outline" size={25} color="#000" />
                <Text style={{ color: "#000" }}>Approvals</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.containerTwoIconsBox}>
                <IconA name="contacts" size={25} color="#8899ff" />
                <Text style={{ color: "#000" }}>Addresses</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.containerTwoIconsBox}>
                <IconF name="settings" size={25} color="#000" />
                <Text style={{ color: "#000" }}>Settings</Text>
              </TouchableOpacity>
              <View style={styles.containerTwoHr}></View>
              <View style={styles.containerTwoThridItem}>
                <View style={{ flexDirection: "row" }}>
                  <View
                    style={{
                      borderRadius: 9,
                      marginRight: 4,
                      backgroundColor: "#e7eaed",
                      width: 20,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <IconM name="cards-diamond" size={15} color="#000" />
                  </View>

                  <Text style={{ color: "#000" }}>$1,287.28</Text>
                  <Text
                    style={{
                      color: "red",
                      marginLeft: 8,
                      fontSize: 11,
                      marginTop: 3,
                    }}
                  >
                    -2.75%
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    borderLeftWidth: 0.5,
                    paddingLeft: 10,
                  }}
                >
                  <IconM
                    name="gas-station"
                    size={19}
                    color="#707280"
                    style={{ marginRight: 7 }}
                  />
                  <Text style={{ color: "#000", fontSize: 15 }}>14</Text>
                  <Text
                    style={{
                      color: "grey",
                      marginLeft: 8,
                      fontSize: 10,
                      marginTop: 6,
                    }}
                  >
                    Gwei
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.containerThreeBox}>
              <View style={{ flexDirection: "row", marginRight: 15 }}>
                <View
                  style={{
                    height: 30,
                    width: 30,
                    borderRadius: 6,
                    backgroundColor: "#f68160",
                    marginTop: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: 7,
                  }}
                >
                  <IconM name="beta" size={18} color="#fff" />
                </View>
                <View style={{ marginTop: 9, marginLeft: 5 }}>
                  <Text style={{ fontSize: 11, color: "#000" }}>
                    https://debank.com
                  </Text>
                  <Text style={{ color: "green", fontSize: 11 }}>
                    Connected
                  </Text>
                </View>
              </View>
              <View
                style={{
                  borderWidth: 0.3,
                  height: 30,
                  width: 120,
                  borderRadius: 4,
                  borderColor: "#9facfe",
                  marginTop: 10,
                  marginLeft: 8,
                }}
              >
                <View style={{ flexDirection: "row", marginTop: 5 }}>
                  <View
                    style={{
                      borderRadius: 9,
                      marginRight: 4,
                      backgroundColor: "#627eea",
                      width: 20,
                      alignItems: "center",
                      justifyContent: "center",
                      marginLeft: 5,
                    }}
                  >
                    <IconM name="cards-diamond" size={13} color="#fff" />
                  </View>

                  <Text style={{ color: "#000" }}>Ethereum</Text>
                  <IconF
                    name="chevron-down"
                    size={13}
                    color="#000"
                    style={{ marginTop: 5, marginLeft: 10 }}
                  />
                </View>
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContain: {
    backgroundColor: '#6d81da',
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    borderRadius: 30,
  },
  conatainerOneButtonText: {
    color: '#e8e9ff',
    fontSize: 12,
  },
  conatainerOneButtonView: {
    backgroundColor: '#97aaff',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 5,
  },
  ContainerOneRightMenu: {
    borderWidth: 1,
    borderColor: '#fff',
    width: 60,
    borderRadius: 20,
    marginRight: 25,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  containerOneHrStyle: {
    height: 10,
    width: 0.8,
    backgroundColor: '#fff',
  },
  containerTwoBox: {
    backgroundColor: '#f5f6fa',
    width: '90%',
    maxHeight: 500,
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 5,
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  containerThreeBox: {
    backgroundColor: '#f5f6fa',
    width: '90%',
    minHeight: 50,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 5,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  containerTwoIconsBox: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerTwoHr: {
    width: '98%',
    height: 1,
    borderWidth: 0.3,
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: '#e7ebf0',
    borderColor: '#e7ebf0',
  },
  containerTwoThridItem: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '98%',
    padding: 12,
  },
});
