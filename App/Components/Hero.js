var React = require('react');

// var logoImage = 'https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_logo_1.png';
// var headline = "Short description of Product";
// var paragraph = "A few reasons why this product is worth using, who it's for and why they need it.";

class Hero extends React.Component {


  render() {
    var logoImage = "https://raw.githubusercontent.com/lulato/lulato-components/master/static/images/lulato-logo.png";
    var headline = "Short description of Product";
    var paragraph = "A few reasons why this product is worth using, who it's for and why they need it.";

    return (
      <div className="hero">
        <div className="hero-inner">
          <a href="" className="hero-logo">
            <img src={logoImage} alt="Logo Image" />
          </a>
          <div className="hero-copy">
            <h1>{headline}</h1>
            <p>{paragraph}</p>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Hero;