// vamos a ver escribir frases
formFrase.addEventListener('submit', async (event) => {
    event.preventDefault();
    await db.collection("frases").add({
        autor: formFrase['autor'].value,
        mensaje: formFrase['mensaje'].value
    });

    const modal = document.querySelector("#crearFrase");
    M.Modal.getInstance(modal).close();
    formFrase.reset();
});