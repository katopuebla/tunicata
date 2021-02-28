import React, { useState } from "react";
import { storage } from "../firebase";

function Home() {
  const imageMain =
    "https://firebasestorage.googleapis.com/v0/b/tunicata-web.appspot.com/o/images%2FTunicata.jpg?alt=media&token=06ef0868-51b0-42b1-a7b9-1bf819e4b813";
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <div className="jumbotron">
        <div class="container">
          <img
            src={imageMain}
            alt="logo"
            width="350px"
            class="mx-auto d-block"
          />
        </div>
      </div>

      <div className="container">
        <p>Esta página está diseñada para mostrar los catalogos</p>
        <blockquote class="blockquote">
          <p>
            Esta página está diseñada para mostrar los catalogos de temparada y
            distintos productos para su interes.
          </p>
          <footer class="blockquote-footer">
            entregas de 1 a 2 días bajo pedido.
          </footer>
        </blockquote>
      </div>
    </div>
  );
}

export default Home;
