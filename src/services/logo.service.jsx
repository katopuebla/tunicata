import React from "react";

function Images() {
  const imageStorage = storage
    .ref("images")
    .child("Tunicata.jpg")
    .getDownloadURL()
    .then(url => {
      console.log(url);
    });

  return <div />;
}
