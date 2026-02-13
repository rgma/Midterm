import {
    Text,
    View,
} from 'react-native';
import { earthquake } from "../earthquake.js";

// input snowfall in cm
export function Earthquake({ intensity }) {
    //processing
    let result = earthquake(intensity);
    // output the equipment
    return (
        <View>
            <Text>
                 An {intensity} earthquake damage level: {result}
            </Text>
        </View>
    );
}