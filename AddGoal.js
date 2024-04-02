import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const AddGoal = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.addgoal, styles.iconLayout]}>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <Text style={[styles.search, styles.searchTypo]}>Search</Text>
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
      <View style={styles.addgoalChild} />
      <Text style={[styles.enterGoal, styles.searchTypo]}>Enter Goal</Text>
      <Text style={[styles.get8Hours, styles.get8HoursTypo]}>
        Get 8 hours of sleep
      </Text>
      <Text style={styles.goals}>Goals</Text>
      <Pressable
        style={[styles.iconArrowBackCircleSharp, styles.circleLayout]}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/-icon-arrow-back-circle-sharp.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.vuesaxboldprofileCircle, styles.circleLayout]}
        onPress={() => navigation.navigate("Account")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vuesaxboldprofilecircle.png")}
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
  searchTypo: {
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
    borderRadius: Border.br_xl,
    marginLeft: -152,
    width: 303,
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
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  circleLayout: {
    width: "5.81%",
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorBrown,
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
  addgoalChild: {
    marginLeft: -151,
    top: 736,
    height: 72,
    width: 303,
    borderWidth: 5,
    borderColor: Color.colorForestgreen,
    borderStyle: "solid",
    backgroundColor: Color.colorDarkslategray,
    left: "50%",
    borderRadius: Border.br_6xl,
    position: "absolute",
  },
  enterGoal: {
    top: 749,
    left: 83,
    fontSize: 36,
    width: 335,
    height: 32,
  },
  get8Hours: {
    top: 408,
    left: 106,
  },
  goals: {
    marginLeft: -51,
    top: 85,
    textAlign: "center",
    width: 87,
    height: 20,
    fontSize: FontSize.size_5xl,
    left: "50%",
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  iconArrowBackCircleSharp: {
    left: "6.98%",
    top: "2.47%",
    right: "87.21%",
    bottom: "94.85%",
    height: "2.68%",
  },
  vuesaxboldprofileCircle: {
    left: "85.35%",
    top: "2.36%",
    right: "8.84%",
    bottom: "95.06%",
    height: "2.58%",
  },
  addgoal: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    height: 932,
  },
});

export default AddGoal;
