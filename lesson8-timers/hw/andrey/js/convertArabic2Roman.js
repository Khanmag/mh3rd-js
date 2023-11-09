// root converter Arabic 2 Roman
function rootConvertArabic2Roman() {
    // root elements
    const rootInput = document.getElementById('root_convertArabic2Roman_input');
    const rootButton = document.getElementById('root_convertArabic2Roman_button');
    const rootOutput = document.getElementById('root_convertArabic2Roman_output');
    //
    // convert Arabic to Roman from I
    const createColumn = (a) => (a == 1) ? 'I' : 'I' + createColumn(a - 1);
    //
    // optimization Roman from I to real Roman
    const doNiceRomeNumber = (number) => {
        let numberRome = '';
        switch (Math.trunc(number.length/10)) {
            case 10: numberRome  = 'C';    break;
            case  9: numberRome  = 'XC';   break;
            case  8: numberRome  = 'LXXX'; break;
            case  7: numberRome  = 'LXX';  break;
            case  6: numberRome  = 'LX';   break;
            case  5: numberRome  = 'L';    break;
            case  4: numberRome  = 'XL';   break;
            case  3: numberRome  = 'XXX';  break;
            case  2: numberRome  = 'XX';   break;
            case  1: numberRome  = 'X';
        };
        switch (Math.trunc(number.length%10)) {
            case  9: numberRome += 'IX';   break;
            case  8: numberRome += 'VIII'; break;
            case  7: numberRome += 'VII';  break;
            case  6: numberRome += 'VI';   break;
            case  5: numberRome += 'V';    break;
            case  4: numberRome += 'IV';   break;
            case  3: numberRome += 'III';  break;
            case  2: numberRome += 'II';   break;
            case  1: numberRome += 'I';
        };
        return numberRome;
    };
    //
    // convert Arabic to Roman
    function convertArabic2Roman(numberArabic = '') {
        if (numberArabic === '') return 'Blank Value';
        if (isNaN(numberArabic)) return 'Not a Number';
        if (numberArabic <= 0) return 'Number Must Be Greater or Equal 1';
        if (numberArabic > 100) return 'Number Must Be Less Than or Equal 100';
        if (numberArabic%1) return 'A Fractional Number';
        const numberRomeI = createColumn(numberArabic);
        return doNiceRomeNumber(numberRomeI);
    };
    //
    // when press button
    rootButton.onclick = () => rootOutput.value = convertArabic2Roman(rootInput.value);
};
// run converter Arabic 2 Roman
rootConvertArabic2Roman();