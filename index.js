// Bài 1: Viết hàm đảo ngược chuỗi
// Example
// reverse('abc') // 'cba'

function reverse(str) {
    // viết code ở đây.
    var strReverse = '';
    for (var i = str.length - 1; i >= 0; i--) {
        strReverse += str[i];
    }
    return strReverse;
}

function reverse(str) {
    return str.split('').reverse().join('');
}

function reverse(str) {
    if (str === '') {
        return '';
    } else {
        return reverse(str.substr(1)) + str.charAt(0);
    }
}
//---------------------------------------------------------------------------------------------

// Bài 2: Viết hàm để viết hoa chữ cái đầu của từng từ trong câu
// Example
// capitalize("abc") // "Abc"
function capitalize1(str) {
    // viết code ở đây
    var newStr = '';

    if (str[0] >= 'a' && str[0] <= 'z') {
        newStr = str[0].toUpperCase();
    } else {
        newStr = str[0];
    }

    for (var i = 0; i < str.length - 1; i++) {
        if (str[i] === ' ' && (str[i + 1] >= 'a' && str[i + 1] <= 'z')) {
            newStr = newStr.concat(str[i + 1].toUpperCase());
        } else {
            newStr = newStr.concat(str[i + 1]);
        }
    }
    return newStr;
}

function capitalize2(str) { // các từ cách nhau chỉ một space
    // viết code ở đây
    var words = str.split(' ');
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].replace((words[i])[0], (words[i])[0].toUpperCase());
    }
    return words.join(' ');
}

function capitalize3(str) { // các từ cách nhau chỉ một space
    // viết code ở đây
    var words = str.split(' ');
    for (var i = 0; i < words.length; i++) {
        var chars = words[i].split('');
        chars[0] = chars[0].toUpperCase();
        words[i] = chars.join('');
    }
    return words.join(' ');
}
//---------------------------------------------------------------------------------------------


// Bài 3: Viết hàm lấy extension của một file
// Example
// getExtensionFilename("abc.mp3") // "mp3"

function getExtensionFilename(filename) {
    // viết code ở đây.
    return filename.substr(filename.lastIndexOf('.') + 1);
}

//console.log(getExtensionFilename('C:file.txt.zpt'));


// Bài 4: viết hàm lấy ra giá trị lớn nhất trong 3 số nhập vào
function findMax(a, b, c) {
    // viết code ở đây.
    // return (a>b)? (a>c)? a: c : (b>c)? b:c; // github
    return a > b ? (a > c ? a : c) : (b > c ? b : c);
}
//---------------------------------------------------------------------------------------------


// Bài 5: viết hàm kiểm tra xem một chuỗi bắt đầu bằng "Java" hay không 
function startWith(str) {
    // viết code ở đây.
    return str.indexOf('Java') === 0;
}
//---------------------------------------------------------------------------------------------


/*
  - Bài 6: Viết hàm findMaxDiff nhận tham số là một mảng integer (mảng số nguyên)
  - Trả về sự khác biệt lớn nhất giữa hai phần tử liền kề của mảng đó.
  - Nếu mảng có 1 phần tử hoặc không có phần tử nào trả về 0
  Example: 
  [1, -10, 5, 18, -9, 5] => 27
*/
function findMaxDiff(arr) {
    // viết code ở đây.
    if (arr.length < 2)
        return 0;

    var maxDiff = 0;
    for (var i = 1; i < arr.length; i++) {
        if (Math.abs(arr[i] - arr[i - 1]) > maxDiff) {
            maxDiff = Math.abs(arr[i] - arr[i - 1]);
        }
    }
    return maxDiff;
}
//---------------------------------------------------------------------------------------------


//Bài 7: Viết 1 function kiểm tra số lương kí tự 'p' và 't' của 1 chuỗi có bằng nhau hay không
//=============================
//input : string
//output : true or false
//=============================

function equal_pt(str) {
    // viết code ở đây.
    var countP = 0;
    var countT = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === 'p')
            ++countP;
        if (str[i] === 't')
            ++countT;
    }
    return countP === countT;
}
//---------------------------------------------------------------------------------------------


