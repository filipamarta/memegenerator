import React from "react";

function MemeGeneratorUI({data, handleChange, handleSubmit}) {
  return (
    <div className="meme-wrapper">
      <form className="meme-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="topText"
          value={data.topText}
          onChange={handleChange}
          placeholder="Top Text"
        />
        <input
          type="text"
          name="bottomText"
          value={data.bottomText}
          onChange={handleChange}
          placeholder="Bottom Text"
        />
        <button type="submit">Generate!</button>
      </form>
      <div className="meme">
        <h2 className="top">{data.topText}</h2>
        <img src={data.image} alt="meme image" />
        <h2 className="bottom">{data.bottomText}</h2>
      </div>
    </div>
  );
}

export default MemeGeneratorUI;
