export function membershipCost (cost, friends) {
    // processing
    let discount = 0; 

    if (friends == 1) {
        discount = 0.05; 
    } else if (friends == 2) {
        discount = 0.10; 
    } else if (friends >= 3) {
        discount = 0.15; 
    }
        // output
    let total = cost - (cost * discount);

    return total; 
}

if (import.meta.main) {
  console.log(`membershipCost(100, 3) = ${membershipCost(100, 3)}`);
}