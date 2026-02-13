import {
    Text,
    View,
} from 'react-native';
import { fahrenheitToCelsius } from "../fahrenheitToCelsius.js";

// input s
export function FahrenheitToCelsius({ fahrenheit }) {
    //processing
    let celsius = fahrenheitToCelsius (fahrenheit);
    // output 
    return (
        <View>
            <Text>
                {fahrenheit}F is {celsius}C
            </Text>
        </View>
    );
}