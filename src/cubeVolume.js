export function cubeVolume(height) {
    // processing
    let volume = height * height * height; 
    // output
    return volume; 
}

if (import.meta.main) {
  console.log(`cubeVolume(3) = ${cubeVolume(3)}`);
}