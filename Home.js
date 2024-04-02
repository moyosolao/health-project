import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.home}>
      <Text style={styles.helloUser}>Hello User!</Text>
      <Text style={styles.home1}>Home</Text>
      <Text style={[styles.otherCategories, styles.goalsTypo]}>
        Other Categories
      </Text>
      <View style={styles.homeChild} />
      <Text style={[styles.overview, styles.overviewTypo]}>Overview</Text>
      <View style={styles.homeItem} />
      <Pressable
        style={styles.homeInner}
        onPress={() => navigation.navigate("Goals")}
      />
      <View style={[styles.rectangleView, styles.homeChild3ShadowBox]} />
      <View style={[styles.homeChild1, styles.homeChildPosition]} />
      <View style={[styles.homeChild2, styles.homeChildShadowBox]} />
      <View style={[styles.homeChild3, styles.homeChildPosition]} />
      <Text style={[styles.charts, styles.stepsTypo]}>Charts</Text>
      <Text style={[styles.healthCoach, styles.goalsTypo]}>Health Coach</Text>
      <Text style={[styles.steps, styles.stepsTypo]}>Steps</Text>
      <Text style={[styles.productivity, styles.homeChildPosition]}>
        Productivity
      </Text>
      <Text style={[styles.goals, styles.goalsTypo]}>Goals</Text>
      <Text
        style={[styles.workoutMeal, styles.goalsTypo]}
      >{`Workout & Meal Logs`}</Text>
      <Image
        style={[styles.iconArrowBackCircleSharp, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/-icon-arrow-back-circle-sharp.png")}
      />
      <Pressable
        style={[styles.vuesaxboldprofileCircle, styles.circlePosition]}
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
  goalsTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  overviewTypo: {
    fontSize: FontSize.size_xl,
    top: 201,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorWhite,
  },
  homeChild3ShadowBox: {
    height: 169,
    width: 180,
    top: 545,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorDarkslategray,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_6xl,
  },
  homeChildPosition: {
    left: 235,
    position: "absolute",
  },
  homeChildShadowBox: {
    top: 731,
    height: 169,
    width: 180,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorDarkslategray,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_6xl,
  },
  stepsTypo: {
    top: 646,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  circlePosition: {
    top: "3.22%",
    width: "5.81%",
    position: "absolute",
  },
  helloUser: {
    top: 85,
    fontSize: 48,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    left: 31,
    position: "absolute",
  },
  home1: {
    top: 35,
    left: 210,
    width: 87,
    height: 20,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  otherCategories: {
    top: 474,
    left: 40,
    fontWeight: "700",
  },
  homeChild: {
    width: 164,
    height: 46,
    backgroundColor: Color.colorCrimson,
    borderRadius: Border.br_6xl,
    top: 187,
    left: 18,
    position: "absolute",
  },
  overview: {
    left: 55,
    position: "absolute",
    fontSize: FontSize.size_xl,
    top: 201,
  },
  homeItem: {
    left: 203,
    width: 197,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 46,
    backgroundColor: Color.colorCrimson,
    borderRadius: Border.br_6xl,
    top: 187,
    position: "absolute",
  },
  homeInner: {
    top: 260,
    width: 339,
    height: 172,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorDarkslategray,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_6xl,
    left: 40,
    position: "absolute",
  },
  rectangleView: {
    left: 18,
    position: "absolute",
  },
  homeChild1: {
    top: 731,
    height: 169,
    width: 180,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorDarkslategray,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_6xl,
  },
  homeChild2: {
    left: 18,
    position: "absolute",
  },
  homeChild3: {
    height: 169,
    width: 180,
    top: 545,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorDarkslategray,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_6xl,
  },
  charts: {
    left: 31,
  },
  healthCoach: {
    top: 838,
    left: 241,
  },
  steps: {
    left: 243,
  },
  productivity: {
    width: 134,
    height: 30,
    fontSize: FontSize.size_xl,
    top: 201,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorWhite,
  },
  goals: {
    top: 286,
    left: 75,
  },
  workoutMeal: {
    top: 815,
    width: 128,
    height: 59,
    left: 31,
  },
  iconArrowBackCircleSharp: {
    height: "2.68%",
    right: "84.88%",
    bottom: "94.1%",
    left: "9.3%",
    top: "3.22%",
    width: "5.81%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
  },
  vuesaxboldprofileCircle: {
    left: "90%",
    right: "4.19%",
    bottom: "94.21%",
    height: "2.58%",
  },
  home: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default Home;
