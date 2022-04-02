
// This uses cutting edge mathematics to detemine if someone can be eaten by the Sarlacc pit
// Returns false if they cannot be eaten and true if they can
export const sarlaccability = (obj, type) => {
    switch (type) {
        default:
            return null
        case 'person':

            if (obj.height > 200 || obj.mass > 200 || obj.name === 'Boba Fett' || obj.name === "Jabba Desilijic Tiure") return false
            return true
        case 'starship':
            if (obj.length > 4) return false
            return true
    }
}
