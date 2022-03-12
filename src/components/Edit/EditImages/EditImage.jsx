import react, { useState, useEffect } from "react";
import { Image, Row, Col, Button, Upload } from "antd";
import {
  getStorage,
  ref,
  deleteObject,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { UploadOutlined, StarOutlined } from "@ant-design/icons";

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

export const EditImage = (props) => {
  const [getImages, setGetImages] = useState([]);
  const [imgDelete, setImgDelete] = useState(null);
  const [getData, setGetData] = useState({});
  const [reload, setReload] = useState(false);
  const [imgUrl, setImgUrl] = useState(null);
  const [indexArr, setIndexArr] = useState([]);
  let totalImages = 0;
  const [count, setCount] = useState(0);
  const [uploading, setUploading] = useState("");
  const [upLoadDisabled, setUpLoadDisabled] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);

  const GetImagesUrls = async () => {
    const docRef = doc(db, "Images", `${props.serial}`);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();
    setGetData(Object.keys(data));
    setGetImages(Object.values(data));
    setCount(getData.length);
  };

  const deleteImage = async () => {
    setCount(0);
    getData?.map(async (e) => {
      const storageRef = ref(storage, `${props.serial}/image-${e}`);
      if (indexArr.indexOf(e) == -1) {
        setIndexArr([...indexArr, e]);
      }

      await deleteObject(storageRef).catch((error) => {});
      await updateDoc(doc(db, "Images", props.serial), {
        [e]: deleteField(),
      });
      const docRef = doc(db, "Images", `${props.serial}`);
      const docSnap = await getDoc(docRef);
      const data = docSnap.data();
      setGetData(Object.keys(data));
      setGetImages(Object.values(data));
      setUpLoadDisabled(false);
    });
  };

  const ImageDisplay = () => {
    totalImages = getImages.length;
    return getImages.map((e) => {
      const index = getImages.indexOf(e);
      const imgNum = getData[index];
      return (
        <Col xs={20} sm={{ span: 6, offset: 1 }}>
          <Image
            preview={false}
            width={"100%"}
            onClick={() => {
              setImgUrl(e);
              setImgDelete(imgNum);
            }}
            src={e}
            key={index}
          />
        </Col>
      );
    });
  };
  const fileProps = {
    action: "none",
    onChange({ file, fileList }) {
      file.status = uploading;
    },
    showUploadList: {
      showDownloadIcon: false,
      showRemoveIcon: false,
    },
    customRequest: async (e) => {
      const file = e.file;
      if (file) {
        setCount(count + 1);
        setUpLoadDisabled(true);
        setImageLoading(true);
        const storageRef = ref(storage, `${props.serial}/image-${count}`);
        const name = `image-${count}`;
        const uploadTask = await uploadBytesResumable(storageRef, file).catch(
          (error) => {}
        );
        const urlRef = await getDownloadURL(storageRef).catch((error) => {});
        const ovenRef = doc(db, "Images", `${props.serial}`);
        await setDoc(ovenRef, { [count]: `${urlRef}` }, { merge: true });
        const docSnap = await getDoc(ovenRef);
        const data = docSnap.data();
        setGetData(Object.keys(data));
        setGetImages(Object.values(data));
        setReload(true);
        setImageLoading(false);
        setUploading("done");
        setUpLoadDisabled(false);
        if (totalImages >= 4) {
          setUpLoadDisabled(true);
        } else {
          setUpLoadDisabled(false);
        }
      }
    },
  };
  useEffect(() => {
    GetImagesUrls();
  }, []);
  useEffect;
  return (
    <Image.PreviewGroup>
      <Row justify="space-around">
        <ImageDisplay />
      </Row>
      <Row justify="center" style={{ paddingTop: "1em", paddingBottom: "1em" }}>
        <Col xs={10}>
          <Button
            style={{ width: "100%" }}
            type="primary"
            onClick={() => deleteImage()}
          >
            Delete
          </Button>
        </Col>
      </Row>
      <Row justify="center" style={{ paddingBottom: "6em" }}>
        <Col xs={10}>
          <Upload {...fileProps}>
            <Button
              loading={imageLoading}
              disabled={upLoadDisabled}
              icon={imageLoading ? "" : <UploadOutlined />}
            >
              Upload
            </Button>
          </Upload>
        </Col>
      </Row>
    </Image.PreviewGroup>
  );
};
