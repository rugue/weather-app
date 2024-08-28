import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Weather App" }} />
      <Stack.Screen name="details" options={{ title: "Weather Details" }} />
    </Stack>
  );
}
