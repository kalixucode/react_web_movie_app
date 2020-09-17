import React from "react";

// function Detail( {location}) {
//   console.log(location);
//   return <span>hello</span>;
// }
class Detail extends React.Component {
  componentDidMount() {
    const {location, history} = this.props;
    if (location.state === undefined){
      history.push("/");
    }
  }
  render(){
    const {location} = this.props;
    // return <span>{location.state.title}</span>;
    if (location.state) { //render함수가 componentDidMount함수보다 먼저 호출되므로 location 없다.
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }
}
export default Detail;