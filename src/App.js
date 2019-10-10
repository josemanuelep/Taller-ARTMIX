import React, { PureComponent } from 'react';
import './styles.scss'
import NavigationBar from './components/NavigationBar';
import MainTitle from './components/MainTitle';
import Modal from 'react-modal';
const AppContext = React.createContext({

  works: []

});


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

class ModalWrapper extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      </div>
    );
  }
}

class Piece extends React.Component {
  render() {
    return (

      <AppContext.Consumer>
        {value => {
          return (
            <div className="flex-container">
              {value.works.map(work =>
                <div>
                  <span><img src={work.img} /></span>
                  <span>{work.name}</span>
                </div>
              )}
            </div>
          );
        }}

      </AppContext.Consumer>
    );
  }
}


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nameValue: '', imgValue: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('submitted: ' + this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.nameValue} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          img:
          <input type="text" value={this.state.imgValue} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pieces: [],
    };
    this.addPieces = this.addPieces.bind(this);
    this.getPieces = this.getPieces.bind(this);

  }

  componentDidMount() {
    this.addPieces();
    this.getPieces();
  }
  addPieces() {
    const obras = [{ name: 'La Odisea', img: 'http://bit.ly/2OycArf' }, { name: 'La Cabaña del Tío Tom', img: 'http://bit.ly/35qoxVJ' }, { name: 'Frankenstein', img: 'http://bit.ly/33mc2sF' }];
    localStorage.setItem("obras", JSON.stringify(obras));
    console.log('Seed Pieces saved!');
  }
  getPieces() {
    let tempArray = JSON.parse(localStorage.getItem('obras'));
    this.setState({ pieces: tempArray });

  }
  render() {
    console.log(this.state.pieces);
    return (
      <div>
        <AppContext.Provider value={{
          works: this.state.pieces
        }}>
          <NavigationBar />
          <MainTitle title={"Artmix"}></MainTitle>
          <Piece></Piece>
          <ModalWrapper></ModalWrapper>
        </AppContext.Provider>
      </div>
    );
  }
}


export default App;
