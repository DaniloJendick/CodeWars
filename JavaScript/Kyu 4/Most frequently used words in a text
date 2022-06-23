function topThreeWords(str) {
    str = str.toLowerCase();
    let arr = ""
    for (let i = 0; i < str.length; i++) {
        if (/[a-z]|\'/i.test(str[i])) { arr += str[i] }
        else { if (arr[arr.length - 1] != " ") arr += " " }
    }

    arr = arr.split(" ")
    if (arr[arr.length - 1] == "") { arr.pop() }

    let map = new Map()
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) { map.set(arr[i], map.get(arr[i]) + 1); }
        else { map.set(arr[i], 1); }
    }

    arr = new Array(...map)

    let n = 3 // this number represents how many most frequent words we need, in this case only 3
    let max = 0;
    let word = ""
    let result = []
    let remover = 0;
    while (n > 0) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i][1] > max) {
                max = arr[i][1];
                word = arr[i][0];
                remover = i
            }
        }
        arr[remover] = 0
        max = 0;
        if (word != "" && word != "\'") { result.push(word) }
        word = "";
        n -= 1;
    }
    return result

}
