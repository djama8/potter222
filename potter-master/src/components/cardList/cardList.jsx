import Card from '../card/card';
import './cardList.scss'
function CardList({cards}) {
    return <div className="card-list">
        <div className="container">
         
            { cards && cards.map((card)=>{
                console.log(card);
                return <Card img={'http://localhost:3001/img/' + card.img}
                                name={card.name}
                                actor={card.actor}
                                gender={card.gender}
                                school={card.school.name}
                                wand={card.wand}
                                alive={card.alive}/>;
            }) }
            
        </div>
    </div>;
}

export default CardList;