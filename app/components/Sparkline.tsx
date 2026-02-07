import React, { useMemo, useState } from "react";
import { LayoutChangeEvent, StyleSheet, View } from "react-native";
import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";
import { COLORS } from "../constants/constants";

interface Props {
  data: number[];
  color?: string;
  height?: number;
}

export const Sparkline = ({
  data,
  color = COLORS.primary,
  height = 60,
}: Props) => {
  const [width, setWidth] = useState(0);

  const { min, range } = useMemo(() => {
    if (!data.length) return { min: 0, max: 0, range: 1 };
    const minVal = Math.min(...data);
    const maxVal = Math.max(...data);
    return { min: minVal, max: maxVal, range: maxVal - minVal || 1 };
  }, [data]);

  const pathData = useMemo(() => {
    if (!data.length || width === 0) return "";

    const points = data.map((value, index) => {
      const x = (index / (data.length - 1)) * width;
      const y = height - ((value - min) / range) * (height - 10) - 5;
      return `${x},${y}`;
    });

    return `M ${points.join(" L ")}`;
  }, [data, width, height, min, range]);

  const areaPath = useMemo(() => {
    if (!pathData) return "";
    return `${pathData} L ${width},${height} L 0,${height} Z`;
  }, [pathData, width, height]);

  const onLayout = (event: LayoutChangeEvent) => {
    setWidth(event.nativeEvent.layout.width);
  };

  if (!data.length) return <View style={{ height }} />;

  return (
    <View style={[styles.container, { height }]} onLayout={onLayout}>
      {width > 0 && (
        <Svg width={width} height={height}>
          <Defs>
            <LinearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
              <Stop offset="0" stopColor={color} stopOpacity="0.3" />
              <Stop offset="1" stopColor={color} stopOpacity="0" />
            </LinearGradient>
          </Defs>

          <Path d={areaPath} fill="url(#gradient)" />

          <Path
            d={pathData}
            fill="none"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "flex-end",
  },
});
