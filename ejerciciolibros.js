var biblioteca = [  // Array (corchetes) de objetos (llaves).

   {
       titulo: 'Cumbres Borrascosas',
       autor: 'Emily Brontë',
       leido: true
   },
   {
       titulo: 'Orlando',
       autor: 'Virginia Woolf',
       leido: false
   },    
   {
       titulo: 'Arbol de Diana',
       autor: 'Alejandra Pizarnik',
       leido: false
   }, 
   {
    titulo: 'Poemas',
    autor: 'Sor Juana',
    leido: true
}
 ];
 
 // El libro tal, de tal autor, fue (o no) leído
 
 for (var i = 0; i < biblioteca.length; i++) {
     var libro = 'El libro '+biblioteca[i].titulo+' de '+biblioteca[i].autor
     if (biblioteca[i].leido) {
         console.log(libro +' ya fue leido');
        }else{
            console.log(libro +' aún no fue leido');    
        }
    }
    
     console.log('¿Cuál es el título del primer libro? '+biblioteca[0].titulo); //  Cumbres borrascosas
     console.log('¿Cómo se llama el autor del segundo libro? '+biblioteca[1].autor); // Virginia Wolf
     console.log('¿El tercer libro se leyó? '+biblioteca[2].leido); // False


// Mismo ejercicio pero con MAP

biblioteca.map(function (item, indice, array) {
    if (item.leido) {
        console.log(item.titulo + ' Leido');
    }else{
        console.log(item.titulo+ ' No leido');
        
    }   
})