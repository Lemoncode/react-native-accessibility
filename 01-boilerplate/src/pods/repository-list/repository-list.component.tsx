import React from "react";
import { View, StyleSheet, FlatList, TextInput } from "react-native";
import { router } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { Item } from "./components";
import { OrganizationRepository } from "./repository-list.vm";

interface Props {
  list: OrganizationRepository[];
}

export const RepositoryList: React.FC<Props> = ({ list }) => {
  const [search, setSearch] = React.useState("");
  const [filteredRepos, setFilteredRepos] = React.useState<
    OrganizationRepository[]
  >([]);

  React.useEffect(() => {
    setFilteredRepos(
      list.filter((repo) =>
        repo.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, list]);

  const handleSelect = (repo: OrganizationRepository) => () => {
    router.push(`/repositories/${repo.name}`);
  };

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
        data={filteredRepos}
        renderItem={({ item }) => (
          <Item repo={item} onSelect={handleSelect(item)} />
        )}
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
});
