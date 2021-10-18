export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export function lowercaseFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1)
}

export function singular(string){
    var lastChar = string.slice(-1)
    if(lastChar != 's'){
        return string
    }
    return string.slice(0,-1)
}

export function isNumeric(string){
    return !isNaN(string)
}
