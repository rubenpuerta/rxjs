import { interval, timer, asyncScheduler } from "rxjs"



// setTimeout(()=>{},3000);
// setInterval(()=>{},3000);

const saludar = () => console.log('Hola Mundo');
const saludar2 = ({a, b}) => console.log(`Hola ${a} ${b}`);

// asyncScheduler.schedule( saludar, 2000);
//  asyncScheduler.schedule( saludar2, 2000, {a: 'Ruben', b: 'Puerta'});

const subs = asyncScheduler.schedule( function(state) {

    console.log('state', state );

    this.schedule( ++state, 1000);

}, 3000, 0);


// setTimeout(() => {
//     subs.unsubscribe();
// }, 6000)

asyncScheduler.schedule( ()=> subs.unsubscribe(), 6000);