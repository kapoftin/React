import './marvel.css'
import Korgi from '../../img/korgiOne.jpg'
import { Link } from 'react-router-dom'
import { Component } from 'react'
import MarvelService from '../../services/MarvelService'


class MarvelPage extends Component {
    state = {
        name: null,
        descr: null,
        thumbnail: null,
    }
    constructor(props) {
        super(props);
        this.updateChar();
    }
    marvelService = new MarvelService();

    updateChar = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        this.marvelService
            .getCharacter(id)
            .then(res => {
                this.setState(res)
            })
    }
    render() {
        const { name, descr, thumbnail } = this.state;
        return (
            <div className="marvel-container">
                                <div className="marvel-button">
                            <a onClick={this.updateChar} className='a'>Random char</a>
                        </div>
                <div className='marvel-random-card'>
                    <div className="marvel-random">
                        <div className="marvel-image">
                            <img src={thumbnail} />
                        </div>
                        <div className="marvel-title">
                            <h2>{name}</h2>
                        </div>
                        <div className="marvel-descr">
                            <p className='max-tdp'>{descr}</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default MarvelPage;