// Exercise 14 Password Generator
function changeVocals(str) {
    //(ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)
    var text = '';
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case 'a':
                text += 'b';
                break;
            case 'A':
                text += 'B';
                break;
            case 'i':
                text += 'j';
                break;
            case 'I':
                text += 'J';
                break;
            case 'u':
                text += 'v';
                break;
            case 'U':
                text += 'V';
                break;
            case 'e':
                text += 'f';
                break;
            case 'E':
                text += 'F';
                break;
            case 'o':
                text += 'p';
                break;
            case 'O':
                text += 'P';
                break;
            default:
                text += str[i];
                break;
        }
    }
    return text;
}

function reverseWord(str) {
    var text = '';
    for (let i = str.length-1; i >= 0; i--) {
        text += str[i];
    }
    return text;
}

function setLowerUpperCase(str) {
    var kecil = 'abcdefghijklmnopqrstuvwxyz ';
    var besar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ';
    var text = '';
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < kecil.length; j++) {
            if(str[i] === kecil[j]){
                text += besar[j];
                break;
            }
        }
        for (let k = 0; k < besar.length; k++) {
            if(str[i] === besar[k]){
                text += kecil[k];
                break;
            }
        }
    }
    return text;
}

function removeSpaces(str) {
    var text = '';
    for (let i = 0; i < str.length; i++) {
        if(str[i] === ' '){
            continue;
        } else {
            text += str[i];
        }
    }
    return text;
}

function passwordGenerator(name) {
    if(name.length < 5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter';
    }
    name = changeVocals(name);
    name = reverseWord(name);
    name = setLowerUpperCase(name);
    name = removeSpaces(name);
    return name;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'