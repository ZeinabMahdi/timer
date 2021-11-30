const args = process.argv;
let timePassed = args.slice(2).sort();
timePassed = timePassed.filter(args => args > 0).filter(args => !isNaN(args));


const setup = () => {
for (let i of timePassed){
  if (timePassed.length <= 0) {
    break;
  } else {
  setTimeout(() => {
    process.stdout.write('beep at this many seconds: ' + i);
}, i * 1000);
  }
} 
};

setup();


