import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getMessaging } from "firebase/messaging/sw";

const firebaseConfig = {
  apiKey: "AIzaSyDsoONwJ6lk9pjU86ctDW4nXIlDdcPIEsc",
  authDomain: "qa-report-testing.firebaseapp.com",
  projectId: "qa-report-testing",
  storageBucket: "qa-report-testing.appspot.com",
  messagingSenderId: "701271521705",
  appId: "1:701271521705:web:e07ca5d4e6e3b8b810acb8",
};

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
const messaging = getMessaging(firebaseApp);
export default firebaseApp;
