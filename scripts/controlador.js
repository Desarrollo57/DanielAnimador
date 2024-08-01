const form = document.getElementById('formularioUsuario');
const radioemail = document.getElementById('radio-email');
const radiotelefono = document.getElementById('radio-telefono');
const whatsappRadio = document.getElementById('radio-whatsapp');
const enviarFormulario =() =>{
const nombreApellido = document.getElementById("nombreapellido").value; 
const franjaHoraria = document.getElementById("FranjaHoraria").value; 
const mensajeCuadro = document.getElementById ("mensaje").value;
}

form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (whatsappRadio.checked) {
        const phoneNumber = '573007165926';
        const nombreApellido = document.getElementById("nombreapellido").value;
        const franjaHoraria = document.getElementById("FranjaHoraria").value; 
        const mensajeCuadro = document.getElementById ("mensaje").value;
        const celular = document.getElementById ("telefono").value;
        const correo = document.getElementById ("correoelectronico").value;
        window.location.href = `https://wa.me/${phoneNumber}?text=Hola mi nombre es: ${nombreApellido}, mi número de WhatsApp es: ${celular}, me comunico por el siguiente motivo: ${mensajeCuadro}. Pueden contactarme en horas de la ${franjaHoraria}. Gracias por su atención.`;
    }
    else if (radioemail.checked) {
        const phoneNumber = '573007165926';
        const nombreApellido = document.getElementById("nombreapellido").value;
        const franjaHoraria = document.getElementById("FranjaHoraria").value; 
        const mensajeCuadro = document.getElementById ("mensaje").value;
        const celular = document.getElementById ("telefono").value;
        const correo = document.getElementById ("correoelectronico").value;
        window.location.href = `https://wa.me/${phoneNumber}?text=Hola mi nombre es: ${nombreApellido}, mi número de telefono es: ${celular}, me comunico por el siguiente motivo: ${mensajeCuadro}. Pueden contactarme en horas de la ${franjaHoraria}, mi correo es: ${correo}. Gracias por su atención.`;
    }
    else if (radiotelefono.checked){
        const phoneNumber='573007165926';
        const nombreApellido=document.getElementById("nombreapellido").value;
        const franjaHoraria=document.getElementById("FranjaHoraria").value; 
        const mensajeCuadro=document.getElementById ("mensaje").value;
        const celular=document.getElementById ("telefono").value;
        const correo=document.getElementById ("correoelectronico").value;
        window.location.href = `https://wa.me/${phoneNumber}?text=Hola mi nombre es: ${nombreApellido}, mi número de telefono es: ${celular}, me comunico por el siguiente motivo: ${mensajeCuadro}. Pueden contactarme en horas de la ${franjaHoraria}. Gracias por su atención.`; 
    }
});