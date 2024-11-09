import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  TextInput,
} from "react-native";
import * as Linking from "expo-linking";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { Repo } from "./repos.vm";
import { Item } from "./components/item.component";

interface Props {
  list: Repo[];
}

export const Repos: React.FC<Props> = ({ list }) => {
  const [search, setSearch] = React.useState("");
  const [filteredRepos, setFilteredRepos] = React.useState<Repo[]>([]);

  React.useEffect(() => {
    setFilteredRepos(
      list.filter((repo) =>
        repo.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, list]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchBar}>
          <FontAwesome
            style={styles.icon}
            name="search"
            size={20}
            color="#fff"
          />
          <TextInput
            style={styles.input}
            value={search}
            onChangeText={setSearch}
          />
        </View>
      </View>
      <FlatList
        style={styles.list}
        data={filteredRepos}
        renderItem={({ item }) => <Item repo={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#393939",
  },
  searchBar: {
    flexDirection: "row",
    margin: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    alignItems: "center",
  },
  icon: {
    marginLeft: 10,
  },
  input: {
    flex: 1,
    color: "#fff",
    fontSize: 18,
    padding: 10,
  },
  list: {},
});
