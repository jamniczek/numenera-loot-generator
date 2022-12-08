import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  viewer: { width: "99%", height: "80vh" },
  page: {
    flexDirection: "row",
    fontSize: 10,
    padding: 10,
    fontFamily: "Helvetica",
  },
  cypherContainer: {
    display: "flex",
    flexDirection: "column",
    margin: 2,
    padding: 5,
    border: "2px solid black",
  },
  cypherContentColumn: {
    marginRight: 10,
  },
  cypherLabelColumn: {
    marginRight: 15,
    width: "100px",
    fontFamily: "Helvetica-Bold",
  },
  cypherSection: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    marginBottom: 8,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
});
