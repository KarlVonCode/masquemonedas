let quotes =
[
  'Amores son acciones y no buenas razones. -La Abuela',
'De lejos se ven mejor los toros que en la barrera. -Jose Vicente "Chente" Berardinelli',
'Es mejor llegar a tiempo que ser invitado. -El Abuelo',
'Mientras más se vive más se ve. -El Abuelo',
'La peor diligencia es la que no se hace. -El Abuelo',
'Primero se riega el bajo y luego la loma. -El administrador, Luis',
'Clavo pasado, punta doblada. -El Abuelo',
'Lo que viene derecho no trae arrugas. -El Abuelo',
'No acostumbrarse a nada, para que nada te haga falta. -El bisabuelo, Guillermo',
'El agua que no se ve es la del coco. -La Abuela',
'La sangre llama. -La Abuela',
'Por el desayuno se sabe cómo es el almuerzo. -La Abuela',
'Una cosa trae la otra. -La Abuela',
'Para un madrugador, otro que no duerma. -El Abuelo',
'No se equivoque con la gente, el que mas manso parece, resulta ser el mas loco. -La Abuela',
'El negocio no tiene hermanos. - La Abuela',
'Sol y Brisa. -La Abuela',
'El amor no alimenta pero sostiene. -La Abuela',
'Los negocios son de pluma. -La Abuela',
'Hasta que la guaca tumbe. -La Abuela',
'Mejor un perro vivo, que un león muerto. -Cirilo Hernández en Facebook',
'Cuando a mí me hacen mal, a mí me gusta hacerles bien, cómo para enseñarles. -La Abuela',
'Besando hebillas. -La Abuela',
'Suenan los tiros como maíz tostado. -La Abuela',
'Cada vez que puedas abrazar y besar a tu madre hazlo, porque no sabes si puede ser la última vez. -La Madre',
'Quién no tiene perro, montea con gato. -La Gente',
'El que se prepara es Rey. -La Gente',
'Sembrando da. -La Gente',
'Perder para conocer, no es perder. -La Abuela',
'Ni chicha ni masamorra. -La Abuela',
'La ceniza no la compran, pero el carbón sí. -La paisana peleadora', /// la ceniza sí tiene valor.
'Es de ricos jartarse sin mover una paja. - El cuerdo, Vladimir',
'Nadie se muere en la víspera. -La tía segunda, Myriam',
'A veces se cree estar haciendo una gracia y se termina haciendo una morisqueta. -La Gente',
'Para donde el diablo dejó la chancleta. Para allá vamos. -La Gente',
'Ya es hora de meter los pies debajo de la mesa. -La Gente',
'Si no vas a hacer un favor, tampoco hagas un mal. -La Abuela',
'Hay que saber por dónde le baja el agua al molino. -La Gente',
'Evite quedarse chiflando iguana. -La Gente',
'A veces música paga toca mal son. -La María',
'La cara del santo es la que hace el milagro. -La María',
'Todo lo que es tuerca se afloja. -El mecánico, Juan Carlos',
'Cuando dios pone tranca, por algo es. -La tía segunda, Nina',
'De cualquier culo sale sangre. -La abuela de Alex, y Stef',
'Evite la llevada de la perra. -La Gente',
'Así te hagan como chivo, cachos no les saldrán. -La Abuela',
'¿Convendrá observar como gallina mirando sal? -Pregunto',
'Una cara cómo de burro embarcao en canoa. -La Gente',
'El pan sabroso es caliente. -El amigo, Alex Alejandro',
'Una cara cómo de santo alumbrao con mechón. -La Gente',
'Entre más se pule una vaina, cómo que más se daña.-La Gente',
'Se juntó el hambre con la comida. -La Gente',
'Está en el sonajero. -La Gente',
'Si dios no le da hijos, el diablo le da sobrinos. -La Abuela',
'Entre más vacas, menos leche. -La abogada, Rosa Mateus',
'Los noveleros son los ojos. - La formadora, Carmen Sofía',
'Si tú te ganas doscientos (200), ¿Cómo te vas a gastar trescientos (300)? -La Gente',
'Quien siembra en tierra ajena pierde hasta la semilla. -La Abuela',
'Quien tiene el palo, da con él. -La Abuela',
'Siembra abrojo, pero no esperes cosechar manzanas. -Pienso',
'De lo incierto a lo dudoso. -La Tía',
'Toque la puerta, porque si no la toca, no se la abren. -La abuela de Orfidio "Chinaco" Soto',
'Por el equipaje se conoce al pasajero. -La Abuela',
'A quien dios no le manda hijos, el diablo le manda sobrinos. -La Abuela',
'Luego de frito el huevo se sabe cuanto aceite quedó. -La Abuela',
'Arrieros somos y por el camino andamos. -La Abuela',
'Que tu mano izquierda no sepa lo que hace tu mano derecha. -El Abuelo'
];


function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
