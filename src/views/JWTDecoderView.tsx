import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { js as beautify } from "js-beautify";

export default function JWTDecoderView() {
  const [decodedJSON, setDecodedJSON] = useState(
    "decoded JSON will appear here",
  );
  const [jwt, setJwt] = useState("");

  return (
    <>
      <h1>jwt decoder</h1>
      <input
        type="text"
        placeholder="jwt"
        value={jwt}
        onChange={(e) => {
          const value = e.target.value;
          setJwt(value);

          try {
            const header = jwtDecode(value, { header: true });
            const payload = jwtDecode(value);
            const seal = { header, payload };

            const beautified = beautify(JSON.stringify(seal), {
              indent_size: 2,
              space_in_empty_paren: true,
            });
            setDecodedJSON(beautified);
          } catch (err) {
            setDecodedJSON("invalid JWT");
          }
        }}
      />
      <br />
      <br />
      <pre>{decodedJSON}</pre>
    </>
  );
}
