
// This uses comparison of height and mass to detemine if someone can be eaten by the Sarlacc pit.
// Returns false if they cannot be eaten and true if they can.
// Boba Fett will always return false due to lore.
// Starship section is there for when that feature gets added.
export const sarlaccability = (obj, type) => {
    switch (type) {
        default:
            return null;
        case 'person':
            const mass = obj.mass

            if (typeof obj.mass === 'string' && obj.mass !== 'unknown') obj.mass = parseInt(mass.replace(/,/,''));

            if (obj.height > 200 || obj.mass > 200 || obj.name === 'Boba Fett' ) return false;
            return true;
            
        case 'starship':
            if (obj.length > 4) return false;
            return true;
    }
}
