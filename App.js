import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Card from "./src/components/Card";

const data = [
  {
    id: "0",
    name: "Inglês",
    description: "Nesse curso você vai aprender o melhor Inglês",
    imageUrl: "https://th.bing.com/th/id/R.fdb5e4205cc924e04bf6283e64e462c8?rik=wOtXGiFW3AeebQ&riu=http%3a%2f%2fgeo5.net%2fimagens%2fBandeira-dos-Estados-Unidos-2000px.png&ehk=4zlmMUM64b6%2bEOmpUsxUB7wIT8W4Cd%2fBHJeds5t2Gcg%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: "1",
    name: "Espanhol",
    description: "Nesse curso você vai aprender o melhor Espanhol",
    imageUrl: "https://th.bing.com/th/id/R.db7b968b4e1282d471857010dfe2e612?rik=qbXuVXu87iVfUA&pid=ImgRaw&r=0",
  },
  {
    id: "2",
    name: "Italiano",
    description: "Nesse curso você vai aprender o melhor Italiano",
    imageUrl: "https://th.bing.com/th/id/R.5aeec5b7bf77a781c65ffb9dd6972674?rik=CINVjfjqz7c1qg&riu=http%3a%2f%2fwww.geo5.net%2fwp-content%2fuploads%2f2011%2f05%2fbandeira-italia-2000px.png&ehk=HWUvBew5zIXZjlXX0djsmUehiO1ED16f2vlaStd6yFM%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: "3",
    name: "Frances",
    description: "Nesse curso você vai aprender o melhor Frances",
    imageUrl: "https://th.bing.com/th/id/R.3f6f719c370e4203c419c4b448b30abc?rik=J0j5qBSK01UGRg&riu=http%3a%2f%2fgeo5.net%2fimagens%2fbandeira-da-fran%c3%a7a-grande.png&ehk=MiKq3YrafZqq7VRG20HSJ7h%2btANKJG3JxfUhg63SGM8%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: "4",
    name: "Português Brasileiro",
    description: "Nesse curso você vai aprender o melhor Português",
    imageUrl: "https://imagepng.org/wp-content/uploads/2017/04/bandeira-do-brasil.png",
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Lista de Cursos de\nIdioma`}</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Card courseInfo={item} />}
        style={styles.courseList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#27252f",
    paddingHorizontal: 18,
    paddingTop: 18,
  },

  title: {
    marginVertical: 24,
    alignSelf: "center",

    fontSize: 32,
    fontWeight: "bold",
    color: "#D1D1D3",
    textAlign: 'center'
  },

  courseList: {
    paddingBottom: 16,
  },
});
