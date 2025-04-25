import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="loader">
          <p>loading</p>
          <div className="words">
            <span className="word">Ai Suggestions</span>
            <span className="word">Cards</span>
            <span className="word">tailored</span>
            <span className="word">for</span>
            <span className="word">you</span>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    /* color used to softly clip top and bottom of the .words container */
    --bg-color: none;
    background-color: var(--bg-color);
    padding: 1rem 2rem;
    border-radius: 1.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .loader {
    color: rgb(0, 0, 0);
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 32px;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    height: 40px;
    padding: 10px 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border-radius: 8px;
  }

  .words {
    overflow: hidden;
    position: relative;
  }
  .words::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      var(--bg-color) 10%,
      transparent 30%,
      transparent 70%,
      var(--bg-color) 90%
    );
    z-index: 20;
  }

  .word {
    display: block;
    height: 100%;
    font-size: 32px;
    padding-left: 12px;
    color: #0d2b4e;
    animation: spin_4991 5s infinite;
    font-weight: 900;
  }

  @keyframes spin_4991 {
    0% {
      transform: translateY(0%);
    }
    20% {
      transform: translateY(0%); /* "AI Suggestions" stays visible longer */
    }
    30% {
      transform: translateY(-100%); /* "Cards" */
    }
    50% {
      transform: translateY(-100%); /* "Cards" stays visible */
    }
    60% {
      transform: translateY(-200%); /* "tailored" */
    }
    70% {
      transform: translateY(-200%); /* "tailored" stays visible */
    }
    80% {
      transform: translateY(-300%); /* "for" */
    }
    90% {
      transform: translateY(-300%); /* "for" stays visible */
    }
    100% {
      transform: translateY(-400%); /* "you" */
    }
  }
`;

export default Loader;
