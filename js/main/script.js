/**********Materialize**********/
$(document).ready(function() {
	$(".button-collapse").sideNav({closeOnClick: true, draggable: false});

});

/**********LOG OUT**********/
function logOut() {
	firebase.auth().signOut().then(function() {
		//SignOut bem-sucedido
	}, function(error) {
		//Deu ruim
	});
}