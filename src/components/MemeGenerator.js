import React, { Component } from "react";
import MemeGeneratorUI from "./MemeGeneratorUI";
import "./MemeGenerator.scss";

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      image: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: [],
    };
  }

  apiMemes = () => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          allMemeImgs: response.data.memes,
        });
      });
  };

  componentDidMount() {
    this.apiMemes();
  }

  randomMeme = () => {
    return Math.floor(Math.random() * this.state.allMemeImgs.length);
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const memeNumber = this.randomMeme();
    const memeImgUrl = this.state.allMemeImgs[memeNumber].url;
    this.setState({
      image: memeImgUrl,
    });
  };

  render() {
    return (
      <div>
        <MemeGeneratorUI
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          data={this.state}
        />
      </div>
    );
  }
}

export default MemeGenerator;
