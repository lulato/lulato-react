var React = require('react');


class Hero extends React.Component {

  render() {
    var logoImage = "https://raw.githubusercontent.com/lulato/lulato-components/master/static/images/lulato-logo.png";
    var headline = "Short description of Product";
    var paragraph = "Lulato is a one man design studio based in Miami Beach. I build websites as well as mobile apps.";
    var cta = "Learn more about what I do";

    return (
      <div className="hero">
        <div className="hero-inner">
          <a href="" className="hero-logo">
            <img src={logoImage} alt="Logo Image" />
          </a>
          <div className="hero-copy">
            <p>{paragraph}</p>
          </div>
          <a className="cta" href="#">{cta}</a>
        </div>
      </div>
    )
  }
}

module.exports = Hero;