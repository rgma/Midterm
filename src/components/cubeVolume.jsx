import {
    Text,
    View,
} from 'react-native';
import { cubeVolume } from "../cubeVolume.js";

// input s
export function CubeVolume ({ height }) {
    //processing
    let volume = cubeVolume (height);
    // output 
    return (
        <View>
            <Text>
                 A {height}m cube has a volume of {volume} cubic meters
            </Text>
        </View>
    );
}