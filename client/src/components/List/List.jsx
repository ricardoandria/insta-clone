import React from "react";
import "./list.scss";

const List = () => {
  return (
    <div className="List">
      <div className="listContainer">
        <div className="profilDetails">
          <div className="pdLeft">
            <img src="/images/cat1.jpg" alt="pdp" />
            <div className="pdLname">
              <h5>ricardo_andriamahandry</h5>
              <p>Ricardo Andriamahandry</p>
            </div>
          </div>
          <div className="pdRight">
            <button>Basculer</button>
          </div>
        </div>
        <div className="middleList">
          <span>Suggestion pour vous </span>
          <button>voir tout</button>
        </div>
        <div className="suggAmis">
          <div className="suggLeft">
            <img src="/images/cat1.jpg" alt="pdp" />
            <div className="pdLname">
              <h5>ricardo_andriamahandry</h5>
              <p>Vous suit</p>
            </div>
          </div>
          <div className="suggRight">
            <button>S'abonner</button>
          </div>
        </div>
        <div className="suggAmis">
          <div className="suggLeft">
            <img src="/images/cat1.jpg" alt="pdp" />
            <div className="pdLname">
              <h5>ricardo_andriamahandry</h5>
              <p>Vous suit</p>
            </div>
          </div>
          <div className="suggRight">
            <button>S'abonner</button>
          </div>
        </div>
        <div className="suggAmis">
          <div className="suggLeft">
            <img src="/images/cat1.jpg" alt="pdp" />
            <div className="pdLname">
              <h5>ricardo_andriamahandry</h5>
              <p>Vous suit</p>
            </div>
          </div>
          <div className="suggRight">
            <button>S'abonner</button>
          </div>
        </div>
        <div className="suggAmis">
          <div className="suggLeft">
            <img src="/images/cat1.jpg" alt="pdp" />
            <div className="pdLname">
              <h5>ricardo_andriamahandry</h5>
              <p>Vous suit</p>
            </div>
          </div>
          <div className="suggRight">
            <button>S'abonner</button>
          </div>
        </div>

        <div className="bttom">
          <p>
            A propos . Aide . presse . API . Emploi . Confidentialite .
            condition . Lieux . Compte principaux . Langue
          </p>
          <p>c 2022 INSTAGRAM PAR RICA</p>
        </div>
      </div>
    </div>
  );
};

export default List;
