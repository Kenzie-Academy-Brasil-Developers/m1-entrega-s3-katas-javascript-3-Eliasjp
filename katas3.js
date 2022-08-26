const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata1 (list){
    let kata1List = ""
    for (i = 1; i <= list; i++){
        kata1List += i
        if (i < list){
        kata1List += ","
        }
    }
    return kata1List
}
  
console.log(`Kata 1: ${kata1(25)}`)
  
function kata2 (list){
    let kata2List = ""
    for (i = list; i >= 1; i--){
        kata2List += i
        if (i > 1){
            kata2List += ","
        }
    }
    return kata2List
}

console.log(`Kata 2: ${kata2(25)}`)

function kata3 (list){
    let kata3List = ""
    for (i = -1; i >= list; i--){
        kata3List += i
        if (i > list){
            kata3List += ","
        }
    }
    return kata3List
}

console.log(`Kata 3: ${kata3(-25)}`)

function kata4 (list){
    let kata4List = ""
    for (i = list; i <= -1; i++){
        kata4List += i
        if (i < -1){
            kata4List += ","
        }
    }
    return kata4List
}

console.log(`Kata 4: ${kata4(-25)}`)

function kata5 (list){
    let kata4List = ""
    if (list > 0){
        for (i = list; i >= list * -1; i--){
            if (i % 2 != 0){
                kata4List += i
                if (i > list * -1){
                    kata4List += ","
                }
            }
        }
    }
    if (list < 0){
        for (i = list; i <= list * -1; i++){
            if (i % 2 != 0){
                kata4List += i
                if (i < list * -1){
                    kata4List += ","
                }
            }
        }
    }
    return kata4List
}

console.log(`Kata 5: ${kata5(25)}`)
console.log(`Kata 5: ${kata5(-25)}`)

function kata6 (list){
    let kata6List = ""
    if (list < 100){
        for (i = list; i <= 100; i++){
            if (i % 3 == 0){
                kata6List += i
                if (i < 99){
                    kata6List += ","
                }
            }
        }
        return kata6List
    }
    if (kata6List == "" && list <= 100){
        return `Nenhum múltiplos de 3`
    }
    if (list > 100){
        return `Número maior que 100`
    }
}

console.log(`Kata 6: ${kata6(1)}`)
console.log(`Kata 6: ${kata6(100)}`)
console.log(`Kata 6: ${kata6(101)}`)

function kata7 (list){
    let kata7List = ""
    if (list < 100){
        for (i = list; i <= 100; i++){
            if (i % 7 == 0){
                kata7List += i
                if (i < 98){
                    kata7List += ","
                }
            }
        }
        return kata7List
    }
    if (kata7List == "" && list <= 100){
        return `Nenhum múltiplos de 7`
    }
    if (list > 100){
        return `Número maior que 100`
    }
}

console.log(`Kata 7: ${kata7(1)}`)
console.log(`Kata 7: ${kata7(100)}`)
console.log(`Kata 7: ${kata7(101)}`)

function kata8 (list){
    let kata8List = ""
    if (list < 100){
        for (i = 100; i >= list; i--){
            if (kata8List == "" && i % 7 == 0 || i % 3 == 0 && kata8List == ""){
                kata8List += i
                for (ii = i - 1; ii >= list; ii--){
                    if (ii % 7 == 0 && kata8List != "" || ii % 3 == 0 && kata8List != ""){
                        kata8List += ","
                        kata8List += ii
                    }
                }
            }
        }
        return kata8List
    }
    if (kata8List == "" && list <= 100){
        return `Nenhum múltiplos de 7 ou 3`
    }
    if (list > 100){
        return `Número maior que 100`
    }
}

console.log(`Kata 8: ${kata8(-100)}`)
console.log(`Kata 8: ${kata8(100)}`)
console.log(`Kata 8: ${kata8(101)}`)

function kata9 (list){
    let kata9List = ""
    for (i = list; i <= 100; i++){
        if (i % 5 == 0 && i % 2 != 0){
            kata9List += i
            if (i < 95){
                kata9List += ","
            }
        }
    }
    if (kata9List == "" && list <= 100){
        kata9List += `Nenhum múltiplos de 5 e ímpares`
    }
    if (list > 100){
        kata9List += `Número maior que 100`
    }
    return kata9List
}

console.log(`Kata 9: ${kata9(-100)}`)
console.log(`Kata 9: ${kata9(99)}`)
console.log(`Kata 9: ${kata9(101)}`)

function kata10 (list){
    let kata10List = ""
    for (i = 0; i < list.length; i++){
        if (kata10List != ""){
            kata10List += ","
            kata10List += list[i]
        }
        if (kata10List == ""){
            kata10List += list[i]
        }
    }
    return kata10List
}

console.log(`Kata 10: ${kata10(sampleArray)}`)

function kata11 (list){
    let kata11List = ""
    for (i = 0; i < list.length; i++){
        if (list[i] % 2 == 0 && kata11List != ""){
            kata11List += ","
            kata11List += list[i]
        }
        if (list[i] % 2 == 0 && kata11List == ""){
            kata11List += list[i]
        }
    }
    return kata11List
}

console.log(`Kata 11: ${kata11(sampleArray)}`)

function kata12 (list){
    let kata12List = ""
    for (i = 0; i < list.length; i++){
        if (list[i] % 2 != 0 && kata12List != ""){
            kata12List += ","
            kata12List += list[i]
        }
        if (list[i] % 2 != 0 && kata12List == ""){
            kata12List += list[i]
        }
    }
    return kata12List
}

console.log(`Kata 12: ${kata12(sampleArray)}`)

function kata13 (list){
    let kata13List = ""
    for (i = 0; i < list.length; i++){
        if (list[i] % 8 == 0 && kata13List != ""){
            kata13List += ","
            kata13List += list[i]
        }
        if (list[i] % 8 == 0 && kata13List == ""){
            kata13List += list[i]
        }
    }
    return kata13List
}

console.log(`Kata 13: ${kata13(sampleArray)}`)

function kata14 (list){
    let kata14List = ""
    for (i = 0; i < list.length; i++){
        kata14List += list[i] ** 2
        if (i < list.length - 1){
            kata14List += ","
        }
    }
    return kata14List
}

console.log(`Kata 14: ${kata14(sampleArray)}`)

function kata15 (list){
    let kata15Soma = 0
    for (i = 1; i <= list; i++){
        kata15Soma += i
    }
    let kata15List = `${kata15Soma}`
    return kata15List
}

console.log(`Kata 15: ${kata15(20)}`)

function kata16 (list){
    let kata16Soma = 0
    for (i = 0; i < list.length; i++){
        kata16Soma += list[i]
    }
    let kata16List = `${kata16Soma}`
    return kata16List
}

console.log(`Kata 16: ${kata16(sampleArray)}`)

function kata17 (list){
    let kata17Number = list[0]
    for (i = 0; i < list.length; i++){
        if (list[i] < kata17Number){
            kata17Number = list[i]
        }
    }
    let kata17List = `${kata17Number}`
    return kata17List
}

console.log(`Kata 17: ${kata17(sampleArray)}`)

function kata18 (list){
    let kata18Number = list[0]
    for (i = 0; i < list.length; i++){
        if (list[i] > kata18Number){
            kata18Number = list[i]
        }
    }
    let kata18List = `${kata18Number}`
    return kata18List
}

console.log(`Kata 18: ${kata18(sampleArray)}`)