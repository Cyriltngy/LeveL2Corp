import './main-champ.css';

function MainChamp({nomChampion}){
    return (
        <div className="mainChamp__layout">
           <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${nomChampion}_0.jpg`}/>
 
        </div>
    );
}

export default MainChamp;
