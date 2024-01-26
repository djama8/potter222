import './card.scss'
import hermiona from './../../assets/img/hermiona.svg'

function Card({img, name, actor, gender, school, wand, alive}) {
    return <div className="card">
        <div className="image">
            <img src={img} alt="1" />
        </div>
        <div className="info">
            <p className="name">{name}</p>
            <p className="actor">Actor: {actor}</p>
            <p className="gender">Gender: {gender}</p>
            <p className="house"> House: {school}</p>
            <p className="wand">Wand core: {wand}</p>
            <p className="alive">Alive: {alive ? 'yes' : 'no'} </p>
        </div>

    </div>;
}

export default Card;