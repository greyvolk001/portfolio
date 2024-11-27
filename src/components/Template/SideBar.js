import React from 'react';

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <header>
        <h2>Thomas Andersen</h2>
        <p>P. Knudsens Gade 10, Copenhagen, Denmark</p>
      </header>
    </section>

    <section className="blurb">
      <h2>About me</h2>
      <p>
        With over 9 years of professional experience in web development, I enjoy building state-of-art products using Python and its frameworks such as Django, Flask and FastAPI.
        <br/>
        I also mastered JavaScript/TypeScript, as well as their frameworks including Node.js/Express.js for backend and React, Vue and Angular for frontend side.
        <br/>
        I'm also proud of having a mature experience working with the cloud platforms such as AWS, Azure, and GCP.
        <br/>
        My passion to pursue the perfection has driven me to stand beyond my limits, meeting excellence all the time.
      </p>
    </section>
  </section>
);

export default SideBar;
