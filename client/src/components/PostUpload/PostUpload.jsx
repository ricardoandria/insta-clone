import "./postUpload.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhotoFilm } from "@fortawesome/free-solid-svg-icons";
import { HiOutlinePhotograph } from "react-icons/hi";
import { BiArrowBack } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";
import { useEffect, useRef, useState } from "react";

const PostUpload = () => {
  const [image, setImage] = useState();
  const [preview, setPreview] = useState("");
  const fileInputRef = useRef();
  const [openDesc, setOpenDesc] = useState(false);

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
    }
  }, [image]);

  const handleBack = () => {
    setPreview("");
    setOpenDesc(false);
  };

  return (
    <div className={openDesc ? "postUpload act" : "postUpload"}>
      <div className={preview ? "title act" : "title"}>
        {preview !== "" ? (
          <div className="backbtn" onClick={() => handleBack()}>
            <BiArrowBack className="backIcon" />
          </div>
        ) : null}

        <h2 className={preview ? "act" : null}>
          Creer une nouvelle publication
        </h2>
        {preview !== "" && !openDesc ? (
          <div className="next">
            <button className="nextBtn" onClick={() => setOpenDesc(true)}>
              Suivant
            </button>
          </div>
        ) : preview !== "" && openDesc ? (
          <div className="next">
            <button className="nextBtn" onClick={() => setOpenDesc(true)}>
              Partager
            </button>
          </div>
        ) : null}
      </div>
      <div className="publ act">
        <div className="inputField act">
          {preview !== "" ? (
            <img src={preview} alt="" className="imgPost" />
          ) : (
            <>
              <HiOutlinePhotograph className="imgvideo" />
              <span>Faites glisser les photos et les vidéos ici</span>
              <input
                ref={fileInputRef}
                type="file"
                id="file"
                accept="images/*"
                onChange={(event) => {
                  const file = event.target.files[0];
                  if (file && file.type.substr(0, 5) === "image") {
                    setImage(file);
                  } else {
                    setImage(null);
                  }
                }}
              />
              <label
                onClick={(event) => {
                  event.preventDefault();
                  fileInputRef.current.click();
                }}
                htmlFor="file"
              >
                Selectionner sur l'ordinateur
              </label>
            </>
          )}
        </div>
        {openDesc ? (
          <div className="descInput">
            <div className="profilContainer">
              <img src="/images/dog1.jpg" alt="" />
              <p className="name">ricardo_andriamahandry</p>
            </div>
            <textarea
              className="textarea"
              placeholder="Ajouter une legende..."
            />
            <div className="addplace">
              <input type="text" placeholder="Ajouter un lieu" />
              <MdOutlineLocationOn className="locationIcon" />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default PostUpload;
