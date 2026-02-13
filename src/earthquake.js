// input 
export function earthquake(intensity) {
    // processing (
    let result = "";

    if(intensity < 5){
        result = "Little or no damage";
    }else if(intensity >= 5 && intensity < 5.5){
        result = "Some damage";
    
    }else if(intensity >= 5.5 && intensity < 6.5){
        result = "Serious damage: walls may crack or fall";

    }else if(intensity >= 6.5 && intensity < 7.5){
        result = "Disaster: buildings may collapse";

    } else if(intensity >= 7.5){
        result = "Catastrophe: most buildings destroyed";
    }
    // output
    return result;
}

// developer test
if (import.meta.main) {
   console.log(`earthquake(6.0) = ${earthquake(6.0)}`);
}