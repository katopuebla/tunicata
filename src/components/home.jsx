import React, { useState } from "react";
import { storage } from "../firebase";

function Home() {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);

  storage
    .ref("images")
    .child("Tunicata.jpg")
    .getDownloadURL()
    .then(url => {
      setUrl(url);
    });

  const imageUpdate = storage.ref(`images/x`).put(image);
  imageUpdate.on(
    "state_changed",
    snapshot => {
      const process = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      setProcess(process);
    },
    error => {
      console.log(error);
    },
    () => {
      /*storage
        .ref("images")
        .child("Tunicata.jpg")
        .getDownloadURL()
        .then(url => {
          setUrl(url);
        });*/
    }
  );

  return (
    <div>
      <div className="jumbotron">
        <div class="container">
          <img src={url} alt="logo" width="350px" class="mx-auto d-block" />
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
