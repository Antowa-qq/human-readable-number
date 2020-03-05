module.exports = function toReadable(number) {

    const toTwenty = ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
        'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
        'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];

    const dozens = {
        10: 'ten', 20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty',
        60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety'
    };

    const hundred = 'hundred';


    if (Math.ceil(Math.log10(Math.abs(number) + 0.5)) === 2) {
        if (number <= 20) {
            return toTwenty[number];
        }
        if (number % 10 === 0) {
            return dozens[Math.floor(number / 10) * 10];
        }
        return dozens[Math.floor(number / 10) * 10] + ' ' + toTwenty[number % 10];
    }
    if (Math.ceil(Math.log10(Math.abs(number) + 0.5)) === 3) {
        number = number.toString().split('').reverse().map((item, index) => +(item + '0'.repeat(index)));

        if (number[0] === 0 && number[1] === 0) {
            return toTwenty[number[2] / 100] + ' ' + hundred;
        }
        if (number[0] === 0) {
            return toTwenty[number[2] / 100] + ' ' + hundred + ' ' + dozens[number[1]];
        }
        if (number[0] + number[1] <= 20) {
            return toTwenty[number[2] / 100] + ' ' + hundred + ' ' + toTwenty[number[0] + number[1]];
        }
        return toTwenty[number[2] / 100] + ' ' + hundred + ' ' + dozens[number[1]] + ' ' + toTwenty[number[0]];
    }

    return toTwenty[number];
}
