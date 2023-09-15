import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
  mainText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "coral",
  },
  mainText2: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#279EFF",
  },
  mainView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  btnAllHouses: {
    padding: 10,
    width: 250,
  },
  typeOfBill: {
    padding: 10,
    width: 250,
  },

  renderedHouses: {
    flex: 1,
    padding: 10,
  },
  houseIcon: {
    flex: 1,
    // flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: "gray",
    margin: 5,
    backgroundColor: "coral",
  },
  billTitle: {
    textDecorationLine: "underline",
    fontSize: 28,
    color: '#279EFF',
    fontWeight: "bold"
  },
  billText: {
    fontSize: 24,
    padding: 10,
  },
  spanText: {
    color: 'coral',
  },
  dateOfPayment: {
    color: '#279EFF'
  },
  input: {
    // flex: 1,
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    // backgroundColor: 'orange',
  }
});