// Bài 8: viết hàm first trả về giá trị đầu tiên của mảng, nếu n được truyền vào thì trả về 1 mảng chứa n giá trị đầu tiên của mảng (hoặc cả mảng nếu n lớn hơn số phần tử của mảng). Nếu n <= 0 thì trả về mảng trống.
// Tham số:
//	- array: mảng gốc
//	- n: số phần tử trả về
function first(array, n) {
    // viết code ở đây.
    //   var result = [];
    //   if(typeof n === 'undefined')
    //     result.push(array[0]);


    //   for (var i = 0; i < array.length; i++) {
    //     if (i < n) {
    //       result.push(array[i]);
    //     }
    //   }
    //   return result;

    if (typeof n === 'undefined')
        return [array[0]];
    return array.splice(0, n);
}
//---------------------------------------------------------------------------------------------


// Bài 9: Viết function omitCharAt  trả về chuỗi đã được loại bỏ ký tại vị trí n bất kỳ
//Lưu ý cho chuỗi 'abcd' :
// 		element    'a'|'b'|'c'|'d'
//		index 	    0	|	1	|	2	|	3
//  n = 1 ------------------- 'acd'
//  n = 2 ------------------- 'abd'

function omitCharAt(str, n) {
    // viết code ở đây.	
    // var chars = str.split('');
    // chars.splice(n, 1);
    // return chars.join('');

    return str.replace(str[n], '');
}
//---------------------------------------------------------------------------------------------


// Bài 10: Viết hàm nhận vào 2 số a, b
// Trả về số gần 100 nhất
// nearestTo100(89, 180) // 89
function nearestTo100(a, b) {
    // viết code ở đây.
    return Math.abs(100 - a) < Math.abs(100 - b) ? a : b;
}
//---------------------------------------------------------------------------------------------


/* Bài 11: Viết hàm checkInt để kiểm tra hai số nguyên được nhập vào. 
  Nếu có 1 số âm và một số dương thì trả về true. 
  Các trường hợp khác trả về false. 
  Số 0 là số không âm cũng không dương
  Tham số:
  - number1: số nguyên thứ nhất
  - number2: số nguyên thứ hai
*/

function checkInt(number1, number2) {
    // viết code ở đây.	
    return number1 * number2 < 0 ? true : false;
}
//---------------------------------------------------------------------------------------------


/*
Bài 12: Viết một hàm JavaScript có 1 tham số n trả về tuyệt đối của hiệu só đó và 13, 
nếu số đó lớn hơn 13 trả về gấp đôi tuyệt đối của hiệu 2 số.
Example: 
n = 20 // return 14
n = 5 // return 8

*/
function difference(n) {
    // viết code ở đây.
    return n > 13 ? Math.abs(n - 13) * 2 : Math.abs(n - 13);
}
//---------------------------------------------------------------------------------------------


/* Bài 13: Viết hàm pyString để tạo chuỗi mới thêm "Py" trước chuỗi nhập vào. 
Nếu chuỗi đã cho đã bắt đầu bằng "Py" thì hãy trả về chuỗi gốc (không cần thêm).
Tham số:
- String: chuỗi nhập vào lúc đầu.
*/

function pyString(String) {
    // viết code ở đây.
    if (String.indexOf('Py') === 0)
        return String;
    return 'Py'.concat(String);
}
//---------------------------------------------------------------------------------------------


/* Bài 14: Viết hàm toNextChar dùng để thay thế mọi ký tự trong một chuỗi 
thành ký tự theo sau nó trong bảng chữ cái. Ví dụ: "Hello" chuyển thành "Ifmmp"
// Tham số:
// - String: chuỗi nhập vào ban đầu.
*/
function toNextChar(str) {
    // viết code ở đây.	
    var chars = str.split('');
    for (var i = 0; i < str.length; i++) {
        chars[i] = String.fromCharCode(str.charCodeAt(i) + 1);
    }
    return chars.join('');
}
//---------------------------------------------------------------------------------------------


// Bài 15: viết hàm tạo mới một 1 string từ n ký tự từ vị trí đầu và cuối của chuỗi cũ
// newString("1wyg5yhd45", 2) // "1w45"
function newString(str, n) {
    // viết code ở đây.
    return ''.concat(str.substr(0, n)).concat(str.substr(str.length - n));
}
//---------------------------------------------------------------------------------------------


/* Bài 16: Write a function that splits an array (first argument) into groups 
the length of size(second argument) and returns them as a two-dimensional array.
Example
 chunkArrayInGroups(["a", "b", "c", "d", "e"], 2) // [["a", "b"], ["c", "d"], ["e"]]
*/
function chunkArrayInGroups(arr, size) {
    // write code here.
    var j = 0;
    var result = [];
    for (var i = 0; i < arr.length / size; i++) {
        var group = [];
        for (var x = 0; x < size; x++) {
            if (j < arr.length) {
                group.push(arr[j]);
                ++j;
            }
        }
        result.push(group);
    }
    return result;
}

