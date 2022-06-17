import react, { useState, useEffect } from "react";
import { Image, Row, Col, Button, Upload, Form, message } from "antd";
import {
  getStorage,
  ref,
  deleteObject,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import "./editImage.css";
import { UploadOutlined } from "@ant-design/icons";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteField,
  deleteDoc,
} from "firebase/firestore";
const db = getFirestore();
const storage = getStorage();

export const EditImage = (props) => {
  const [getImages, setGetImages] = useState([]);
  const [getData, setGetData] = useState({});
  const [indexArr, setIndexArr] = useState([]);
  const [imageLoading, setImageLoading] = useState(false);

  const GetImagesUrls = async () => {
    const docRef = doc(db, "Images", `${props.serial}`);
    const docSnap = await getDoc(docRef);
    const data = docSnap?.data();
    if (data != null) {
      setGetData(Object.keys(data));
      setGetImages(Object.values(data));
    }
  };

  const deleteImage = async () => {
    getData?.map(async (e) => {
      const storageRef = ref(storage, `${props.serial}/image-${e}`);
      if (indexArr.indexOf(e) == -1) {
        setIndexArr([...indexArr, e]);
      }

      await deleteObject(storageRef).catch((error) => {});
      await updateDoc(doc(db, "Images", props.serial), {
        [e]: deleteField(),
      }).then(() => {
        GetImagesUrls();
      });
      await deleteDoc(doc(db, "Images", props.serial));
    });
    GetImagesUrls();
  };

  const ImageDisplay = () => {
    return getImages.map((e) => {
      const index = getImages.indexOf(e);
      return (
        <Col xs={20} sm={{ span: 6, offset: 1 }}>
          <Image
            width={"100%"}
            className={"image-report"}
            src={e}
            key={index}
          />
        </Col>
      );
    });
  };

  const fileProps = {
    maxCount: 5,
    onChange({ file, fileList }) {
      file.status = "done";
      file.progres = 100;
    },
    beforeUpload: (file, fileList) => {
      return true;
    },
    customRequest: async (e) => {
      const file = e.file;
    },
  };

  const SendImages = async (e) => {
    setImageLoading(true);
    console.log("img start uploading");
    let imageArr = e.image.fileList;
    imageArr?.map(async (img) => {
      let i = imageArr.indexOf(img);
      const name = `image-${i}`;
      const storageRef = ref(storage, `${props.serial}/image-${i}`);
      await uploadBytesResumable(storageRef, img.originFileObj);
      const urlRef = await getDownloadURL(storageRef);
      const ovenRef = doc(db, "Images", `${props.serial}`);
      await setDoc(ovenRef, { [i]: `${urlRef}` }, { merge: true });
      GetImagesUrls();
    });
    console.log("img end uploading");
    setImageLoading(false);
  };

  useEffect(() => {
    GetImagesUrls();
  }, [getImages]);
  return (
    <Image.PreviewGroup>
      <Row justify="space-around">
        <ImageDisplay />
      </Row>
      <Row justify="center" style={{ paddingTop: "1em", paddingBottom: "1em" }}>
        <Col xs={10} md={5} lg={4} xl={3}>
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
        <Col xs={10} md={5} lg={4} xl={3}>
          <Form onFinish={SendImages}>
            <Form.Item name="image">
              <Upload {...fileProps}>
                <Button
                  loading={imageLoading}
                  icon={imageLoading ? "" : <UploadOutlined />}
                >
                  Select Images
                </Button>
              </Upload>
            </Form.Item>
            <Form.Item>
              <Button block type="primary" htmlType="submit">
                Upload
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Image.PreviewGroup>
  );
};
