import React from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { Edit } from "../Redux/actions";

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

class EditMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      EditMovie: { name: "", date: "",month:"", image: "", rating: "" }
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true, EditMovie: this.props.movie });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  EditTitle = e => {
    this.setState({
      EditMovie: {
        ...this.state.EditMovie,
        name: e.target.value === "" ? this.props.movie.name : e.target.value
      }
    });
  };

  EditMonth = e => {
    this.setState({
      EditMovie: {
        ...this.state.EditMovie,
        month: e.target.value === "" ? this.props.movie.month : e.target.value
      }
    });
  };

  EditDate = e => {
    this.setState({
      EditMovie: {
        ...this.state.EditMovie,
        date:
          /^[0-9]{4}$/.test(e.target.value) && e.target.value <= 2020
            ? e.target.value
            : ""
      }
    });
  };

  EditRating = e => {
    this.setState({
      EditMovie: {
        ...this.state.EditMovie,
        rating:
          /^[0-9]{1}$/.test(e.target.value) && e.target.value <= 5
            ? e.target.value
            : ""
      }
    });
  };

  EditImage = e => {
    this.setState({
      EditMovie: {
        ...this.state.EditMovie,
        image: /^(ftp|http|https):\/\/[^ "]+$/.test(e.target.value)
          ? e.target.value
          : ""
      }
    });
  };

  submitEdit = e => {
    e.preventDefault();
    if (Object.values(this.state.EditMovie).indexOf("") > -1) {
      alert("Please Enter Valid Movie Informations");
    } else {
      this.setState({
        modalIsOpen: false,
        EditMovie: { ...this.state.EditMovie, name: "" }
      });
      this.props.Edit({
        name: this.state.EditMovie.name,
        rating: this.state.EditMovie.rating,
        image: this.state.EditMovie.image,
        date: this.state.EditMovie.date,
        month:this.state.EditMovie.month,
        id: this.state.EditMovie.id
      });
    }
  };

  render() {
    return (
      <div>
        <button className="card-btn" onClick={this.openModal}>
          Edit
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <form>
            <h1>Edit A Movie</h1>
            <label>Movie Name</label>
            <input type="text" onChange={this.EditTitle} />
            <label>Movie release Month</label>
            <input type="text" onChange={this.EditMonth}/>
            <label>Movie release Year</label>
            <input type="text" onChange={this.EditDate} />
            <label>Movie Picture</label>
            <input type="text" onChange={this.EditImage} />
            <label>Movie Rating</label>
            <input type="text" onChange={this.EditRating} />
          </form>
          <button className="Modal-btn" onClick={this.submitEdit}>
            Submit
          </button>
          <button className="Modal-btn" onClick={this.closeModal}>
            Close
          </button>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    moviesToDisplay: state.moviesToDisplay
  };
};
const mapDispatchToProps = dispatch => {
  return {
    Edit: payload => dispatch(Edit(payload))
  };
};

const EditModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditMovie);

export default EditModalContainer;
