import { useState, useEffect } from "react";
import "./champion-liste.css";
import axios from "axios";

function ChampList() {
  const [stateImageChamp, setStateImageChamp] = useState([]);
  const [stateStringChamp, setStateStringChamp] = useState([]);

  function handlerChangeNameChamp(event) {
    if (!isImageChampLoading()) {
      return;
    }
    const saisieNameChamp = event.target.value.toLowerCase();
    setStateStringChamp(saisieNameChamp);
    console.log("CTA", champFilter);
  }

  function isImageChampLoading() {
    return stateImageChamp.length > 0;
  }

  useEffect(() => {
    if (!isImageChampLoading()) {
      axios.get(`http://ddragon.leagueoflegends.com/cdn/11.4.1/data/en_US/champion.json`).then((res) => {
        console.log("CTA before return axios", Object.keys(res.data.data));
        setStateImageChamp(Object.keys(res.data.data));
      });
    }
  });

  console.log("CTA before return", stateStringChamp);

  let champFilter = stateImageChamp.map((filterName) => {
    let objetTableau = {
      name: filterName,
      isVisible: false,
    };
    return objetTableau;
  });

  champFilter = champFilter.map((objetChamp) => {
    objetChamp.isVisible = objetChamp.name.toLowerCase().includes(stateStringChamp);
    return objetChamp;
  });
  console.log(champFilter);
  return (
    <div className="componentChampionList">
      <div className="zoneTexte">
        <input type="text" placeholder="Entrez un nom de champion" onChange={handlerChangeNameChamp}></input>
      </div>
      <div className="listeChampion">
        {champFilter.map((champion) => (
          <img
            className={champion.isVisible ? "imageChampion" : "championHide"}
            key={champion.name}
            src={`http://ddragon.leagueoflegends.com/cdn/11.4.1/img/champion/${champion.name}.png`}
          />
        ))}
      </div>
    </div>
  );
}
export default ChampList;
