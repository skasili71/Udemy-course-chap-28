// Import stylesheets
import './style.css';

// Write Javascript code!
// const hasDriversLicense = true;//A
// const hasGoodVision = true;//B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// const isTired = false;
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired ) {
//   console.log('Sarah is able to drive!')
// } else {
//   console.log('Someone else should drive ...')
// }
const scoreDolphins = ( 95 +85 + 100) / 3;
const scoreKoalas = ( 80 +95 + 100) / 3;

console.log(scoreDolphins, scoreKoalas );
if (scoreDolphins > scoreKoalas  && scoreDolphins >= 100) {
  console.log('Dolphins win the trophy')

} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100){
  console.log('Koalas wins the trophy')
} else if (scoreDolphins === scoreKoalas && scoreDolphins >=100 ) {
  console.log('Both win the tropy')
} else if (scoreDolphins <100 && scoreDolphins <100) {
  console.log('No One wins the trophy')
}

