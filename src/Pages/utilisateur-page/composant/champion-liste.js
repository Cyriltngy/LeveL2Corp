import axios from 'axios';
import './champion-liste.css';

function ChampList(){
    const tableauChampion= ['Aatrox', 'Ashe', 'Ahri'];

    return(
        <div className='championListe'>
            <input type="text" placeholder="Entrez un nom de champion">
            </input> 
            {tableauChampion.map((champion) =>(
                <img src= {`http://ddragon.leagueoflegends.com/cdn/11.4.1/img/champion/${champion}.png`}/>
            ))}
        </div>
    );
}
export default ChampList