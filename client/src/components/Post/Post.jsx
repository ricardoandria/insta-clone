import React from "react";
import "./post.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import {
  faHeart,
  faComment,
  faPaperPlane,
  faBookmark,
  faSmile,
} from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

const Post = () => {
  const [likecolor, setLikeColor] = useState(false);
  return (
    <div className="post">
      <div className="postContainer">
        <div className="postHeader">
          <div className="phLeft">
            <img src="/images/forest.jpg" alt="pdp" className="profilImg" />
            <span className="name">Ricardo</span>
          </div>
          <div className="phRight">
            <FontAwesomeIcon icon={faEllipsis} />
          </div>
        </div>
        <div className="postImages">
          <img src="/images/dog1.jpg" alt="postImage" className="pImg" />
        </div>
        <div className="postFooter">
          <div className="postFooter1">
            <div className="pf1Left">
              <FontAwesomeIcon
                icon={faHeart}
                className={likecolor ? "iconHeart cliked" : "iconHeart"}
                onClick={(e) => setLikeColor(!likecolor)}
              />
              <FontAwesomeIcon icon={faComment} className="iconComment" />
              <FontAwesomeIcon icon={faPaperPlane} className="iconPaper" />
            </div>
            <div className="pf1Right">
              <FontAwesomeIcon icon={faBookmark} />
            </div>
          </div>
          <span className="likeNumber">4123 J'aime</span>
          <div className="postLegend">
            <h5 className="postname">Ricardo__</h5>
            <p className="legend">Im new here guys...</p>
          </div>
          <p className="seemoreCommentaire">Afficher plus de commentaire...</p>
          <span className="timestamp">il y a 12heure</span>
          <div className="commentContainer">
            <div className="ccLeft">
              <FontAwesomeIcon icon={faSmile} className="iconSmile" />
              <input type="text" placeholder="Ajouter commentaire" />
            </div>
            <button className="btnPost">Publier</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
