// 125. Valid Palindrome
// https://leetcode.com/problems/valid-palindrome/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let regex = /^[a-zA-Z0-9]$/; 
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        while (left < right && !regex.test(s[left])) {
            left++;
        }

        while (left < right && !regex.test(s[right])) {
            right--;
        }

        if (left >= right) {
            break; 
        }

        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }
    return true;
};

var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;    
};