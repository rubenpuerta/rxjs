
import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next:', value ),
    error: error => console.warn('error:', error ),
    complete: () => console.info('completado')
};

const intervalo$ = new Observable( subs => {

    const intID = setInterval( () => subs.next( Math.random()), 1000);

    return () => {
        clearInterval(intID);
        console.log('Intervalo destruido');
    }
})

/**
 *  1 - Casteo múltiple
 *  2 - También es un observer
 *  3 - Next, Error y Complete
 */
const subject$ = new Subject();
const subscription = intervalo$.subscribe( subject$ );


// const subs1 = intervalo$.subscribe(rnd => console.log('subs1', rnd));
// const subs2 = intervalo$.subscribe(rnd => console.log('subs2', rnd));

 const subs1 = subject$.subscribe(observer);
 const subs2 = subject$.subscribe(observer);

 setTimeout( ()  => {
    subject$.next(10);

    subject$.complete();

    subscription.unsubscribe();
 }, 3500);