/**
* @sobrecargaFunciones una simple funcion al enviar un mensaje
*
* @author roy surjano
* @version 0.0.1
*/

/**
* Muestra un mensaje de texto
* @param {msj} el mensaje a enviar
* @param {obj} un objeto conteniendo
* @returns {integer} descripcion retorno
*/

function enviarMensaje(msj, obj){
	//si estan presentes los dos
	if (arguments.length == 2)
	{

		//envia el parametro {msj} al objeto
		obj.manejarMensaje(msj)
		console.log(msj + ' PARAMETRO -> 01' );
		console.log(obj + ' PARAMETRO -> 02' );
	}
	else
		//sino se asume que solo hay mensaje
	{
		console.log(msj + ' PARAMETRO -> 01' );
		alert(msj)
	}
}

var miObj = {

	manejarMensaje : function(valor){
		var msj = valor;
	}
};

//lo llamamos, puedes cambiar este valor
// enviarMensaje('Hola funcion enviarMensaje' );
enviarMensaje('Hola funcion enviarMensaje', miObj );


/**
* @mensajeSinArgumento funcion donde no recibe parametros y muestra un error
*
* @author roy surjano
* @version 0.0.1
*/


function mostrarError( msg ){
	//se asegura que el parametro no sea undefined
	if (typeof msg == 'undefined') {
		//si es asi muestra ese error
		msg = 'Un error ha ocurrido'
	};
	//muestra el parametro
	console.log(msg);
}

//ejecutamos el mensaje, intercambia para ver resultados
// mostrarError('Hola funcion mostrarError, no estas definido');
console.log(	mostrarError()	)