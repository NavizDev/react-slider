/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import SliderContent from "../SliderContent/SliderContent";
import Slide from "../Slide/Slide";
import Arrow from "../Arrow/Arrow";
import Dots from "../Dot/Dot";

/**
 * @function Slider
 */
const Slider = props => {
  const [state, setState] = React.useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45
  });
  const getWidth = () => window.innerWidth;
  const nextSlide = () => {
    const { activeIndex } = state;
    if (activeIndex === props.slides.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * getWidth()
    });
  };

  const prevSlide = () => {
    const { activeIndex } = state;
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (props.slides.length - 1) * getWidth(),
        activeIndex: props.slides.length - 1
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * getWidth()
    });
  };

  return (
    <div css={SliderCSS}>
      <SliderContent
        translate={state.translate}
        transition={state.transition}
        width={getWidth() * props.slides.length}
      >
        {props.slides.map((slide, i) => (
          <Slide key={slide + i} content={slide} />
        ))}
      </SliderContent>

      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />
      <Dots slides={props.slides} activeIndex={state.activeIndex} />
    </div>
  );
};
const SliderCSS = css`
  position: relative;
  height: 80vh;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
`;
export default Slider;
