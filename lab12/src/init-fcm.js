import * as firebase from "firebase/app";
import "firebase/messaging";

firebase.initializeApp({
  apiKey: "AIzaSyActv-KAaqDAqmBzLmJwLjVR8NbHfgSA-w",
  authDomain: "react-sec02-088.firebaseapp.com",
  projectId: "react-sec02-088",
  storageBucket: "react-sec02-088.appspot.com",
  messagingSenderId: "511775363833",
  appId: "1:511775363833:web:a6aa2d9320546e79588828"
});

let messaging = firebase.messaging();

messaging.onMessage(function (payload) {
  try {  //try???
    console.log('Message received. ', payload);

    const noteTitle = payload.notification.title;
    const noteOptions = {
      body: payload.notification.body,
      icon: "typewriter.jpg", //this is my image in my public folder
    };

    console.log("title ", noteTitle, " ", payload.notification.body);
    //var notification = //examples include this, seems not needed

    new Notification(noteTitle, noteOptions).onclick = function (event) {
      // console.log(event);
      // console.log(payload.notification.click_action);
      if(payload && payload.notification &&  payload.notification.click_action &&  payload.notification.click_action.length > 0)
      {
        window.open(payload.notification.click_action, '_blank');
      }
      this.close();
    };
  }
  catch (err) {
    console.log('Caught error: ', err);
  }
});

messaging.usePublicVapidKey(
  "BGcYM-dTNd-_nDCgMPV5NO-gjNs67Dazu19UkUSqHAxhFe9fVFkc_we6ZC634buT1ooTk3yq9YH8-xAHu1dWbk0"
);

export { messaging };
