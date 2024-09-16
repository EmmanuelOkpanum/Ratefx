import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    //   paddingTop: Platform.OS === "android" ? 35 : 10,
  },

  ImageBackground: {
    width: "100%",
    height: "100%",
    flex: 1,
  },

  contents: {
    position: "absolute",
    bottom: 250,
    padding: 20,
  },

  headerTxt: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "900",
    marginBottom: 20,
    width: "90%",
  },

  subHeader: {
    fontSize: 24,
    color: "#fff",
  },

  nxtBtn: {
    position: "absolute",
    bottom: 50,
    padding: 20,
    alignSelf: "center",
  },

  beginBtn: {
    backgroundColor: "#4357AD",
    width: 309,
    height: 90,
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  txtBtn: {
    marginHorizontal: 70,
    color: "#fff",
    fontSize: 36,
    fontWeight: "400",
  },

  circleArrow: {
    backgroundColor: "#000",
    borderRadius: 100,
    padding: 15,
  },

  arrow: {
    width: 20,
    height: 20,
  },

  mainHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  headerLogo:{
    backgroundColor: "#000",
    borderRadius: 100,
    padding: 15,
  },

  logo: {
    width: 20,
    height: 20,
  },

  rateContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,

  },

  item: {
    marginBottom: 20,

  },

  text: {
    color: "#000",
    fontSize: 23,
  },
  indicator: {
    height: 2,
    backgroundColor: 'blue', // Or any color you prefer
    marginTop: 4, // Adjust as needed
  },

  currencies: {
    width: 352, 
    height: 161, 
    backgroundColor: "#6E7DFF",
    // 'linear-gradient(270deg, #6E7DFF 0%, rgba(241, 143, 1, 0.50) 100%)', 
    // boxShadow: '10px 11px 4px rgba(0, 0, 0, 0.36)', 
    elevation: 8,
    borderRadius: 20,
  },

  selectedCurrencyBox: {
    padding: 20,
  },
  ToRate: {
    color: "#fff",
    fontSize: 15,
  },
  selectedCurrencyText: {
    color: "#fff",
    fontSize: 35,
    marginVertical: 5,
    
  },






























});

export default styles;
