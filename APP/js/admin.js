//El administrador de la base de datos
adminForm.addEventListener('submit', event => {
    event.preventDefault();

    const email = document.querySelector('#admin-email').value;
        //llamamos func de firebase config
    const addminRole = func.httpsCallable("addAdminRole");
    //la promesa
    addminRole({email})
    .then( result => {
        console.log(result);
        alert("Solo los administradores pueden agregar nuevos admin")
    })
    .catch(console.log)
});