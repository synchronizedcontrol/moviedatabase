const admin = require('./node_modules/firebase-admin');
const serviceAccount = require("./settings/service_account.json");
const data = require("./settings//imdb_list.json");
const collectionKey = "movies"; //name of the collection


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://moviedatabase-be298.firebaseio.com"
});

console.warn("Starting node server");

const firestore = admin.firestore();
const settings = {timestampsInSnapshots: true};

firestore.settings(settings);

if (data && (typeof data === "object")) {
  data.forEach((value, id) => {
    firestore
      .collection(collectionKey)
      .doc()
      .set(value)
      .then((res) => {
          console.log("Document " + id + " successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  });
}