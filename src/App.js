import React, { Component } from "react";

import "./App.css";

class App extends Component {
  state = {
    result: null,
    isLoaded: false
  };
  componentDidMount() {
    fetch("https://randomuser.me/api/")
      .then(res => res.json())
      .then(data => {
        this.setState({ result: data, isLoaded: true });
        console.log(this.state.result.results[0].name.first);
      });
  }
  formSubmit = () => {};
  MouseOverHandle = e => {
    var title = document.getElementById("title");
    var value = document.getElementById("value");
    switch (e.target.id) {
      case "user":
        var user = document.getElementById("user");
        user.style.opacity = 0.5;
        title.innerHTML = "Hi, My name is";
        value.innerHTML =
          this.state.result.results[0].name.first +
          " " +
          this.state.result.results[0].name.last;
        break;
      case "calender":
        var calender = document.getElementById("calender");
        calender.style.opacity = 0.5;
        title.innerHTML = "My birthday is";
        value.innerHTML = this.state.result.results[0].dob.date;
        break;
      case "email":
        var email = document.getElementById("email");
        email.style.opacity = 0.5;
        title.innerHTML = "My email address is";
        value.innerHTML = this.state.result.results[0].email;
        break;
      case "map":
        var map = document.getElementById("map");
        map.style.opacity = 0.5;
        title.innerHTML = "My address is";
        value.innerHTML = this.state.result.results[0].location.street;
        break;
      case "phone":
        var phone = document.getElementById("phone");
        phone.style.opacity = 0.5;
        title.innerHTML = "My phone number is";
        value.innerHTML = this.state.result.results[0].phone;
        break;
      case "pwd":
        var pwd = document.getElementById("pwd");
        pwd.style.opacity = 0.5;
        title.innerHTML = "My password is";
        value.innerHTML = this.state.result.results[0].login.password;
        break;
    }
  };
  MouseOutHandle = () => {
    document.getElementsByClassName("icons")[0].style.opacity = 1;
    document.getElementsByClassName("icons")[1].style.opacity = 1;
    document.getElementsByClassName("icons")[2].style.opacity = 1;
    document.getElementsByClassName("icons")[3].style.opacity = 1;
    document.getElementsByClassName("icons")[4].style.opacity = 1;
    document.getElementsByClassName("icons")[5].style.opacity = 1;
  };
  render() {
    if (this.state.isLoaded) {
      return (
        <div className="container con">
          <div className="bg" />
          <img
            className="profile_pic img-circle img-thumbnail img-responsive"
            src={this.state.result.results[0].picture.large}
            alt="img"
          />
          <p id="title" className="title text-muted">
            Hi, My name is
          </p>
          <h1 id="value" className="value">
            {this.state.result.results[0].name.first +
              " " +
              this.state.result.results[0].name.last}
          </h1>
          <div className="icon">
            <button className="btn">
              <i
                id="user"
                className="fa fa-user icons"
                onMouseOver={this.MouseOverHandle.bind(this)}
                onMouseOut={this.MouseOutHandle.bind(this)}
                aria-hidden="true"
              />
            </button>
            <button className="btn">
              <i
                id="email"
                className="fa fa-envelope icons"
                onMouseOver={this.MouseOverHandle.bind(this)}
                onMouseOut={this.MouseOutHandle.bind(this)}
                aria-hidden="true"
              />
            </button>
            <button className="btn">
              <i
                id="calender"
                onMouseOver={this.MouseOverHandle.bind(this)}
                onMouseOut={this.MouseOutHandle.bind(this)}
                className="fa fa-calendar-check-o icons"
                aria-hidden="true"
              />
            </button>
            <button className="btn">
              <i
                id="map"
                className="fa fa-map-marker icons"
                onMouseOver={this.MouseOverHandle.bind(this)}
                onMouseOut={this.MouseOutHandle.bind(this)}
                aria-hidden="true"
              />
            </button>
            <button className="btn">
              <i
                id="phone"
                className="fa fa-phone-square icons"
                onMouseOver={this.MouseOverHandle.bind(this)}
                onMouseOut={this.MouseOutHandle.bind(this)}
                aria-hidden="true"
              />
            </button>
            <button className="btn">
              <i
                id="pwd"
                className="fa fa-key icons"
                onMouseOver={this.MouseOverHandle.bind(this)}
                onMouseOut={this.MouseOutHandle.bind(this)}
                aria-hidden="true"
              />
            </button>
          </div>

          <form onSubmit={this.formSubmit.bind(this)}>
            <button className="btn btn-success btn-lg btn-block form_b">
              Next
            </button>
          </form>
        </div>
      );
    } else {
      return (
        <div className="container con2">
          <video
            className="video"
            width="320"
            height="240"
            autoPlay="true"
            loop
          >
            <source src={require("./Assets/loading.mp4")} type="video/mp4" />
          </video>
        </div>
      );
    }
  }
}

export default App;
