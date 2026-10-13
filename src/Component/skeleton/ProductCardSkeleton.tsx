import React, { useEffect } from "react";
import { View, StyleSheet, Animated, Easing } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const ProductCardSkeleton: React.FC = () => {
    const shimmerAnim = React.useRef(new Animated.Value(0)).current;

   /* useEffect(() => {
        const shimmerAnimation = Animated.loop(
            Animated.sequence([
                Animated.timing(shimmerAnim, {
                    toValue: 1,
                    duration: 1500,
                    easing: Easing.inOut(Easing.ease),
                    useNativeDriver: false,
                }),
                Animated.timing(shimmerAnim, {
                    toValue: 0,
                    duration: 1500,
                    easing: Easing.inOut(Easing.ease),
                    useNativeDriver: false,
                }),
            ])
        );

        shimmerAnimation.start();

        return () => {
            shimmerAnimation.stop();
        };
    }, [shimmerAnim]);*/

    const animatedStyle = {
        backgroundColor: shimmerAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ["#E0E0E0", "#F0F0F0"],
        }),
    };

    return (
        <View style={{ /*paddingHorizontal: 20*/}}>
            <View
                style={[
                    styles.mainContainer,
                    {
                        height: responsiveHeight(16),
                    },
                ]}
            >
                {/* Image Skeleton */}
                <Animated.View
                    style={[
                        styles.imageSkeleton,
                        animatedStyle,
                        {
                            height: 80,
                            width: 80,
                            borderRadius: 1000000,
                        },
                    ]}
                />

                {/* Content Skeleton */}
                <View
                    style={{
                        marginLeft: 10,
                        flex: 1,
                        justifyContent: "space-between",
                    }}
                >
                    {/* Title Skeleton */}
                    <Animated.View
                        style={[
                            styles.textSkeleton,
                            animatedStyle,
                            {
                                height: 16,
                                width: "70%",
                                marginBottom: 8,
                                borderRadius: 4,
                            },
                        ]}
                    />

                    {/* Divider Skeleton */}
                    <View
                        style={{
                            width: "100%",
                            borderStyle: "dashed",
                            borderWidth: 1,
                            height: 1,
                            borderColor: "#E0E0E0",
                            marginVertical: 6,
                        }}
                    />

                    {/* First Row - Order ID & Date */}
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginBottom: 8,
                        }}
                    >
                        <Animated.View
                            style={[
                                styles.textSkeleton,
                                animatedStyle,
                                {
                                    height: 12,
                                    width: "30%",
                                    borderRadius: 4,
                                },
                            ]}
                        />
                        <Animated.View
                            style={[
                                styles.textSkeleton,
                                animatedStyle,
                                {
                                    height: 12,
                                    width: "40%",
                                    borderRadius: 4,
                                },
                            ]}
                        />
                    </View>

                    {/* Second Row - Time & Status */}
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <Animated.View
                            style={[
                                styles.textSkeleton,
                                animatedStyle,
                                {
                                    height: 12,
                                    width: "35%",
                                    borderRadius: 4,
                                },
                            ]}
                        />
                        <Animated.View
                            style={[
                                styles.textSkeleton,
                                animatedStyle,
                                {
                                    height: 12,
                                    width: "35%",
                                    borderRadius: 4,
                                },
                            ]}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#FFFFFF",
        padding: 15,
        marginTop: 5,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection: "row",
        alignItems: "center",
    },
    imageSkeleton: {
        backgroundColor: "#E0E0E0",
    },
    textSkeleton: {
        backgroundColor: "#E0E0E0",
    },
});

export default ProductCardSkeleton;
