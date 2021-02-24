import { useState } from "react";
import "./champion-liste.css";
import axios from "axios";

function ChampList() {
  let loadingChamp = true;
  let tableauChampion = [];
  const [stateImageChamp, setStateImageChamp] = useState([]);
  tableauChampion = stateImageChamp;
  const [stateArrayFindChamp, setStateArrayFindChamp] = useState([]);
  function handlerChangeNameChamp(event) {
    if (!isImageChampLoading()) {
      return;
    }
    const saisieNameChamp = event.target.value.toLowerCase();
    const champFilter = stateImageChamp.filter((filterName) => filterName.toLowerCase().includes(saisieNameChamp));
    setStateArrayFindChamp(champFilter);
    console.log("CTA", champFilter);
  }
  function isImageChampLoading() {
    return stateImageChamp.length > 0;
  }

  if (!isImageChampLoading()) {
    axios.get(`http://ddragon.leagueoflegends.com/cdn/11.4.1/data/en_US/champion.json`).then((res) => {
      console.log("CTA before return axios", Object.keys(res.data.data));
      setStateImageChamp(Object.keys(res.data.data));
    });
  }
  console.log("CTA before return", stateArrayFindChamp);
  return (
    <div className="championListe">
      <input type="text" placeholder="Entrez un nom de champion" onChange={handlerChangeNameChamp}></input>
      {stateArrayFindChamp.map((champion) => (
        <img key={champion} src={`http://ddragon.leagueoflegends.com/cdn/11.4.1/img/champion/${champion}.png`} />
      ))}
    </div>
  );
}
export default ChampList;
