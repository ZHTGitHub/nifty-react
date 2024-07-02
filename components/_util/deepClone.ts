const deepClone = function(value: Record<string, any> = {}) {
    if(typeof value !== 'object' || value == null) {
        return value
    }

    const result: Record<string, any> = (value instanceof Array) ? [] : {}

    for(let key in value) {
        if(value.hasOwnProperty(key)) {
        result[key] = deepClone(value[key])
        }
    }

    return result
}  

export default deepClone