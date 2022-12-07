import { useState } from "react";
import "./styles.css";
const emojiDictionary = {
  "🙂": "smiling",
  "😳": "disbelief",
  "🙁": "sad",
  "❤️": "love",
  "😑": "annoyed",
  "😀": "laughing",
  "😎": "cool",
  "🥵": "hot face",
  "🥶": "cold face",
  "😭": "crying",
  "🤒": "sick"
};
var emojisWeKnow = Object.keys(emojiDictionary);
export default function App() {
  var [meaning, setChangeHandler] = useState("");

  function inputEmojiHandler(event) {
    var inputelement = event.target.value;
    var meaning = emojiDictionary[inputelement];
    if (meaning === undefined) {
      meaning = "we dont have this in database";
    }

    setChangeHandler(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];

    setChangeHandler(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Identifier </h1>
      <input onChange={inputEmojiHandler}></input>
      <div>{meaning}</div>
      <h3>Emojis We know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "larger", cursor: "Pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
