
import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next:', value ),
    error: error => console.warn('error:', error ),
    complete: () => console.info('completado')
};

const invervalo$ = new Observable( subscriber => {

    // Crear un contador... 1,2,3,4,5......
    let counter = 0;

    const interval = setInterval( () => {
        // Cada segundo
        subscriber.next(counter++);
        console.log(counter)
    }, 1000);

    setTimeout(() => {
        subscriber.complete();
    }, 2500 );
    
    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido');
    }

})

const subscription1 = invervalo$.subscribe(observer);
const subscription3 = invervalo$.subscribe(observer);
const subscription2 = invervalo$.subscribe(observer);

subscription1.add(subscription2)
            .add(subscription3)

setTimeout(() => {
    subscription1.unsubscribe()

    console.log('Completado timeout')
}, 6000)