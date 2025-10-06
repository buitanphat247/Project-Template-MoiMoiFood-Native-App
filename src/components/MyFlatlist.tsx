import React from "react";
import { FlatList } from "react-native";

interface MyFlatlistProps {
  data: any[];
  renderItem: ({ item, index }: { item: any; index: number }) => React.ReactElement | null;
  keyExtractor?: (item: any, index: number) => string;
  [key: string]: any;
}

const defaultKeyExtractor = (item: any, index: number) => {
  if (item?.id != null) return String(item.id);
  if (item?.key != null) return String(item.key);
  return String(index);
};

const MyFlatlist = ({ data, renderItem, keyExtractor, ...rest }: MyFlatlistProps) => {
  return (
    <FlatList
      {...rest}
      data={data}
      renderItem={renderItem as any}
      keyExtractor={keyExtractor ?? defaultKeyExtractor}
    />
  );
};

export default MyFlatlist;