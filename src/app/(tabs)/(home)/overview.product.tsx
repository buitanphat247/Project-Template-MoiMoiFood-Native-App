import OverviewHeader from "@/components/products/OverviewHeader";
import OverviewProductCard from "@/components/products/OverviewProductCard";
import { useRouter } from "expo-router";
import React, { useMemo, useState } from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Product = {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  rating: number;
  reviews: number;
  desc: string;
  favorite?: boolean;
};
const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Tinh Hoa Ẩm Thực Việt",
    imageUrl: "https://www.pizzaexpress.vn/wp-content/uploads/2021/03/tinh-hoa-am-thuc-viet-nam-1_1.jpg",
    price: "$10.35",
    rating: 4.8,
    reviews: 251,
    desc: "Đậm đà hương vị truyền thống Việt Nam.",
  },
  {
    id: "2",
    name: "Ẩm Thực Trung Hoa",
    imageUrl:
      "https://media.istockphoto.com/id/545286388/vi/anh/n%E1%BB%81n-tr%E1%BB%91ng-th%E1%BB%B1c-ph%E1%BA%A9m-trung-qu%E1%BB%91c.jpg?s=612x612&w=0&k=20&c=KOJk_VDPRzLy6PEZ6Ib5VO_a_i05sgDJhjFSTSs960k=",
    price: "$9.99",
    rating: 4.3,
    reviews: 189,
    desc: "Món ăn Trung Hoa đặc sắc với hương vị tinh tế.",
    favorite: true,
  },
  {
    id: "3",
    name: "Ẩm Thực Hà Nội",
    imageUrl: "https://exotrails.com/wp-content/uploads/2024/11/hanoi-food-thumb-870x489-02-09-2024.jpeg",
    price: "$11.90",
    rating: 4.6,
    reviews: 342,
    desc: "Ẩm thực đường phố Hà Nội trứ danh.",
  },
  {
    id: "4",
    name: "Ẩm Thực Việt Nam",
    imageUrl: "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/6/18/1058066/Vietnamesefoods.jpg",
    price: "$12.50",
    rating: 4.7,
    reviews: 275,
    desc: "Món ngon ba miền hội tụ tinh hoa dân tộc.",
  },
  {
    id: "5",
    name: "Ẩm Thực Huế",
    imageUrl: "https://huesmiletravel.com.vn/wp-content/uploads/2024/01/am-thuc-Hue-1.jpg",
    price: "$13.20",
    rating: 4.9,
    reviews: 198,
    desc: "Tinh tế, thanh tao và đặc sắc xứ Huế.",
  },
  {
    id: "6",
    name: "Ẩm Thực Hàn Quốc",
    imageUrl: "https://duhoc.thanhgiang.com.vn/sites/default/files/am-thuc-han-quoc.jpg",
    price: "$10.90",
    rating: 4.4,
    reviews: 221,
    desc: "Hương vị cay nồng và hấp dẫn của Hàn Quốc.",
  },
  {
    id: "7",
    name: "Ẩm Thực Nhật Bản",
    imageUrl: "https://afamilycdn.com/150157425591193600/2023/5/20/wang1-168454766731911858619-1684574651551-16845746521001238984753.jpg",
    price: "$14.50",
    rating: 4.8,
    reviews: 310,
    desc: "Tinh tế và nghệ thuật trong từng món ăn Nhật.",
  },
];

export default function OverviewProduct() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>(MOCK_PRODUCTS);
  const [sort, setSort] = useState<"popular" | "price" | "rating">("popular");
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("all");

  const categories = [
    { key: "all", label: "Tất cả" },
    { key: "vietnam", label: "Việt" },
    { key: "china", label: "Trung" },
    { key: "japan", label: "Nhật" },
    { key: "korea", label: "Hàn" },
  ];

  const filtered = useMemo(() => {
    let data = products;
    if (query.trim()) data = data.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()));
    // demo filter theo category đơn giản bằng tên
    if (category !== "all") data = data.filter((p) => p.name.toLowerCase().includes(category));
    return data;
  }, [products, query, category]);

  const sorted = useMemo(() => {
    const base = [...filtered];
    if (sort === "price") return base.sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)));
    if (sort === "rating") return base.sort((a, b) => b.rating - a.rating);
    return base;
  }, [filtered, sort]);

  const toggleFavorite = (id: string) => {
    setProducts((prev) => prev.map((p) => (p.id === id ? { ...p, favorite: !p.favorite } : p)));
  };

  const ProductCard = ({ item }: { item: Product }) => <OverviewProductCard item={item} onToggleFavorite={toggleFavorite} />;

  const HeaderHero = () => <OverviewHeader onBack={() => router.back()} query={query} onChangeQuery={setQuery} />;

  return (
    <SafeAreaView edges={["top", "left", "right"]} style={{ flex: 1, backgroundColor: "#ffffff" }}>
      {/* Header + bộ lọc cố định */}
      <HeaderHero />

      {/* Danh sách sản phẩm */}
      <FlatList
        data={sorted}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 10 }}
        renderItem={({ item }) => <ProductCard item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
