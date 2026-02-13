import {Hello} from './Hello.jsx';
import { SnowRemoval } from './SnowRemoval.jsx';
import { CoinValue } from './coinValue.jsx';
import { FahrenheitToCelsius } from './fahrenheitToCelsius.jsx';
import { CubeVolume } from './cubeVolume.jsx';
import { MembershipCost } from './membershipCost.jsx';
import { Earthquake } from './earthquake.jsx';
import {
  View,
} from 'react-native';

export default function App() {
  return (
    <View>
      <Hello name="Rich" />
      <Hello />
      <Hello name="Biff" />
      <SnowRemoval cm={3} />
      <CoinValue
        nickels={2} 
        dimes={3} 
        quarters={1} 
        loonies={1} 
        toonies={1} 
      />
      <FahrenheitToCelsius fahrenheit={32} />
      <FahrenheitToCelsius fahrenheit={212} />
      <FahrenheitToCelsius fahrenheit={70} />

      <CubeVolume height={1} />
      <CubeVolume height={2} />
      <CubeVolume height={3} />

      < MembershipCost cost={100} friends={1} />
      < MembershipCost cost={100} friends={2} />
      < MembershipCost cost={100} friends={3} />
      < MembershipCost cost={100} friends={5} />

      < Earthquake intensity={4.5}/>
      < Earthquake intensity={5.2}/>
      < Earthquake intensity={8.0}/>

    </View>
  );
}

