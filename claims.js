const admin = require('firebase-admin')
const serviceAccount = require('./service-account.json')
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
admin.auth().setCustomUserClaims(process.argv[2], {
  role: "admin",
}).then(() => {
  console.log("SUCCESS\n");
}).catch(() => {
  console.log("ERROR\n");
});
