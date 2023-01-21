const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let res = '';
    let arrOfNumber = expr.match(/(.{10}|.)/g)

    for (let x = 0; x < arrOfNumber.length; x++) {

        arrOfNumber[x] = arrOfNumber[x].match(/(.{2}|.)/g)
        let subarray = arrOfNumber[x]
        
        for (let i = 0; i < subarray.length; i++) {
            if (subarray[i] === '00') {
                i -= 1;
                subarray.shift()
            } else if (subarray[i] === '10') {
                subarray[i] = '.'
            } else if (subarray[i] === '11') {
                subarray[i] = '-'
            }
        }
        
        arrOfNumber[x] = arrOfNumber[x].join('')
    }  

    arrOfNumber.forEach(element => {
        for (key in MORSE_TABLE) {
            if (element === key ) {
                res += MORSE_TABLE[key]
            } else if (element == '**********') {
                element = ' ' 
                res += element
            }
        } 
    });

    return res
}

module.exports = {
    decode
}