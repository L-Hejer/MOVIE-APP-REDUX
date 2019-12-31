import React from 'react';
import Modal from 'react-modal';
import { connect } from "react-redux";
import {Add_Movie} from "../Redux/actions"

const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "500px",
      textAlign: "center"
    }
  };

  class AddMovie extends React.Component {
    constructor() {
      super();
   
      this.state = {
        modalIsOpen: false,
        newMovie: { name: "",month:"", date: "", image: "", rating: "" },
      };
   
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }
   
    openModal() {
      this.setState({modalIsOpen: true});
    };
  
    closeModal() {
      this.setState({modalIsOpen: false});
    };

    addTitle = e => {
      this.setState({
        newMovie: { ...this.state.newMovie, name: e.target.value }
      });
    };

    addMonth = e => {
      this.setState({
        newMovie: { ...this.state.newMovie, month: e.target.value }
      });
    };
  
    addDate = e => {
      this.setState({
        newMovie: {
          ...this.state.newMovie,
          date:
            /^[0-9]{4}$/.test(e.target.value) && e.target.value <= 2020
              ? e.target.value
              : ""
        }
      });
    };
  
    addRating = e => {
      this.setState({
        newMovie: {
          ...this.state.newMovie,
          rating:
            /^[0-9]{1}$/.test(e.target.value) && e.target.value <= 5
              ? e.target.value
              : ""
        }
      });
    };
  
    addImage = e => {
      this.setState({
        newMovie: {
          ...this.state.newMovie,
          image: /^(ftp|http|https):\/\/[^ "]+$/.test(e.target.value)
            ? e.target.value
            : ""
        }
      });
    };
  
    submitModal = e => {
      e.preventDefault();
      if (Object.values(this.state.newMovie).indexOf("") > -1) {
        alert("Please Enter Valid Movie Informations");
      } else {
        this.setState({
          modalIsOpen: false,
          newMovie: { name: "",month:"", date: "", image: "", rating: "" }
        });
        this.props.Add_Movie({id:Date.now(),...this.state.newMovie})
      }
    };






    render() {
        return (
          <div>
              <button className="Add-btn"  onClick={this.openModal}>
          Add Movie
        </button>
            <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >  
        <form>
          <h1>Add A Movie</h1>
          <label>Movie Name</label>
          <input type="text" onChange={this.addTitle}/>
          <label>Movie release Month</label>
          <input type="text" onChange={this.addMonth}/>
          <label>Movie release Year</label>
          <input type="text" onChange={this.addDate}/>
          <label>Movie Picture</label>
          <input type="text" onChange={this.addImage}/>
          <label>Movie Rating</label>
          <input type="text" onChange={this.addRating}/>
        </form>
        <button className="Modal-btn" onClick={this.submitModal}>
          Submit
        </button>
        <button className="Modal-btn"  onClick={this.closeModal}>
          Close
        </button>
            </Modal>
          </div>
        );
      }



}  

const mapStateToProps = state =>{
    return {
  moviesToDisplay:state.moviesToDisplay
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
      Add_Movie: payload => dispatch(Add_Movie(payload))
    }
  }
  const  ModalContainer = connect(mapStateToProps, mapDispatchToProps) (AddMovie)
  export default ModalContainer