import React, { Component } from 'react';

class Piece extends Component {
    constructor() {
        super();
        this.state = {
            pieces: [{ name: 'Ciena annos de soledad', img: 'https://imagessl9.casadellibro.com/a/l/t5/39/9788420471839.jpg' }, { name: 'El principito', img: 'https://http2.mlstatic.com/cien-anos-de-soledad-gabriel-garcia-marquez-norma-D_NQ_NP_803625-MCO25461231097_032017-F.jpg' }],
        };
        this.handleChange = this.handleChange.bind(this);
        this.addPieces = this.addPieces.bind(this);
        this.getPieces = this.getPieces.bind(this);
    }
    componentDidMount() {
        console.log(this.state);
        this.addPieces();
        this.getPieces();
    }

    addPieces() {

        const obras = [{ name: 'Prueba 1', img: 'https://imagessl9.casadellibro.com/a/l/t5/39/9788420471839.jpg' }, { name: 'Prueba 2', img: 'https://http2.mlstatic.com/cien-anos-de-soledad-gabriel-garcia-marquez-norma-D_NQ_NP_803625-MCO25461231097_032017-F.jpg' }];
        localStorage.setItem("obras", JSON.stringify(obras));
        console.log('Pieces saved!');
    }

    getPieces() {
        let array = JSON.parse(localStorage.getItem('obras'));
        array.map(piece => {
            let newChild = piece;
            this.setState({
                pieces: [...this.state.pieces, newChild]
            });
        });

    }


    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }
    render() {
        return (
            <div className="flex-container">
                {
                    this.state.pieces.map(piece => {
                        return (
                            <div>
                                <span key={piece.name}><img src={piece.img} /></span>
                                <span>{piece.name}</span>
                            </div>
                        );

                    })
                }
            </div>
        );
    }
}

export default Piece;