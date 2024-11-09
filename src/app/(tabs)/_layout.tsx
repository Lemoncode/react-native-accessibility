import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="repositories"
        options={{
          title: "Repositories",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="code" color={color} />
          ),
        }}
      />
    </Tabs>
  );
};
