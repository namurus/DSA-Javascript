/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];

    for (const c of s) {
        switch (c) {
            case '(':
            case '[':
            case '{':
                stack.push(c);
                break;
            case ')':
                if (!stack.length || stack.pop() !== '(') return false;
                break;
            case ']':
                if (!stack.length || stack.pop() !== '[') return false;
                break;
            case '}':
                if (!stack.length || stack.pop() !== '{') return false;
                break;
        }
    }

    return stack.length === 0;
};
