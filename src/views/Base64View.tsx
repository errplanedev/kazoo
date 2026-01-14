import { useState } from "react";

export default function Base64View() {
  const [encoded, setEncoded] = useState("base64 will show up here");
  const [decoded, setDecoded] = useState("text will show up here");

  return (
    <>
      <h1>base64 encoder</h1>
      <textarea
        placeholder="enter normal text to be encoded"
        rows={5}
        cols={40}
        onChange={(e) => {
          setEncoded(btoa(e.target.value));
        }}
      />
      <pre>{encoded}</pre>
      <h1>base64 decoder</h1>
      <textarea
        placeholder="enter base64 to be decoded"
        rows={5}
        cols={40}
        onChange={(e) => {
          setDecoded(atob(e.target.value));
        }}
      />
      <pre>{decoded}</pre>
    </>
  );
}
