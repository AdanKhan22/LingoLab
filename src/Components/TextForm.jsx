import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleReset = () => {
    let newText = " ";
    setText(newText);
  };

  const handleReverse = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
  };

  return (
    <>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h1
            style={{ color: `${props.mode}` === `light` ? `black` : `white` }}
          >
            Enter Your Text
          </h1>
        </label>
        <textarea
          placeholder="Enter Something"
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={8}
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === `light` ? `white` : `#bbbbbb`,
          }}
        />
      </div>

      <div className="text-center">
        <button
          className="btn btn-primary mx-1 my-1"
          type="submit"
          onClick={handleUpperCase}
        >
          UpperCase
        </button>

        <button
          className="btn btn-primary mx-1 my-"
          type="submit"
          onClick={handleLowerCase}
        >
          Lowercase
        </button>

        <button
          className="btn btn-primary mx-1 my-"
          type="submit"
          onClick={handleReset}
        >
          Reset
        </button>

        <button
          className="btn btn-primary mx-1 my-"
          type="submit"
          onClick={handleReverse}
        >
          Reverse
        </button>
      </div>

      <div className="container">
        <h5 style={{ color: `${props.mode}` === `light` ? `black` : `white` }}>
          Text Summary
        </h5>
        <p style={{ color: `${props.mode}` === `light` ? `black` : `white` }}>
          {" "}
          Number of characters are {text.length}
        </p>
        <p style={{ color: `${props.mode}` === `light` ? `black` : `white` }}>
          {" "}
          Number of words are{" "}
          {text.split(" ").filter((word) => word.length !== 0).length}
        </p>
      </div>
    </>
  );
}
