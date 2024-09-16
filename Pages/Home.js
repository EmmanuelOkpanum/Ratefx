import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  Image,
} from "react-native";
import styles from "../styling/styles";

const image = require("../assets/fxbk.png");
const arrow = require("../assets/arrow.png");

const Home = ({ navigation }) => {


  return (
    <View style={styles.container}>


      <ImageBackground
        style={styles.ImageBackground}
        source={image}
        resizeMode="cover"
      >
        <View style={styles.contents}>
          <Text style={styles.headerTxt}>Get to see all your Rates</Text>

          <Text style={styles.subHeader}>
            Daily Rates updates on all types of currencies
          </Text>
        </View>

        <View style={styles.nxtBtn}>
          <TouchableOpacity
            style={styles.beginBtn}
            onPress={() => navigation.navigate("MainStack")}
            activeOpacity={0.7}
          >
            <Text style={styles.txtBtn}>Begin</Text>

            <View style={styles.circleArrow}>
              <Image
                source={arrow}
                style={styles.arrow}
                // This is for the arrow and the view is for the background border radius
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;
