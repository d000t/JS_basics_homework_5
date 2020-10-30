function task1() {
    let entered_num = prompt('Enter a number to get a string representation');
    alert(num_to_str_representation(entered_num));
}
 function num_to_str_representation(entered_num){
    if (entered_num.length<1){
       return 'Sorry, you need to enter number from 1 to 99';
    }
    let tens_and_digits_map = new Map();
     nums_map.set('1', 'one');
     nums_map.set('2', 'two');
     nums_map.set('3', 'three');
     nums_map.set('4', 'four');
     nums_map.set('5', 'five');
     nums_map.set('6', 'six');
     nums_map.set('7', 'seven');
     nums_map.set('8', 'eight');
     nums_map.set('9', 'nine');
     nums_map.set('10', 'ten');
     nums_map.set('11', 'eleven');
     nums_map.set('12', 'twelve');
     nums_map.set('13', 'thirteen');
     nums_map.set('14', 'fourteen');
     nums_map.set('15', 'fifteen');
     nums_map.set('16', 'sixteen');
     nums_map.set('17', 'seventeen');
     nums_map.set('18', 'eighteen');
     nums_map.set('19', 'nineteen');
     nums_map.set('20', 'twenty');
     nums_map.set('30', 'thirty');
     nums_map.set('40', 'forty');
     nums_map.set('50', 'fifty');
     nums_map.set('60', 'sixty');
     nums_map.set('70', 'seventy');
     nums_map.set('80', 'eighty');
     nums_map.set('90', 'ninety');
    return nums_map.has(entered_num) ? nums_map.get(entered_num)
        : `${nums_map.get(entered_num.split('')[0] + '0')}-${nums_map.get(entered_num[1])}`;
}
function task2(){
    let str = prompt('Enter a string');
    alert(get_String_info(JSON.stringify(str)));
}
function get_String_info(str){
    return [`Quantity of digits - ${str.match(/\d/g).length || []}\n`,

            `Number of letters - ${str.match(/[^\d&&^\s&&^\W]/g).length}\n`,

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
