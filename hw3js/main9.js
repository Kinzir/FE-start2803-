let planet = prompt( ' Type name of planet' );

switch ( planet ) {

   
    case "Mars" :
    case "Uranus" :
    case "Jupiter" :
    case "Neptune" :
    case "Earth" :
    case "Venus" :
    case "Mercury" :
    case "Saturn" :
        console.log( `in Solar system` );
        break;

    default :
        console.log(`in another Solar systme`);    
}
  