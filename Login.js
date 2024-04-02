import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.email, styles.emailTypo]}>Email</Text>
        <Pressable
          style={[styles.groupItem, styles.groupLayout]}
          onPress={() => navigation.navigate("Home")}
        />
        <Text style={[styles.password, styles.emailTypo]}>Password</Text>
        <View style={[styles.groupInner, styles.groupLayout]} />
        <Text style={[styles.logIn, styles.emailTypo]}>Log In</Text>
        <Text style={[styles.newUserSign, styles.emailTypo]}>
          New User? Sign Up Now!
        </Text>
        <View style={[styles.rectangleView, styles.groupChildLayout]} />
        <Text style={[styles.password, styles.emailTypo]}>Password</Text>
      </View>
      <Image
        style={styles.heart1Icon}
        contentFit="cover"
        source={require("../assets/heart-1.png")}
      />
      <Text style={styles.theOnlyHealthContainer}>
        The only health app you need!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout: {
    height: 43,
    backgroundColor: Color.colorBrown,
    borderRadius: Border.br_6xl,
    left: 0,
    width: 322,
    position: "absolute",
  },
  emailTypo: {
    height: 20,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  groupLayout: {
    backgroundColor: Color.colorCrimson,
    height: 43,
    borderRadius: Border.br_6xl,
    left: 0,
    width: 322,
    position: "absolute",
  },
  groupChild: {
    top: 0,
  },
  email: {
    top: 11,
    width: 51,
    left: 28,
    textAlign: "left",
    fontSize: FontSize.size_xl,
  },
  groupItem: {
    top: 179,
  },
  password: {
    top: 101,
    width: 93,
    left: 28,
    textAlign: "left",
    fontSize: FontSize.size_xl,
  },
  groupInner: {
    top: 269,
  },
  logIn: {
    top: 191,
    left: 132,
    width: 58,
  },
  newUserSign: {
    top: 281,
    left: 43,
    width: 237,
  },
  rectangleView: {
    top: 90,
  },
  rectangleParent: {
    top: 457,
    left: 54,
    height: 312,
    width: 322,
    position: "absolute",
  },
  heart1Icon: {
    top: 85,
    left: 67,
    width: 297,
    height: 244,
    position: "absolute",
  },
  theOnlyHealthContainer: {
    top: 364,
    left: 25,
    fontSize: 25,
    textAlign: "center",
    width: 381,
    height: 58,
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  login: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default Login;
