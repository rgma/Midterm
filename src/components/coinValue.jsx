import { Text, View, } from 'react-native';
import { coinValue } from "../coinValue.js";

// input 
export function CoinValue ({ nickels, dimes, quarters, loonies, toonies }) {
   
    //processing
    let total = coinValue(nickels, dimes, quarters, loonies, toonies);
   
    // output 
    return (
        <View>
            <Text>
                {nickels} nickels, {dimes} dimes, {quarters} quarters,  
                {loonies} loonies, {toonies} toonies  is worth ${total}
                </Text>
        </View>
    );
}