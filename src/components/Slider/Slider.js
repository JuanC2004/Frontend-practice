import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import "./Slider.scss";

class SliderComponent extends React.Component {
    render() {
        var settings = {
            dots: true
        };
    return (
        <div className="container" id="container">
            <Slider {...settings}>
                <div>
                <img src="http://placekitten.com/g/400/200" />
                </div>
                <div>
                <img src="http://placekitten.com/g/400/200" />
                </div>
                <div>
                <img src="http://placekitten.com/g/400/200" />
                </div>
                <div>
                <img src="http://placekitten.com/g/400/200" />
                </div>
            </Slider>
        </div>
    );
    }
}

ReactDOM.render(<SliderComponent />, document.getElementById("container"));
export default SliderComponent;
