'use strict';

const lines = 5;
let result = '';
let star = 1;

for (let i = 0; i < 11; i++) {

    for (let j = 0; j < lines - i; j++) {
        result = result + ' ';
    }

    for (let k = 1; k <= star; k++) {
        result = result + '*';
    }

    result = result + '\n';
    star += 2;
    if (star > 11) {
        break;
    }
}