function chunkArrayInGroups2(arr, size) {
    // write code here.
    var result = [];
    var group = [];
    var j = 1;
    for (var i = 0; i < arr.length; i++) {
        if (j <= size) {
            group.push(arr[i]);
            ++j;
        }
        if (j > size || i == arr.length - 1) {
            result.push(group);
            group = [];
            j = 1
        }
    }
    return result;
}

function chunkArrayInGroups3(arr, size) {
    // write code here.
    var j = 1;
    var group = [];
    return arr.reduce(function (newArr, item) {
        if (j <= size) {
            group.push(item);
            ++j;
        }
        if (j > size || item === arr[arr.length - 1]) {
            newArr.push(group);
            group = [];
            j = 1;
        }
        return newArr;
    }, []);
}
//---------------------------------------------------------------------------------------------


/* Bài 17: Write a function return maximum possible sum of some of its k consecutive numbers 
(numbers that follow each other in order.) of a given array of positive integers
*/
function maxOfSumChain(arr, k) {
    // write code here.
    var max = 0;
    var maxTemp;
    var run = 0;

    while (run < arr.length - k) {
        maxTemp = 0;
        for (var i = 1; i <= k; i++) {
            maxTemp += arr[run + i];
        }
        if (maxTemp > max)
            max = maxTemp;
        run++;
    }
    return max;
}
//---------------------------------------------------------------------------------------------


/* Bài 18: Hãy viết một hàm để tìm một số có số lần lặp lại nhiều nhất trong một dãy các số nguyên.

Input: dãy số
Output: 1 dãy số bao gồm các số có số lần lặp lại nhiều nhất

ví dụ:
Input: [1,2,3,4,1,2,2,1]
Output: [1,2]*/

function findMostFrequent(arr) {
    // Viết code tại đây!
    var modeMap = arr.reduce(function (result, item) {
        if (item in result) result[item]++;
        else result[item] = 1;
        return result;
    }, {});

    var maxCount = 0;
    for (var prop in modeMap)
        if (modeMap[prop] > maxCount)
            maxCount = modeMap[prop];

    var result = [];
    for (var prop in modeMap)
        if (modeMap[prop] === maxCount)
            result.push(parseInt(prop));
    return result;
}

function findMostFrequent2(arr) {
    // Viết code tại đây!
    var modeMap = {};
    var maxCount = 0;
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] in modeMap) modeMap[arr[i]]++;
        else modeMap[arr[i]] = 1;

        if (modeMap[arr[i]] > maxCount) {
            maxCount = modeMap[arr[i]];
            result = [arr[i]];
        } else if (modeMap[arr[i]] === maxCount) {
            result.push(arr[i]);
        }
    }
    return result;
}
//---------------------------------------------------------------------------------------------


/*
Bài 19: Hãy viết một hàm để kiểm tra xem có thể sắp xếp các kí tự 
của 1 chuỗi String cho trước thành 1 chuỗi String cho trước khác không?

Input: 2 chuỗi String
Output: True hoặc False

ví dụ:

Input: abc cba
Output: True

Input: abx abb
Output: False
*/

function rearrangeChar(str1, str2) {
    // Viết code tại đây!
    return str1.split('').sort(function (a, b) {
        return a.charCodeAt(0) - b.charCodeAt(0);
    }).join('') === str2.split('').sort(function (a, b) {
        return a.charCodeAt(0) - b.charCodeAt(0);
    }).join('');
}
//---------------------------------------------------------------------------------------------


/*
Bài 20: Hãy viết một hàm để tìm giá trị lớn nhất có thể đạt được 
của hiệu 2 số bất kì trong dãy số

Input: là một dãy số.
Output: giá trị lớn nhất có thể đạt được của hiệu 2 số bất kì trong dãy số.

Ví dụ:

Input: [1, 2, 3, 8, 9]
Output: 8 (là hiệu của 9 và 1)

*/

function findmaxDiff(arr) {
    // Viết code tại đây
    var min = arr[0];
    var max = arr[0];

    for(var i = 1; i < arr.length; i++) {
        if(arr[i] < min) 
            min = arr[i];
        if(arr[i] > max)
            max = arr[i];
    }

    return max - min;
}