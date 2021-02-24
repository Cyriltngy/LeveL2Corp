import "./scnd-champ.css";

function ScndChamp({ nomChampion }) {
  return (
    <div className="ScndChamp__layout">
      <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${nomChampion}_0.jpg`} />
    </div>
  );
}

export default ScndChamp;
