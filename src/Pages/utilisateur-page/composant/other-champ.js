import './other-champ.css';

function OtherChamp({nomChampion}){
    return (
        <div className="OtherChamp__layout">
           <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${nomChampion}_0.jpg`}/>
 
        </div>
    );
}

export default OtherChamp;
