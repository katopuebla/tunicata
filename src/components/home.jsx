import React from "react";
import { storage } from "./firebase";

class Home extends React.Component {
  render() {
    const imageStorage = storage
      .ref("images")
      .child("Tunicata.jpg")
      .getDownloadURL()
      .then(url => {
        console.log(url);
      });

    return (
      <div>
        holas
        {imageStorage}
      </div>
    );
  }
}

export default Home;
