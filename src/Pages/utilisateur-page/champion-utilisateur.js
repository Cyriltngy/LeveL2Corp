import './champion-utilisateur.css';
import BanChamp from './composant/ban-champ';
import MainChamp from './composant/main-champ';
import OtherChamp from './composant/other-champ';
import ScndChamp from './composant/scnd-champ';

const { Component } = require("react");

class ChampionUtilisateur extends Component{
    donneeUtilisateur = {
        pseudoUtilisateur: 'DumbleDodge',
        posteUtilisateur: 'Jungle',
        mainChampUtilisateur: 'Bard',
        sncdChampUtilisateur: ['Brand','Olaf','Sejuani','Lillia'],
        otherChampUtilisateur:['Graves', 'Hecarim', 'Kindred', 'Trundle'],
        banChampUtilisateur:['Morgana','Nidalee','Khazix']
    };
    render(){
        return (
            <div className="layout__ChampionUtilisateur">
                
                <div className="pseudo__ChampionUtilisateur">
                    <h2>{this.donneeUtilisateur.pseudoUtilisateur}</h2>
                    <h3>{this.donneeUtilisateur.posteUtilisateur}</h3>
                </div>
                <div className="mainChamp__ChampionUtlisateur">
                    <MainChamp nomChampion= {this.donneeUtilisateur.mainChampUtilisateur}/>
                </div>
                <div className="mainAndBan__ChampionUtilisateur">
                    <div className="scndMainChamp__ChampionUtilisateur">
                        <div className="scndMain__ChampionUtilisateur">
                            {this.donneeUtilisateur.sncdChampUtilisateur.map((champ) => (
                                <ScndChamp nomChampion={champ}/>
                            ))}
                        </div>
                        <div className="otherMain__ChampionUtilisateur">
                            {this.donneeUtilisateur.otherChampUtilisateur.map((champ) => (
                                <OtherChamp nomChampion={champ}/>
                            ))}
                        </div>
                    </div>
                    <div className="banChamp__ChampionUtilisateur">
                        {this.donneeUtilisateur.banChampUtilisateur.map((champ) => (
                            <BanChamp nomChampion={champ}/>
                        ))}
                    </div>
                </div>
            </div>    

        );
    }
}
export default ChampionUtilisateur;
