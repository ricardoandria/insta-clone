import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineFacebook } from "react-icons/ai";
import "./register.scss";
import { Link, useNavigate } from "react-router-dom";

const arr = [
  "Meta",
  "A propos",
  "Blog",
  "Aide",
  "API",
  "Confidentialite",
  "condition",
  "Compte principaux",
  "hastags",
  "Lieux",
  "Intagram Lite",
  "Importation des contacts et non-utilisateurs",
];

const Register = () => {
  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = "http://localhost:8800/api/auth/register";
      const { data: res } = await axios.post(url, data);
      navigate("/login");
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.messsage);
      }
    }
  };

  return (
    <div className="register">
      <div className="registerContainer">
        <div className="top">
          <img src="/images/instagram-logo.png" alt="" className="logo" />
          <span className="desc">
            Inscrivez-vous pour voir les photos et vidéos de vos amis.
          </span>
          <div className="seConnecterFB">
            <AiOutlineFacebook />
            <span>Se connecter avec Facebook</span>
          </div>
          <span className="ou">OU</span>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Numero de mobile ou email"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Nom complet"
              name="name"
              value={data.name}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Nom d'utilisateur"
              name="username"
              value={data.username}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Mot de passe"
              name="password"
              value={data.password}
              onChange={handleChange}
            />

            <p className="p1">
              Les personnes qui utilisent notre service ont pu importer vos
              coordonnées sur Instagram. <span>En savoir plus</span>
            </p>

            <p className="p2">
              En vous inscrivant, vous acceptez nos Conditions générales, notre
              Politique d’utilisation des données et notre Politique
              d’utilisation des cookies.
            </p>
            {error && <div> {error} </div>}
            <button type="submit" className="btnSubmit">
              S'inscrire
            </button>
          </form>
        </div>
        <div className="mid">
          <p>Vous avez un compte?</p>
          <Link
            style={{
              color: "inherit",
              textDecoration: "none",
            }}
            to="/login"
            className="inscrire"
          >
            <span>Connectez-vous</span>
          </Link>
        </div>
        <div className="downApp">
          <span>Téléchargez l’application.</span>
        </div>
        <div className="imageDown">
          <img src="/images/applestore.png" alt="" />
          <img src="/images/googlestore.png" alt="" />
        </div>
      </div>
      <div className="footer">
        {arr.map((items, index) => (
          <p key={index}> {items} </p>
        ))}
      </div>
    </div>
  );
};

export default Register;
