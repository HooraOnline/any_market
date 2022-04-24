import React, { useState } from "react";
import {
    View,
    Platform,
    UIManager,
    LayoutAnimation,
    StyleSheet,
    Button
} from "react-native";

if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Colspace = () => {
    const [boxPosition, setBoxPosition] = useState("left");

    const toggleBox = () => {
        LayoutAnimation.configureNext(
            LayoutAnimation.create(
                500,
                LayoutAnimation.Types.spring,
                LayoutAnimation.Properties.scaleXY
            )
        );
        setBoxPosition(boxPosition === "left" ? "right" : "left");
    };

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button title="Toggle Layout" onPress={toggleBox} />
            </View>
            <View
                style={[styles.box, boxPosition === "left" ? null : styles.moveRight]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "center"
    },
    box: {
        height: 100,
        width: 100,
        borderRadius: 5,
        margin: 8,
        backgroundColor: "blue"
    },
    moveRight: {
        alignSelf: "flex-end",
        height: 200,
        width: 200
    },
    buttonContainer: {
        alignSelf: "center"
    }
});

export default Colspace;