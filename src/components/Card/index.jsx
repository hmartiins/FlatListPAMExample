import React from "react";
import { Image, Text, TouchableOpacity, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
    container: {
      width: "100%",
      marginBottom: 16,
      paddingRight: 8,
      flexDirection: "row",
  
      backgroundColor: "#212029",
      borderWidth: 1,
      borderStyle: "solid",
      borderRadius: 8,
      borderColor: "#25242E",
    },
  
    image: {
      height: '100%',
      width: 120,
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,
    },
  
    infoContainer: {
      width: 200,
      paddingVertical: 4,
      paddingHorizontal: 8,
    },
  
    infoTitle: {
      fontSize: 17,
      fontWeight: 'bold',
      color: "#ffff",
    },
  
    info: {
      fontSize: 16,
      color: "#ededed",
    },
});

const Card = ({ courseInfo }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container}>
      <Image source={{ uri: courseInfo.imageUrl }} style={styles.image} />

      <View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Nome:</Text>
          <Text style={styles.info}>{courseInfo.name}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Detalhes:</Text>
          <Text style={styles.info}>{courseInfo.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};


export default Card;
