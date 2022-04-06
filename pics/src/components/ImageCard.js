import React from "react";

class ImageCard extends React.Component {
  state = { spans: 0 };

  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    // console.log(this.imageRef.current.clientHeight);
    const spans = Math.ceil(this.imageRef.current.clientHeight / 10);
    console.log(spans);
    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
