document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    // Obtener los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    const password = document.getElementById("password").value;

    // Crear un objeto con los datos del formulario
    const datos = {
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento: fechaNacimiento,
        password: password
    };

    // Enviar los datos mediante POST usando fetch
    fetch("URL_DE_TU_BACKEND", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Éxito:", data);
        alert("Formulario enviado correctamente");
    })
    .catch((error) => {
        console.error("Error:", error);
        alert("Hubo un error al enviar el formulario");
    });
});
