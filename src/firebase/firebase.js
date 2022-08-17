import * as firebase from 'firebase';



//const firebaseConfig = {
  //apiKey: "AIzaSyBeGJN2qfJtcvix1tQP_WJJVJLoZIqb4ho",
  //authDomain: "expensify-c219f.firebaseapp.com",
  //projectId: "expensify-c219f",
 // storageBucket: "expensify-c219f.appspot.com",
 // messagingSenderId: "992081275621",
 // appId: "1:992081275621:web:87ccd7bdf68feb0c45820c",
 // measurementId: "G-3DDJNT78NR"
//};

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN ,
  databaseURL: process.env.FIREBASE_DATABASE_URL ,
  projectId: process.env.FIREBASE_PROJECT_ID ,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET ,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID ,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASURMENT_ID
};


firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// //child_removed -> print on the screen the ID and data of removed objec

//  database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
//  });
 

//  // child_changed -> fires if one of our child elements chanched

//  database.ref('expenses').on('child_changed', (snapshot) => {
//    console.log(snapshot.key, snapshot.val());
//  });

//  // child_added -> .............. it is not called only for new add elements but also called adn for existing ones
  
//  database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });




// // parsing the data 

// // database.ref('expenses')
// //  .once('value')
// //  .then((snapshot) => {
// //   const expenses = [];

// //   snapshot.forEach((childSnapshot) => { 
// //     expenses.push({
// //       id: childSnapshot.key,
// //       ...childSnapshot.val()
// //     })
// //   });

//   //console.log(expenses);

// // });


// // EXERSISE--- setup subscribtion to 'expenses' ,get in an array and  printing it on the screen ->whatching for changes!

// // database.ref('expenses').on('value', (snapshot) => {
// //   const expenses = [];

// //   snapshot.forEach((childSnapshot) => { 
// //     expenses.push({
// //       id: childSnapshot.key,
// //       ...childSnapshot.val()
// //     })
// //   });

// //   console.log(expenses);

// //});




// //EXERSISE---adding new data in firebase via .push()

// //Setup "expenses" with three items (description, note, amount, createdAt)

// database.ref('expenses').push({
//   description: 'Bills',
//   note: 'Electicity',
//   amount: 1200 ,
//   createdAt: 4235689
// });

// // database.ref('expenses').push({
// //   description: 'Shopping',
// //   note: 'Food',
// //   amount: 11250 ,
// //   createdAt: 45431229
// // });

// // database.ref('expenses').push({
// //   description: 'Other',
// //   note: 'Atractions',
// //   amount: 11321,
// //   createdAt: 4244535689
// // });



// // EXERSISE---
// // setup data sub -> Andrew is a Software Developer at Amazon.
// // Change the data and make shure it reprints

// // database.ref().on('value', (snapshot) => {
// //   const val = snapshot.val();
// //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// // });





// // Fetching data 

// //the code fetching data multiple times

// //  const onValueChange = database.ref().on('value', (snapshot) => {
// //   console.log(snapshot.val());
// // });


//  //subscribe for changes

// // setTimeout(() => {
// //   database.ref('age').set(29);
// // }, 3500);

// // //unsubscribe for changes

// // setTimeout(() => {
// //   database.ref().off(onValueChange);
// // }, 7000);

// // subscribe for changes

// // setTimeout(() => {
// //   database.ref('age').set(31);
// // }, 10500);

// // the code fetching data running just once

// // database.ref()
// // .once('value')
// // .then((snapshot) => {
// //   const val = snapshot.val();
// //   console.log(val);
// //   })
// //   .catch((e) => {
// //     console.log('Error fetching data', e);
// //   });

// // database.ref().set({ 
// //   name: 'Veselin Karayanev',
// //   age: 38,
// //   stressLevel: 6,
// //   job: {
// //     title: 'Sofware developer',
// //     company: 'Google'
// //   },
// //   location: {
// //   city: 'Worcester',
// //   country: 'United Kingdom'
// //   } 
// // }).then(() => {
// //   console.log('Data is saved!');
// // }).catch((e) => {
// //   console.log('This is failed', e);
// // });

// // database.ref().update({
// //   stressLevel: 9,
// //   'job/company': 'Amazon',
// //   'location/city': 'Worceter'
// //   // job: 'Manager',
// //   // 'location/city': 'Birmingham'
// // });
 

// //  database.ref('isSingle')
// //  .remove()
// //  .then(() => {
// //   console.log('Remove succeeded.');
// //  }).catch((e) => {
// //   console.log('Remove failed: Cannot be removed');
// //  });
   

//  // remove data via set()method 

//  // database.ref('isSingle').set(null));



