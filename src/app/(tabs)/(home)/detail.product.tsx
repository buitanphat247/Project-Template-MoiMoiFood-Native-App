import DetailAddons, { Addon } from "@/components/products/detail/DetailAddons";
import DetailCTA from "@/components/products/detail/DetailCTA";
import DetailImageHeader from "@/components/products/detail/DetailImageHeader";
import DetailInfo from "@/components/products/detail/DetailInfo";
import styles from "@/styles/screens_home/detail.product.styles";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ADDONS: Addon[] = [
  { id: "pepper", name: "Pepper  Julienned", price: 2.3 },
  { id: "spinach", name: "Baby Spinach", price: 4.7 },
  { id: "mushroom", name: "Masroom", price: 2.5 },
];

export default function DetailProduct() {
  const router = useRouter();
  const [qty, setQty] = useState(2);
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <SafeAreaView edges={["top", "left", "right"]} style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
        <DetailImageHeader onBack={() => router.back()} />

        <DetailInfo
          title="Ground Beef Tacos"
          rating={4.5}
          price="$9.50"
          qty={qty}
          onDec={() => setQty((q) => Math.max(1, q - 1))}
          onInc={() => setQty((q) => q + 1)}
        />

        <DetailAddons addons={ADDONS} selectedId={selected} onToggle={setSelected} />

        <DetailCTA onAddToCart={() => {}} />
      </ScrollView>
    </SafeAreaView>
  );
}
