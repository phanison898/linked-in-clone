import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Chip, Paper, LinearProgress } from "@material-ui/core";
import { useTheme } from "@material-ui/core";
import imageCompression from "browser-image-compression";
import VideocamRoundedIcon from "@material-ui/icons/VideocamRounded";
import YouTubeIcon from "@material-ui/icons/YouTube";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import PhotoSizeSelectActualIcon from "@material-ui/icons/PhotoSizeSelectActual";
import CreateIcon from "@material-ui/icons/Create";
import firebase from "firebase";
import { v4 as uuid } from "uuid";
import db, { storage } from "../../firebase";
import { LinkedInBlue, LinkedInLightBlue } from "../../assets/Colors";
import Styles from "./Style";
import swal from "@sweetalert/with-react";
import InsertLinkIcon from "@material-ui/icons/InsertLink";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import FileType from "file-type/browser";

const Form = () => {
  const classes = Styles();
  const theme = useTheme();
  const { displayName, photoURL } = useSelector((state) => state.user);

  const [uploadData, setUploadData] = useState({
    description: "",
    file: {
      type: "",
      name: "",
      data: "",
    },
  });

  const [progress, setProgress] = useState("");
  const [openURL, setOpenURL] = useState(false);
  const [URL, setURL] = useState("");

  const uploadToFirebaseDB = (fileData) => {
    // uploading to collection called posts
    db.collection("posts")
      .add({
        profile: photoURL,
        username: displayName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        description: uploadData.description,
        fileType: fileData === URL ? "image" : uploadData.file.type,
        fileName: uploadData.file.name,
        fileData: fileData,
      })
      .then(() => resetState());
  };

  const handleSubmitButton = async (e) => {
    e.preventDefault();

    // verify atleast one of the input fields are not empyt
    if (uploadData.description || uploadData.file.data || URL) {
      // if file input is true...upload the file to Fire-Store
      if (uploadData.file.data) {
        const id = uuid();
        const uploadTask = storage.ref(`posts/${id}`).putString(uploadData.file.data, "data_url");
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const value = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setProgress(value);
          },

          (error) => {
            alert(error);
          },

          () => {
            storage
              .ref("posts")
              .child(id)
              .getDownloadURL()
              .then((url) => uploadToFirebaseDB(url));
          }
        );

        // do not go further..
        return;
      }
      if (URL !== "") {
        if (URL.startsWith("data")) {
          swal("NON-SECURE FILE URL : Please don't use URL starts with 'data:'...");
          setURL("");
        } else {
          try {
            const response = await fetch(URL);
            const fileType = await FileType.fromStream(response.body);
            console.log(fileType);
            uploadToFirebaseDB(URL);
          } catch (error) {
            console.log(error);
            swal("INVALID FILE URL ..!!! Please enter image url only");
            setURL("");
          }
        }
      } else {
        // if not file input provided
        uploadToFirebaseDB(uploadData.file.data);
      }
    } else {
      swal("😕 Please enter some text or attach an image / video / url");
    }
  };

  // if file name is too long.. compress it
  const fileNameCompressor = (str, limit) => {
    let fileName = str;
    const arr = str.split(".");
    const name = arr[0];
    const ext = arr[arr.length - 1];

    if (name.length > limit) {
      fileName = name.substring(0, limit).trim() + "... ." + ext;
    }
    return fileName;
  };

  const imageUploadHandler = async (e, type) => {
    const inputFile = e.target.files[0];
    const _inputFile = inputFile.type.split("/");
    const inputFileType = _inputFile[0];
    const inputFileExec = _inputFile[1];
    const inputFileName = fileNameCompressor(inputFile.name, 20);

    const fileSize = inputFile.size / (1024 * 1024);

    const acceptedImageFormats = ["png", "jpg", "jpeg", "gif"];
    const acceptedVideoFormats = ["mp4", "mkv", "3gp", "avi", "webm"];

    switch (type) {
      case "video":
        if (!acceptedVideoFormats.some((format) => format.includes(inputFileExec))) {
          swal("🔴 Please select video format of mp4 , mkv , av ");
          e.target.value = "";
          return;
        }
        if (fileSize > 25) {
          swal("🔴 Please select a video less than 25MB file size");
          e.target.value = "";
          return;
        }
        break;
      case "image":
        if (!acceptedImageFormats.some((format) => format.includes(inputFileExec))) {
          swal("🔴 Please select image format of png , jpg , jpeg , gif ");
          e.target.value = "";
          return;
        }
        if (fileSize > 3) {
          swal("🔴 Please select an image less than 3MB file size");
          e.target.value = "";
          return;
        }
        break;
      default:
        swal("😮 OOPS...!!! Invalid file format");
        e.target.value = "";
        return;
    }

    let compressedInputFile = inputFile;
    if (inputFileType === "image") {
      //compression algorithm
      const compressionOptions = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      };

      try {
        compressedInputFile = await imageCompression(inputFile, compressionOptions);
      } catch (error) {
        alert(error);
      }
    }

    let inputFileDataBase64;
    const file = new FileReader();
    if (compressedInputFile) {
      file.onloadend = (fileLoadedEvent) => {
        inputFileDataBase64 = fileLoadedEvent.target.result;
        setUploadData({
          ...uploadData,
          file: {
            type: inputFileType,
            name: inputFileName,
            data: inputFileDataBase64,
          },
        });
      };
      file.readAsDataURL(compressedInputFile);
    }

    // clear the file input event value
    e.target.value = "";
  };

  const resetState = () => {
    setUploadData({
      description: "",
      file: {
        type: "",
        name: "",
        data: "",
      },
    });
    setProgress("");
    setOpenURL(false);
    setURL("");
  };

  const handleURL = (e) => {
    setURL(e.target.value);
  };

  const toggleURL_Tab = () => {
    if (URL === "") {
      setOpenURL(!openURL);
    } else {
      setOpenURL(true);
    }
  };

  const closeURL_Tab = () => {
    if (URL === "") {
      setOpenURL(false);
    } else {
      setOpenURL(true);
    }
  };

  return (
    <Paper className={classes.upload}>
      <div className={classes.upload__header}>
        <form className={classes.header__form} onSubmit={handleSubmitButton}>
          <CreateIcon />
          <input
            placeholder="Start a post"
            value={uploadData.description}
            onChange={(e) => setUploadData({ ...uploadData, description: e.target.value })}
          />
          <input
            id="upload-image"
            type="file"
            accept="image/*"
            hidden
            onChange={(e) => {
              imageUploadHandler(e, "image");
              setOpenURL(false);
            }}
          />
          <input
            id="upload-video"
            type="file"
            accept="video/*"
            hidden
            onChange={(e) => {
              imageUploadHandler(e, "video");
              setOpenURL(false);
            }}
          />
          <button type="submit">Post</button>
        </form>
      </div>
      {!openURL && !progress && uploadData.file.name && (
        <div className={classes.selectedFile}>
          <Chip
            color="primary"
            size="small"
            onDelete={resetState}
            icon={
              uploadData.file.type === "image" ? (
                <PhotoSizeSelectActualIcon />
              ) : (
                <VideocamRoundedIcon />
              )
            }
            label={uploadData.file.name}
          />
        </div>
      )}
      {!openURL && progress ? (
        <div className={classes.uploading}>
          <LinearProgress variant="determinate" value={progress} className={classes.progress} />
          <p>{progress} %</p>
        </div>
      ) : (
        ""
      )}
      {openURL && (
        <div className={classes.pasteURL_Input}>
          <InsertLinkIcon />
          <input
            placeholder="Paste URL of an image or video"
            value={URL}
            onChange={(e) => setURL(e.target.value)}
          />
          {URL !== "" && (
            <HighlightOffIcon
              style={{ color: "orange", fontSize: 16 }}
              onClick={() => setURL("")}
            />
          )}
        </div>
      )}

      <div className={classes.upload__media}>
        <label
          htmlFor={URL === "" ? "upload-image" : ""}
          onClick={closeURL_Tab}
          className={classes.media__options}
        >
          <PhotoSizeSelectActualIcon
            style={{ color: theme.palette.type === "dark" ? LinkedInLightBlue : LinkedInBlue }}
          />
          <h4>Photo</h4>
        </label>
        <label
          htmlFor={URL === "" ? "upload-video" : ""}
          onClick={closeURL_Tab}
          className={classes.media__options}
        >
          <YouTubeIcon style={{ color: "orange" }} />
          <h4>Video</h4>
        </label>
        <div className={classes.media__options} onClick={toggleURL_Tab}>
          <InsertLinkIcon style={{ color: "#e88ee4", fontSize: 30 }} />
          <h4>URL</h4>
        </div>
        <div className={classes.media__options}>
          <CalendarViewDayIcon style={{ color: "#f5987e" }} />
          <h4>Write article</h4>
        </div>
      </div>
    </Paper>
  );
};

export default Form;
