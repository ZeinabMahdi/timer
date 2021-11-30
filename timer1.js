const args = process.argv;
let timePassed = args.slice(2).sort();
timePassed = timePassed.filter(args => args > 0);
timePassed = timePassed.filter(args = Number);
console.log(timePassed);

// const setup = () => {
// for (let i of timePassed){
//   if (timePassed.length <= 0) {
//     break;
//   } else {
//   setTimeout(() => {
//     process.stdout.write('beep' + i);
// }, i * 1000);
//   }
// } 
// };

// setup();


