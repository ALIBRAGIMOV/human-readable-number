module.exports = function toReadable(number) {
    let numStr = `${number}`.split('')
    let numArr = numStr
    let numConc = []

    let numObj = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten'
    }

    if (+numArr[0] == 0) return 'zero'

    if (numStr.length == 3) {
        let concTh = numConc.push(`${numObj[numStr[0]]}` + ' hundred ');
        numArr = numStr.slice(1, 3)
        switch (numArr[0]) {
            case numArr[0]:
                concTh;
                break;
        }
    }

    if (numArr.length == 2) {
        console.log(numArr)
        switch (numArr[0]) {
            case '0':
                numConc.push('');
                numArr = numArr.slice(1, 2);
                break;
            case '1':
                switch (numArr[1]) {
                    case '0':
                        numConc.push(`ten`);
                        numArr = numArr.slice(0, 2);
                        break;
                    case '1':
                        numConc.push(`eleven`);
                        numArr = numArr.slice(0, 2);
                        break;
                    case '2':
                        numConc.push(`twelve`);
                        numArr = numArr.slice(0, 2);
                        break;
                    case '3':
                        numConc.push(`thirteen`);
                        numArr = numArr.slice(0, 2);
                        break;
                    case '4':
                        numConc.push(`fourteen`);
                        numArr = numArr.slice(0, 2);
                        break;
                    case '5':
                        numConc.push(`fifteen`);
                        numArr = numArr.slice(0, 2);
                        break;
                    case '6':
                        numConc.push(`sixteen`);
                        numArr = numArr.slice(0, 2);
                        break;
                    case '7':
                        numConc.push(`seventeen`);
                        numArr = numArr.slice(0, 2);
                        break;
                    case '8':
                        numConc.push(`eighteen`);
                        numArr = numArr.slice(0, 2);
                        break;
                    case '9':
                        numConc.push(`nineteen`);
                        numArr = numArr.slice(0, 2);
                        break;
                }
                break;
            case '2':
                numConc.push(`twenty `);
                numArr = numArr.slice(1, 3);
                break;
            case '3':
                numConc.push(`thirty `);
                numArr = numArr.slice(1, 2);
                break;
            case '4':
                numConc.push(`forty `);
                numArr = numArr.slice(1, 2);
                break;
            case '5':
                numConc.push(`fifty `);
                numArr = numArr.slice(1, 2);
                break;
            case '8':
                numConc.push(`eighty `);
                numArr = numArr.slice(1, 2);
                break;
            case numArr[0]:
                numConc.push(`${numObj[numArr[0]]}ty `);
                numArr = numArr.slice(1, 2);
                break;
        }
    }

    if (numArr.length <= 1) {
        switch (numArr[0]) {
            case '0':
                numConc.push('');
                break;
            case numArr[0]:
                numConc.push(`${numObj[numArr[0]]}`);
                break;
        }
    }

    return numConc.join('').trim()
}
