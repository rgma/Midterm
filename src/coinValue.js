// input 
export function coinValue(nickels, dimes, quarters, loonies, toonies) {
    // processing 
    let total = 0; 

    total = total + nickels * 0.05; 
    total = total + dimes * 0.10; 
    total = total + quarters * 0.25; 
    total = total + loonies * 1.00; 
    total = total + toonies * 2.00; 
   
    
    // output
    return total;
}

// dev test
if (import.meta.main) {
    console.log(`coinValue(2, 3, 1, 1, 1) = ${coinValue(2, 3, 1, 1, 1)}`);
}