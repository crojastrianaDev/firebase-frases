//función que se encarga de saber si estamos o no logueados

async function estado(user){
    if (user) {
        //si es admin
        if (user.admin) {
            crearAdmin.forEach(el => el.style.display = "block");
        }
        //si esta logueado  llamamos a cuenra user
        //console.log("Tenemos user");    //vamos a la coleción users con el id y traemos el dato
        const userCollection = (await db. collection('users').doc(user.uid).get()).data();

        const html = 
        `<div><strong>Eres un usuario: <br> </strong>${user.email}</div>
        <div><strong>Nombre: <br> </strong>${userCollection.bio}</div>`;

        detalleCuenta.innerHTML = html;  //MOSTRAR EN DETALLE PERFIL

        //BOTONES A MOSTRAR
        loggedIn.forEach((nav) => (nav.style.display = "block"));
        loggedOut.forEach((nav) => (nav.style.display = "none"));

    }else{

        frasesUl.innerHTML += "<h3 class='center-align'>Por favor debes loguearte</h3>";  //MOSTRAR EN DETALLE PERFIL

        //BOTONES A MOSTRAR
        loggedIn.forEach((nav) => (nav.style.display = "none"));
        loggedOut.forEach((nav) => (nav.style.display = "block"));
        crearAdmin.forEach(el => (el.style.display = "none"));

    }
}

//función para ver frases

async function setupFrases(frases){

    let html = "";

    frases.forEach((doc) => { //vamos a mostrar las frases
        const frase = doc.data();
        const li = `
        <li>
            <div class="collapsible-header grey lighten-4">${frase.autor}</div>
            <div class="collapsible-body white lighten-4">${frase.mensaje}</div>
        </li>`;

        html += li;
    });

    frasesUl.innerHTML = html;

}