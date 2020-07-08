
exports.getUpdateString = function(obj, cb){
    let set = '';
    for(key in obj){
        // console.log(`${key} is ${obj[key]}`);
        set += key.toLowerCase()+'=';
        switch(typeof obj[key]){
            case "number":
                set += obj[key]+",";
                break;
            case "string":
            case "object":
            case "boolean":
            default:
                set += `'${obj[key]}',`;
        }
    }
    // set += "updatedAt=now()";

    set = set.substr(0, set.length-1) + ";";
    cb(set);
}