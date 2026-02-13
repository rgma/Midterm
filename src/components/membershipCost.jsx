import { Text, View, } from 'react-native';
import { membershipCost } from "../membershipCost.js";

// input 
export function MembershipCost ({ cost, friends }) {
   
    //processing
    let total = membershipCost (cost, friends);
   
    // output 
    return (
        <View>
            <Text>
                A ${cost} membership with {friends} friends discount
                costs ${total}
            </Text>
        </View>
    );
}