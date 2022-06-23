function validSolution(arr) {
    let line = []
    let column = []
    let are = []

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            column.push(arr[i][j])
            line.push(arr[j][i])
        }
        line = new Array(...new Set(line))
        column = new Array(...new Set(column))
        if (line.length != 9 && column.length != 9) { return false }
        column = []
        line = []
    }

    for (let i = 0; i < arr.length / 3; i++) {
        for (let j = 0; j < arr[i].length / 3; j++) {
            are.push(arr[1 + i * 3 - 1][1 + j * 3 - 1]) // 00
            are.push(arr[1 + i * 3 - 1][1 + j * 3 + 0]) // 01
            are.push(arr[1 + i * 3 - 1][1 + j * 3 + 1]) // 02

            are.push(arr[1 + i * 3][1 + j * 3 - 1]) // 10
            are.push(arr[1 + i * 3][1 + j * 3 + 0]) // 11
            are.push(arr[1 + i * 3][1 + j * 3 + 1]) // 12

            are.push(arr[1 + i * 3 + 1][1 + j * 3 - 1]) // 20
            are.push(arr[1 + i * 3 + 1][1 + j * 3 + 0]) // 21
            are.push(arr[1 + i * 3 + 1][1 + j * 3 + 1]) // 22

            are = new Array(...new Set(are))
            console.log(are)
            if (are.length != 9) { return false }
            are = []
        }
    }

    return true

}
