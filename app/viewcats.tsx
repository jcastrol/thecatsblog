import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";
import { useQuery } from "@tanstack/react-query";
import ViewModelCat from "@/Blocs/ViewModelCat";

const Page = () => {
  const catsViewModel = new ViewModelCat();
  const { data: cats } = useQuery({
    queryKey: ["cats"],
    queryFn: () => catsViewModel.getCats(),
  });
  console.log(cats?.map((cat) => cat.imageUrl));
  return (
    <View style={styles.container}>
      {cats && (
        <FlatList
          //style={}
          data={cats}
          renderItem={({ item }) => (
            <View
              style={styles.card}
            >
              <Text style={styles.text}>
                {item.breedName}
              </Text>
              {item.imageUrl !== "" ? (
                <Image
                  source={{
                    uri: item.imageUrl,
                  }}
                  style={
                    styles.image
                  }
                  resizeMode="cover"
                />
              ) : (
                <View
                  style={{
                    ...styles.image,
                    backgroundColor: "#ccc",
                  }}
                >
                  <Text>{item.breedName}</Text>
                </View>
              )}

              <View
                style={styles.infoSection}
              >
                <Text style={styles.text}>
                  {item.origin}
                </Text>
                <Text style={styles.text}>
                  {item.intelligence}
                </Text>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dbdbdb",
    alignItems: "center",
    width: "100%",
  },
  card:{
    justifyContent: "space-between",
    padding: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: "center",
    backgroundColor: "white",
    elevation: 5,
  },
  image:{
    width: 300,
    height: 300,
    marginVertical: 10,
    borderRadius: 10,
  },
    infoSection:{
        flex: 1,
        width: "100%",
        paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
      },
      text:{ fontSize: 16, fontWeight: "bold" }
});

export default Page;
