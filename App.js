import "expo-dev-client";
import { StyleSheet, View } from "react-native";

import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";

const adUnitId = __DEV__
  ? TestIds.BANNER
  : "ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy"; // Banner id

export default function App() {
  return (
    <View style={styles.container}>
      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.FULL_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 100,
    alignSelf: "center",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
