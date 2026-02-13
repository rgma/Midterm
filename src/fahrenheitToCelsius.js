//input 
export function fahrenheitToCelsius (fahrenheit) {
    //processing 
    let celsius = (fahrenheit - 32) * 5/9; 
    //output 
    return celsius; 
}

if (import.meta.main) {
  console.log(`fahrenheitToCelsius(70) = ${fahrenheitToCelsius(70)}`);
}