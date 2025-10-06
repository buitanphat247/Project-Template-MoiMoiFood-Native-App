import CardFavouriteProduct from "@/components/products/card.favourite.product";
import styles from "@/styles/screens_tabs/favorites.styles";
import React, { useMemo, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type FavouriteProduct = {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  rating: number;
  reviews: number;
  desc?: string;
  favorite?: boolean;
};

const MOCK_FAVORITES: FavouriteProduct[] = [
  {
    id: "1",
    name: "Tinh Hoa Ẩm Thực Việt",
    imageUrl: "https://www.pizzaexpress.vn/wp-content/uploads/2021/03/tinh-hoa-am-thuc-viet-nam-1_1.jpg",
    price: "$9.90",
    rating: 4.7,
    reviews: 41,
    desc: "Món ăn truyền thống Việt Nam với hương vị đậm đà, kết hợp hài hòa giữa thịt, rau và gia vị.",
    favorite: true,
  },
  {
    id: "2",
    name: "Hương Vị Trung Hoa",
    imageUrl:
      "https://media.istockphoto.com/id/545286388/vi/anh/n%E1%BB%81n-tr%E1%BB%91ng-th%E1%BB%B1c-ph%E1%BA%A9m-trung-qu%E1%BB%91c.jpg?s=612x612&w=0&k=20&c=KOJk_VDPRzLy6PEZ6Ib5VO_a_i05sgDJhjFSTSs960k=",
    price: "$11.50",
    rating: 4.6,
    reviews: 28,
    desc: "Các món ăn đặc trưng Trung Hoa, cay nhẹ, đậm đà và thơm hương dầu mè.",
    favorite: true,
  },
  {
    id: "3",
    name: "Ẩm Thực Hà Nội",
    imageUrl: "https://exotrails.com/wp-content/uploads/2024/11/hanoi-food-thumb-870x489-02-09-2024.jpeg",
    price: "$10.80",
    rating: 4.8,
    reviews: 52,
    desc: "Phở bò, bún chả, nem rán và nhiều món đặc sản đất Hà Thành hấp dẫn.",
    favorite: true,
  },
  {
    id: "4",
    name: "Món Ngon Việt Nam",
    imageUrl: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/6/18/1058066/Vietnamesefoods.jpg",
    price: "$9.25",
    rating: 4.5,
    reviews: 33,
    desc: "Đậm đà hương vị quê hương với nguyên liệu tươi ngon và phong phú.",
    favorite: true,
  },
  {
    id: "5",
    name: "Ẩm Thực Cố Đô Huế",
    imageUrl: "https://huesmiletravel.com.vn/wp-content/uploads/2024/01/am-thuc-Hue-1.jpg",
    price: "$12.40",
    rating: 4.9,
    reviews: 47,
    desc: "Món ăn cung đình Huế thanh tao, cay nhẹ và trình bày tinh tế.",
    favorite: true,
  },
  {
    id: "6",
    name: "Ẩm Thực Hàn Quốc",
    imageUrl: "https://duhoc.thanhgiang.com.vn/sites/default/files/am-thuc-han-quoc.jpg",
    price: "$13.20",
    rating: 4.4,
    reviews: 26,
    desc: "Kimchi, BBQ, tokbokki và các món ăn Hàn đầy màu sắc và đậm vị.",
    favorite: true,
  },
  {
    id: "7",
    name: "Ẩm Thực Nhật Bản",
    imageUrl: "https://afamilycdn.com/150157425591193600/2023/5/20/wang1-168454766731911858619-1684574651551-16845746521001238984753.jpg",
    price: "$14.80",
    rating: 4.7,
    reviews: 38,
    desc: "Sushi, sashimi và ramen — tinh hoa ẩm thực Nhật Bản, tươi ngon và tinh tế.",
    favorite: true,
  },
];

export default function FavoritesScreen() {
  const [items, setItems] = useState<FavouriteProduct[]>(MOCK_FAVORITES);

  const onToggleFavourite = (id: string) => {
    setItems((prev) => prev.map((p) => (p.id === id ? { ...p, favorite: !p.favorite } : p)));
  };

  const data = useMemo(() => items.filter((i) => i.favorite), [items]);

  return (
    <SafeAreaView edges={["top", "left", "right"]} style={styles.screen}>
      <View style={styles.headerWrap}>
        <Text style={styles.headerTitle}>Đã thích</Text>
        <Text style={styles.headerDesc}>Món ăn yêu thích của bạn</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => <CardFavouriteProduct product={item} style={{ marginBottom: 12 }} onToggleFavourite={onToggleFavourite} />}
        ListEmptyComponent={<View style={styles.emptyWrap}><Text style={styles.emptyText}>Chưa có món nào được thêm vào yêu thích</Text></View>}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
