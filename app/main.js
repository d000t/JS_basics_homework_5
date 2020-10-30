function task1() {
    let entered_num = prompt('Enter a number to get a string representation');
    alert(num_to_str_representation(entered_num));
}
 function num_to_str_representation(entered_num){
    let nums_map = new Map();
    nums_map.set('1', 'one');
    nums_map.set('2', 'two');
    nums_map.set('3', 'three');
    nums_map.set('4', 'four');
    nums_map.set('5', 'five');
    nums_map.set('6', 'six');
    nums_map.set('7', 'seven');
    nums_map.set('8', 'eight');
    nums_map.set('9', 'nine');

    let tens_and_digits_map = new Map();
     tens_and_digits_map.set('10', 'ten');
     tens_and_digits_map.set('11', 'eleven');
     tens_and_digits_map.set('12', 'twelve');
     tens_and_digits_map.set('13', 'thirteen');
     tens_and_digits_map.set('14', 'fourteen');
     tens_and_digits_map.set('15', 'fifteen');
     tens_and_digits_map.set('16', 'sixteen');
     tens_and_digits_map.set('17', 'seventeen');
     tens_and_digits_map.set('18', 'eighteen');
     tens_and_digits_map.set('19', 'nineteen');
     tens_and_digits_map.set('20', 'twenty');
     tens_and_digits_map.set('30', 'thirty');
     tens_and_digits_map.set('40', 'forty');
     tens_and_digits_map.set('50', 'fifty');
     tens_and_digits_map.set('60', 'sixty');
     tens_and_digits_map.set('70', 'seventy');
     tens_and_digits_map.set('80', 'eighty');
     tens_and_digits_map.set('90', 'ninety');
    return tens_and_digits_map.has(entered_num) ? tens_and_digits_map.get(entered_num)
        : tens_map.get(entered_num.split('')[0] + '0') + nums_map.get(entered_num.split('-')[1]);
}
function task2(){
    let str = prompt('Enter a string');
    alert(get_String_info(JSON.stringify(str)));
}
function get_String_info(str){
    return [`Quantity of digits - ${str.match(/\d/g).length || []}`,

            `Number of letters - ${str.match(/[^\d&&^\s&&^\W]/g).length}`,

            `Number of other symbols - ${str.match(/[^\s&&^\w]/g).length - 2}`];
}
function task3(){
let str = prompt('Enter a string to convert');
let arr = str.split('').map(character =>{
   if (!isNaN(character * 1)){
        return '_';
    }
   //=== because of diacriticals in lower case
    if (character == character.toLowerCase()){
        return character.toUpperCase();
    }else{
        return character.toLowerCase();
        }
}).join("");
alert(arr);
}
