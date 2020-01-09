import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";
const texto = document.createElement("div");

texto.innerHTML = `
Lorem fistrum está la cosa muy malar pupita ese hombree ese pedazo de jarl llevame al sircoo. Quietooor va usté muy cargadoo hasta luego Lucas a wan ese pedazo de torpedo amatomaa ese que llega pupita. Me cago en tus muelas torpedo ese pedazo de se calle ustée amatomaa va usté muy cargadoo torpedo diodeno sexuarl condemor. Qué dise usteer me cago en tus muelas te va a hasé pupitaa por la gloria de mi madre a peich caballo blanco caballo negroorl me cago en tus muelas ese que llega al ataquerl. De la pradera a peich está la cosa muy malar a peich tiene musho peligro sexuarl pecador benemeritaar no te digo trigo por no llamarte Rodrigor.
<br/><br/>
Pecador condemor al ataquerl por la gloria de mi madre jarl qué dise usteer. Caballo blanco caballo negroorl mamaar está la cosa muy malar torpedo por la gloria de mi madre al ataquerl. Papaar papaar ese hombree la caidita ese que llega diodenoo diodenoo. Ahorarr por la gloria de mi madre a gramenawer está la cosa muy malar sexuarl no te digo trigo por no llamarte Rodrigor. Te va a hasé pupitaa te va a hasé pupitaa amatomaa de la pradera llevame al sircoo.
<br/><br/>
Diodeno fistro hasta luego Lucas me cago en tus muelas condemor tiene musho peligro caballo blanco caballo negroorl apetecan ese hombree a peich ahorarr. A gramenawer apetecan quietooor condemor caballo blanco caballo negroorl me cago en tus muelas diodeno. Tiene musho peligro mamaar me cago en tus muelas me cago en tus muelas pupita no puedor. Te voy a borrar el cerito se calle ustée caballo blanco caballo negroorl a peich te va a hasé pupitaa qué dise usteer quietooor apetecan. Apetecan torpedo por la gloria de mi madre está la cosa muy malar no puedor está la cosa muy malar ahorarr caballo blanco caballo negroorl me cago en tus muelas. Apetecan ese hombree no puedor ese pedazo de benemeritaar.
<br/><br/>
Lorem fistrum está la cosa muy malar pupita ese hombree ese pedazo de jarl llevame al sircoo. Quietooor va usté muy cargadoo hasta luego Lucas a wan ese pedazo de torpedo amatomaa ese que llega pupita. Me cago en tus muelas torpedo ese pedazo de se calle ustée amatomaa va usté muy cargadoo torpedo diodeno sexuarl condemor. Qué dise usteer me cago en tus muelas te va a hasé pupitaa por la gloria de mi madre a peich caballo blanco caballo negroorl me cago en tus muelas ese que llega al ataquerl. De la pradera a peich está la cosa muy malar a peich tiene musho peligro sexuarl pecador benemeritaar no te digo trigo por no llamarte Rodrigor.
<br/><br/>
Pecador condemor al ataquerl por la gloria de mi madre jarl qué dise usteer. Caballo blanco caballo negroorl mamaar está la cosa muy malar torpedo por la gloria de mi madre al ataquerl. Papaar papaar ese hombree la caidita ese que llega diodenoo diodenoo. Ahorarr por la gloria de mi madre a gramenawer está la cosa muy malar sexuarl no te digo trigo por no llamarte Rodrigor. Te va a hasé pupitaa te va a hasé pupitaa amatomaa de la pradera llevame al sircoo.
<br/><br/>
Diodeno fistro hasta luego Lucas me cago en tus muelas condemor tiene musho peligro caballo blanco caballo negroorl apetecan ese hombree a peich ahorarr. A gramenawer apetecan quietooor condemor caballo blanco caballo negroorl me cago en tus muelas diodeno. Tiene musho peligro mamaar me cago en tus muelas me cago en tus muelas pupita no puedor. Te voy a borrar el cerito se calle ustée caballo blanco caballo negroorl a peich te va a hasé pupitaa qué dise usteer quietooor apetecan. Apetecan torpedo por la gloria de mi madre está la cosa muy malar no puedor está la cosa muy malar ahorarr caballo blanco caballo negroorl me cago en tus muelas. Apetecan ese hombree no puedor ese pedazo de benemeritaar.
<br/><br/>
Lorem fistrum está la cosa muy malar pupita ese hombree ese pedazo de jarl llevame al sircoo. Quietooor va usté muy cargadoo hasta luego Lucas a wan ese pedazo de torpedo amatomaa ese que llega pupita. Me cago en tus muelas torpedo ese pedazo de se calle ustée amatomaa va usté muy cargadoo torpedo diodeno sexuarl condemor. Qué dise usteer me cago en tus muelas te va a hasé pupitaa por la gloria de mi madre a peich caballo blanco caballo negroorl me cago en tus muelas ese que llega al ataquerl. De la pradera a peich está la cosa muy malar a peich tiene musho peligro sexuarl pecador benemeritaar no te digo trigo por no llamarte Rodrigor.
<br/><br/>
Pecador condemor al ataquerl por la gloria de mi madre jarl qué dise usteer. Caballo blanco caballo negroorl mamaar está la cosa muy malar torpedo por la gloria de mi madre al ataquerl. Papaar papaar ese hombree la caidita ese que llega diodenoo diodenoo. Ahorarr por la gloria de mi madre a gramenawer está la cosa muy malar sexuarl no te digo trigo por no llamarte Rodrigor. Te va a hasé pupitaa te va a hasé pupitaa amatomaa de la pradera llevame al sircoo.
<br/><br/>
Diodeno fistro hasta luego Lucas me cago en tus muelas condemor tiene musho peligro caballo blanco caballo negroorl apetecan ese hombree a peich ahorarr. A gramenawer apetecan quietooor condemor caballo blanco caballo negroorl me cago en tus muelas diodeno. Tiene musho peligro mamaar me cago en tus muelas me cago en tus muelas pupita no puedor. Te voy a borrar el cerito se calle ustée caballo blanco caballo negroorl a peich te va a hasé pupitaa qué dise usteer quietooor apetecan. Apetecan torpedo por la gloria de mi madre está la cosa muy malar no puedor está la cosa muy malar ahorarr caballo blanco caballo negroorl me cago en tus muelas. Apetecan ese hombree no puedor ese pedazo de benemeritaar.
<br/><br/>
Lorem fistrum está la cosa muy malar pupita ese hombree ese pedazo de jarl llevame al sircoo. Quietooor va usté muy cargadoo hasta luego Lucas a wan ese pedazo de torpedo amatomaa ese que llega pupita. Me cago en tus muelas torpedo ese pedazo de se calle ustée amatomaa va usté muy cargadoo torpedo diodeno sexuarl condemor. Qué dise usteer me cago en tus muelas te va a hasé pupitaa por la gloria de mi madre a peich caballo blanco caballo negroorl me cago en tus muelas ese que llega al ataquerl. De la pradera a peich está la cosa muy malar a peich tiene musho peligro sexuarl pecador benemeritaar no te digo trigo por no llamarte Rodrigor.
<br/><br/>
Pecador condemor al ataquerl por la gloria de mi madre jarl qué dise usteer. Caballo blanco caballo negroorl mamaar está la cosa muy malar torpedo por la gloria de mi madre al ataquerl. Papaar papaar ese hombree la caidita ese que llega diodenoo diodenoo. Ahorarr por la gloria de mi madre a gramenawer está la cosa muy malar sexuarl no te digo trigo por no llamarte Rodrigor. Te va a hasé pupitaa te va a hasé pupitaa amatomaa de la pradera llevame al sircoo.
<br/><br/>
Diodeno fistro hasta luego Lucas me cago en tus muelas condemor tiene musho peligro caballo blanco caballo negroorl apetecan ese hombree a peich ahorarr. A gramenawer apetecan quietooor condemor caballo blanco caballo negroorl me cago en tus muelas diodeno. Tiene musho peligro mamaar me cago en tus muelas me cago en tus muelas pupita no puedor. Te voy a borrar el cerito se calle ustée caballo blanco caballo negroorl a peich te va a hasé pupitaa qué dise usteer quietooor apetecan. Apetecan torpedo por la gloria de mi madre está la cosa muy malar no puedor está la cosa muy malar ahorarr caballo blanco caballo negroorl me cago en tus muelas. Apetecan ese hombree no puedor ese pedazo de benemeritaar.
<br/><br/>
Lorem fistrum está la cosa muy malar pupita ese hombree ese pedazo de jarl llevame al sircoo. Quietooor va usté muy cargadoo hasta luego Lucas a wan ese pedazo de torpedo amatomaa ese que llega pupita. Me cago en tus muelas torpedo ese pedazo de se calle ustée amatomaa va usté muy cargadoo torpedo diodeno sexuarl condemor. Qué dise usteer me cago en tus muelas te va a hasé pupitaa por la gloria de mi madre a peich caballo blanco caballo negroorl me cago en tus muelas ese que llega al ataquerl. De la pradera a peich está la cosa muy malar a peich tiene musho peligro sexuarl pecador benemeritaar no te digo trigo por no llamarte Rodrigor.
<br/><br/>
`;

const body = document.querySelector("body");
body.append(texto);

const progressBar = document.createElement("div");
progressBar.setAttribute("class", "progress-bar");
body.append(progressBar);

// Función que haga el cálculo
const porcentajeScroll = e => {
  const { scrollTop, scrollHeight, clientHeight } = e.target.documentElement;
  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

// Streams
const scroll$ = fromEvent<Event>(document, "scroll");

const progress$ = scroll$.pipe(map(porcentajeScroll), tap(console.log));

progress$.subscribe(porcentaje => {
  progressBar.style.width = `${porcentaje}%`;
});
