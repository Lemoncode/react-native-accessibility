import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs } from "expo-router";

export default () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#2196F3" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="repositories"
        options={{
          title: "Repositories",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons size={28} name="code-tags" color={color} />
          ),
        }}
      />
    </Tabs>
  );
};
