import "./ban-champ.css";

function BanChamp({ nomChampion }) {
  return (
    <div className="BanChamp__layout">
      <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${nomChampion}_0.jpg`} />
    </div>
  );
}

export default BanChamp;
