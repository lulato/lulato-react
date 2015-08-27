var React = require('react');

class ProjectPage extends React.Component {
  render() {
    var img = "https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/mountains.png";
    return (
      <div>
      <div className="image-gradient-dynamic">
        <img src={img} alt="" />
        <div className="overlay"></div>
        <div className="copy">
          <p>Dynamic height container</p>
        </div>
      </div>


<article className="type-system-sans">
  <p className="type">Article Type</p>
  <h1>Article Heading</h1>
  <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, perferendis! Odit quisquam <code>code block</code> dicta illum ipsa quod natus iure aliquid necessitatibus veritatis, itaque magnam aliquam, dolorum nostrum nemo, explicabo perspiciatis nobis!</h2>
  <p className="date">30 Mar 2014</p>
  <p>
    <span>Lorem ipsum dolor sit amet</span>, 
    consectetur adipisicing elit. Consequatur a, ullam, voluptatum incidunt 
    neque doloremque vel inventore distinctio <a>Some Link </a> 
    illo quam nulla dolor alias iure impedit! Accusamus! Lorem ipsum dolor sit amet, 
    consectetur adipisicing elit. Accusamus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Consequatur, a, ullam, voluptatum incidunt neque porro numquam doloremque vel inventore distinctio 
    laudantium harum illo quam nulla dolor alias iure impedit.
    <a href="#" className="read-more">Read More</a>
  </p>
  <a href="#" className="read-more">Read More</a>
  <h3>Subheading lorem</h3>
  <p><span>Consequatur ullam, voluptatum</span> incidunt neque porro numquam doloremque vel inventore distinctio laudantium harum illo quam nulla dolor alias iure impedit. Accusamus. Consequatur, a, ullam, voluptatum incidunt neque porro numquam doloremque vel inventore distinctio laudantium harum illo quam nulla dolor alias iure impedit! Accusamus.</p>
  <hr />
  <p className="author">Author Name</p>
</article>


      </div>
    );
  }
}

module.exports = ProjectPage;