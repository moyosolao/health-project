import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const Goals = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.goals, styles.iconLayout]}>
      <Text style={styles.goals1}>Goals</Text>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <Text style={[styles.search, styles.textTypo]}>Search</Text>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <View style={[styles.groupInner, styles.groupLayout]} />
        <View style={[styles.rectangleView, styles.groupChildLayout]} />
        <View style={[styles.groupChild1, styles.groupChildLayout]} />
        <View style={[styles.groupChild2, styles.groupChildLayout]} />
        <Text style={[styles.eat1500Calories, styles.get8HoursTypo]}>
          eat 1500 calories
        </Text>
        <Text style={[styles.minuteWorkout, styles.get8HoursTypo]}>
          45 minute workout
        </Text>
      </View>
      <Pressable
        style={styles.goalsChild}
        onPress={() => navigation.navigate("AddGoal")}
      />
      <Text style={[styles.text, styles.textTypo]}>+</Text>
      <Text style={[styles.get8Hours, styles.get8HoursTypo]}>
        Get 8 hours of sleep
      </Text>
      <Pressable
        style={styles.iconArrowBackCircleSharp}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/-icon-arrow-back-circle-sharp.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  textTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  groupLayout: {
    height: 35,
    width: 127,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_mini,
    top: 89,
    position: "absolute",
  },
  groupChildLayout: {
    height: 74,
    width: 303,
    borderRadius: Border.br_xl,
    marginLeft: -152,
    borderWidth: 5,
    borderColor: Color.colorForestgreen,
    borderStyle: "solid",
    backgroundColor: Color.colorDarkslategray,
    left: "50%",
    position: "absolute",
  },
  get8HoursTypo: {
    height: 34,
    width: 247,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  goals1: {
    marginLeft: -43,
    top: 85,
    textAlign: "center",
    height: 20,
    width: 87,
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_5xl,
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorCrimson,
    height: 49,
    borderRadius: Border.br_6xl,
    width: 322,
    position: "absolute",
  },
  search: {
    top: 11,
    left: 28,
    fontSize: FontSize.size_xl,
    width: 66,
    height: 27,
  },
  groupItem: {
    left: 7,
  },
  groupInner: {
    left: 195,
  },
  rectangleView: {
    top: 192,
  },
  groupChild1: {
    top: 306,
  },
  groupChild2: {
    top: 420,
  },
  eat1500Calories: {
    top: 440,
    left: 51,
    width: 247,
  },
  minuteWorkout: {
    top: 326,
    left: 51,
    width: 247,
  },
  rectangleParent: {
    top: 196,
    left: 55,
    height: 494,
    width: 322,
    position: "absolute",
  },
  goalsChild: {
    marginLeft: -57,
    top: 736,
    width: 115,
    height: 96,
    borderWidth: 5,
    borderColor: Color.colorForestgreen,
    borderStyle: "solid",
    backgroundColor: Color.colorDarkslategray,
    borderRadius: Border.br_6xl,
    left: "50%",
    position: "absolute",
  },
  text: {
    top: 718,
    left: 186,
    fontSize: 96,
    height: 90,
    width: 87,
  },
  get8Hours: {
    top: 408,
    left: 106,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  iconArrowBackCircleSharp: {
    left: "8.84%",
    top: "3.65%",
    right: "85.35%",
    bottom: "93.67%",
    width: "5.81%",
    height: "2.68%",
    position: "absolute",
  },
  goals: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    height: 932,
  },
});

export default Goals;
