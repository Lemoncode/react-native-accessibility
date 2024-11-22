import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs } from "expo-router";
import { PlatformPressable } from "@react-navigation/elements";

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
          tabBarAccessibilityLabel: "Home, Tab, 1 of 2",
          tabBarButton: (props) => (
            <PlatformPressable {...props} accessibilityRole="tab" role="tab" />
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
          tabBarAccessibilityLabel: "Repositories, Tab, 2 of 2",
          tabBarButton: (props) => (
            <PlatformPressable {...props} accessibilityRole="tab" role="tab" />
          ),
        }}
      />
    </Tabs>
  );
};
