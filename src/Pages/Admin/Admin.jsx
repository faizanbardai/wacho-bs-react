import React, { Component } from "react";

import LoginModal from "../../Components/LoginModal";
import { api_refresh_token } from "../../APIs";
import AdminPanal from "../../Components/AdminPanal";

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = { isAuthorized: false };
  }
  logout = () => {
    localStorage.removeItem("token");
    this.setState({ isAuthorized: false });
  };

  render() {
    return this.state.isAuthorized ? (
      <AdminPanal logout={this.logout} />
    ) : (
      <LoginModal
        setAuthorized={() => {
          this.setState({ isAuthorized: true });
        }}
      />
    );
  }
  componentDidMount = async () => {
    if (localStorage.getItem("token")) {
      const response = await api_refresh_token(localStorage.getItem("token"));
      switch (response.status) {
        case 200:
          // OK
          const newToken = await response.json();
          localStorage.setItem("token", newToken.token);
          this.setState({ isAuthorized: true });
          break;
        case 401:
          // unauthorized
          localStorage.removeItem("token");
          alert("Unauthorized!");
          break;
        default:
          console.log("Some error");
      }
    }
  };
}
