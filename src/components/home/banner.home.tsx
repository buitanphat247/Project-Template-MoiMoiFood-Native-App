import * as React from "react";
import { Dimensions, Image, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
  ICarouselInstance,
  Pagination,
} from "react-native-reanimated-carousel";

const width = Dimensions.get("window").width;
const BannerHome = () => {
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);
  const data = [
    { img: require("@assets/images/banner/bn1.jpg") },
    { img: require("@assets/images/banner/bn2.jpg") },
    { img: require("@assets/images/banner/bn3.jpg") },
  ];
  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      /**
       * Calculate the difference between the current index and the target index
       * to ensure that the carousel scrolls to the nearest index
       */
      count: index - progress.value,
      animated: true,
    });
  };

  return (
    <View>
      <Carousel
        ref={ref}
        width={width}
        height={width / 3}
        data={data}
        onProgressChange={progress}
        loop={true}
        autoPlay={true}
        // mode="parallax"

        autoPlayInterval={2000}
        renderItem={({ item, index }) => (
          <View
            style={{
              flex: 1,
              overflow: "hidden",
            }}
          >
            <Image
              source={item.img}
              style={{
                width: width,
                height: width / 3,
                resizeMode: "cover",
              }}
            />
          </View>
        )}
      />
    </View>
  );
};
export default BannerHome;
