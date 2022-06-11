import "./profil.scss";
import Navbar from "../../components/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import Tabs from "../../components/Tabs/Tabs";

const Profil = () => {
  return (
    <div className="profil">
      <Navbar />
      <div className="profilContainer">
        <div className="headerProfil">
          <div className="hpLeft">
            <img src="/images/dog1.jpg" alt="" />
          </div>
          <div className="hpRight">
            <div className="top">
              <p className="username">ricardo_andriamahandry</p>
              <div className="setting">
                <button className="editProfil">Modifier profile</button>
                <FontAwesomeIcon icon={faGear} />
              </div>
            </div>
            <div className="mid">
              <p>1 publication </p>
              <p>56 abonnes</p>
              <p>67 aonnements</p>
            </div>
            <div className="bot">
              <h5>Ricardo Andriamahandry</h5>
            </div>
          </div>
        </div>
        <Tabs />
      </div>
    </div>
  );
};

export default Profil;
