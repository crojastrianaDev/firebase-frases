//autenticación con correo

//escuchamos el botón registro con función anonima asincrona
registroForm.addEventListener("submit", async (event) => {
    //prevenimos que se recargue
    event.preventDefault();
    //traemos info del modal
    const modal = document.getElementById("modal-registrar");

    try {
        
        //obtenemos info del modal
        const { email, pass }  = getRegistroInfo();
        console.log(email , pass);
        //llamamos la función
        await registrar(email, pass);//creara el usuario y agregara en la bio con el id del user
        console.log("Usuario creado")

    } catch (error) {
        alert("Error en el registro" + error.message);
        
    }
    finally{
        M.Modal.getInstance(modal).close(); //cerramos el modal
        registroForm.reset();//receteamos el formulario
    }

});

//retornara el objeto con los valores del modal registro
function getRegistroInfo() {
    //debugger; 
    //traemos el valor de los input
    const email = registroForm["email-registro"].value;
    const pass = registroForm["pass-registro"].value;

    return { email, pass };
}

//función que crea el usuario
async function registrar(email, pass) {
    //pasamos las credenciañes a firebase 
    const creds = await auth.createUserWithEmailAndPassword(email, pass);

    //Si no existe el user lo crearea en la colleciton users, para guardar la bio
    return db.collection("users").doc(creds.user.uid).set({
        bio: registroForm["signup-bio"].value
    });
}


//Login
loginForm.addEventListener("submit", async event => {
    event.preventDefault();
    const modal = document.getElementById("modal-login");

    try {
        const { email, pass } = getLoginInfo();
        console.log(email , pass);
        await login(email, pass);
        console.log("Logueado");
    } catch (error) {
        alert("Imposible hacer el login, verifica tu registro y credenciales" + error.message);
    } finally {
        M.Modal.getInstance(modal).close();
        loginForm.reset();
    }
});

//retornara el objeto con los valores del modal login
function getLoginInfo() {
    //debugger; 
    //traemos el valor de los input login
    const email = loginForm["email-login"].value;
    const pass = loginForm["pass-login"].value;

    return { email, pass };
}
//función del login
async function login(email, pass) {
    //le enviamos a firebase losdatos
    return await auth.signInWithEmailAndPassword(email, pass);
}

//salir
async function salirYa() {
    return await auth.signOut();
}

//cerraramos sección en el click del salir
salir.addEventListener("click", async (event) => {
    event.preventDefault();
    await salirYa();
    alert("Hasta luego");
});

//Estado de la autenticación
auth.onAuthStateChanged(async (user) => {
    //si existe esta login
    if (user) {

        //crear admin
        const idTokenResult = await user.getIdTokenResult();
        user.admin = idTokenResult.claims.admin;//si es user para mostrar el crear admin
    
        //renderizamos las frases   //el snapshot esta trabajando en tiempo real con firebase
        db.collection("frases").onSnapshot( (snapshot) =>{
            setupFrases(snapshot.docs);//enviamos docuemtos frases firebase
            estado(user); //enviamos user para la bio

        }, err =>{} ); //no hacemos nada cuando tenemos el erro de no tener permisos por no estar In
        console.log(1);
         //si esta logueado enviuamos el user a el index estado
    }else{
        console.log(0);
        setupFrases([]);//si no esta logueado no mostrar frases
        estado(user); 
    }
});