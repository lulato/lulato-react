var React = require('react');

class ProjectPage extends React.Component {
  render() {
    var img = "https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/mountains.png";
    return (
      <div className="image-gradient-dynamic">
        <img src={img} alt="" />
        <div className="overlay"></div>
        <div className="copy">
          <p>Dynamic height container</p>
        </div>
      </div>
    );
  }
}

module.exports = ProjectPage;