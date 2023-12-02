import {sample1, sample2 , sample3} from './utils'

console.log('sample1');
sample1();
console.log('sample2');
sample2();
console.log('sample3');
sample3();

document.querySelector('#app').innerHTML = `
  <h2>
    check the console
  </h2>
`

