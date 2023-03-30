"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function nhapMang(n) {
    var a = [];
    for (var i = 0; i < n; i++) {
        a[i] = Number((0, readline_sync_1.question)("Moi nhap phan tu thu " + i + ": "));
    }
    return a;
}
function isSNT(n) {
    var conf = 1;
    for (var i = 2; i <= Math.ceil(n / 2); i++) {
        if (n % i == 0) {
            conf = 0;
            break;
        }
    }
    if (conf == 1)
        return true;
    else
        return false;
}
function maxSNT(a) {
    var max = 0;
    for (var i = 0; i < a.length; i++) {
        if (isSNT(a[i]) == true && a[i] > max)
            max = a[i];
    }
    return max;
}
function main() {
    var n = Number((0, readline_sync_1.question)("Moi nhap so phan tu cua mang: "));
    var a = nhapMang(n);
    var max = maxSNT(a);
    console.log(max);
}
main();
