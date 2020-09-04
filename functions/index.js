const functions = require('firebase-functions');
const admin = require('firebase-admin'); //traemos firebase admin
const { user } = require('firebase-functions/lib/providers/auth');
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
  exports.helloWorld = functions.https.onRequest((request, response) => {
 functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!"); 
});

//función para traer algo
exports.addAdminRole = functions.https.onCall((data, context) => {
    if (!context.auth.token.admin) {//si no es admin

       return {erro: "Solo los administradores pueden agregar otros"}
    }
    //como es admin, puede crear otrocon su email
    return admin.auth().getUserByEmail(data.email).then(user =>{
        //lo asignamos admin
        return admin.auth().setCustomUserClaims(user.uid, {
            admin: true
        });
    }).then(() => {
        return {message: `Success ${data.email} este usuario es admin`}
    })
    .catch(err => {
        return err;
    })
})


