import './index.css';
import numeral from 'numeral';

const awesomeMoney = numeral(1000).format('$0,0.00');
console.log(`I want to earn ${awesomeMoney} in a day`); // eslint-disable-line no-console