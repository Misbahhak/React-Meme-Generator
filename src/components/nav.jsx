import React from "react";

export default function Nav() {
  return (
    <div className="header">
      <a href="#default" class="logo">
        <img src="../images/troll-face1.png" className="header--image" />
        Meme Generator
      </a>
      <div className="header-right">
        <a className="active" href="#home">
          A Project by Misbah-Hak
        </a>
      </div>
    </div>
  );
}

//   <a href="../images/troll-face1.png" className="logo">
//     <img src="../images/troll-face1.png" className="header--image" />
//     Meme Generator
//   </a>

//   <div className="header-right">
//     <a href="">A Project by Misbah Hak</a>
//   </div>
//   {/* <h2 className="header--title">Meme Generator</h2>
//   <h4 className="header--project">
//     A Project by <strong> Misbah Hak</strong>
//   </h4> */}
// </div>
