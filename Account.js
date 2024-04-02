import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const Account = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.account, styles.iconLayout]}>
      <Text style={[styles.user, styles.userTypo]}>User</Text>
      <Text style={[styles.userusercom, styles.userTypo]}>user@user.com</Text>
      <View style={[styles.accountChild, styles.accountChildBg]} />
      <Text style={[styles.editProfile, styles.editProfileTypo]}>
        Edit Profile
      </Text>
      <View style={[styles.accountItem, styles.accountItemLayout]} />
      <Text style={[styles.turnOnNotifications, styles.invitePeoplePosition]}>
        Turn on Notifications
      </Text>
      <View style={[styles.accountItem, styles.accountItemLayout]} />
      <Text style={[styles.turnOnNotifications, styles.invitePeoplePosition]}>
        Turn on Notifications
      </Text>
      <View style={[styles.rectangleView, styles.accountItemLayout]} />
      <Text style={[styles.invitePeople, styles.inviteTypo]}>
        Invite people
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
      <View style={[styles.accountChild1, styles.accountChildBg]} />
      <Text style={[styles.invite, styles.inviteTypo]}>Invite</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  userTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  accountChildBg: {
    backgroundColor: Color.colorCrimson,
    borderRadius: Border.br_6xl,
    position: "absolute",
  },
  editProfileTypo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  accountItemLayout: {
    height: 49,
    width: 341,
    backgroundColor: Color.colorDarkslategray,
    borderRadius: Border.br_xl,
    left: "50%",
    marginLeft: -160,
    position: "absolute",
  },
  invitePeoplePosition: {
    left: 72,
    color: Color.colorWhite,
  },
  inviteTypo: {
    top: 558,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  user: {
    top: 223,
    fontSize: 40,
    width: 110,
    height: 52,
    left: 160,
  },
  userusercom: {
    top: 275,
    left: 152,
    fontSize: 16,
  },
  accountChild: {
    top: 309,
    left: 133,
    width: 164,
    height: 46,
  },
  editProfile: {
    top: 320,
    color: Color.colorBlack,
    left: 160,
  },
  accountItem: {
    top: 413,
  },
  turnOnNotifications: {
    top: 425,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  rectangleView: {
    top: 546,
  },
  invitePeople: {
    left: 72,
    color: Color.colorWhite,
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  iconArrowBackCircleSharp: {
    left: "6.98%",
    top: "3.22%",
    right: "87.21%",
    bottom: "94.1%",
    width: "5.81%",
    height: "2.68%",
    position: "absolute",
  },
  accountChild1: {
    top: 554,
    left: 241,
    width: 135,
    height: 33,
  },
  invite: {
    left: 281,
    color: Color.colorBlack,
  },
  account: {
    backgroundColor: Color.colorBlack,
    flex: 1,
    height: 932,
  },
});

export default Account;
