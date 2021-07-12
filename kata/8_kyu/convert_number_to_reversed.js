/* 

8 kyu
Javascript
Convert number to reversed array of digits
by: emporio

Given a random non-negative number, you have to return
the digits of this number within an array in reverse order.
*/

function digitize(n) {
    n2 = [];
    let nn = Array.from(n.toString()).map(Number);
    for (let i = 0; i < nn.length; i++) {
    n2.unshift(nn[i]);
    }
    return n2;
}
