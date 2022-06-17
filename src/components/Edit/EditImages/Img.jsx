import react, { useState, useEffect } from "react";
import { Image, Row, Col, Button, Upload } from "antd";
import {
  getStorage,
  ref,
  deleteObject,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteField,
} from "firebase/firestore";
const db = getFirestore();
const storage = getStorage();

export const Img = (props) => {
  const [getData, setGetData] = useState({});
  const [count, setCount] = useState(0);
  const [getImages, setGetImages] = useState([]);

  useEffect(() => {
    (async () => {
      const docRef = doc(db, "Images", `${props.serial}`);
      const docSnap = await getDoc(docRef);
      const data = docSnap.data();
      setGetData(Object.keys(data));
      setGetImages(Object.values(data));
      if (getData.length === 0) {
        console.log(getData);
        setUpLoadDisabled(false);
      }
      setCount(getData.length);
    })();
  }, []);
  return <div>Img</div>;
};
