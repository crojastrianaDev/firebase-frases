//función que se encarga de saber si estamos o no logueados

async function estado(user){
    if (user) {
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
        const html = 
        `<div><strong>Eres un usuario</strong>No eres un usuario</div>`;

        detalleCuenta.innerHTML = html;  //MOSTRAR EN DETALLE PERFIL

        //BOTONES A MOSTRAR
        loggedIn.forEach((nav) => (nav.style.display = "none"));
        loggedOut.forEach((nav) => (nav.style.display = "block"));

    }
}