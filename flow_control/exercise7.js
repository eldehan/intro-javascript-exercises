function longTenToCaps(text) {
    if (text.length > 10) {
        return text.toUpperCase();
    } else {
        return text;
    }
}

console.log(longTenToCaps('this is a long string'));
console.log(longTenToCaps('short'));