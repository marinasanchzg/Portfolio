import React, { Component } from "react";

class Footer extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var networks = this.props.sharedBasicInfo.social.map(function (network) {
        return (
          <span key={network.name} className="m-4">
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              <i className={network.class}></i>
            </a>
          </span>
        );
      });
    }

    return (
      <footer>
        <div className="col-md-12">
          <div className="social-links">{networks}</div>

          <div className="copyright py-4 text-center">
            <div className="container">
              <small>
                Made with ❤️ by{" "}
                <a href="https://www.linkedin.com/in/sergio-garc%C3%ADa-vicente-557682169/">Sergio García</a>
              </small>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
