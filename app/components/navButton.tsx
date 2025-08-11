import React from "react";
import { TouchableOpacity } from "react-native";
import styles from "../../Styles";
import { Text } from "react-native";
const NavButton=({title,onPress})=>{
        return(
            <TouchableOpacity
            style={styles.Button}
            onPress={onPress}
            >
                <Text>{title}</Text>
               
            </TouchableOpacity>
        )
}
export default NavButton