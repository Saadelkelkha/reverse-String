function inverse(ch){
    var inv = ""
    for(var i = ch.length - 1; i >= 0; i--){
        inv += ch[i]
    }
    return inv
}
document.write(inverse("Hello World!"))