import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';



function LandingPage(){
  return(
    <div style={{with: '100%', margin: 'auto'}}>
    <Grid className="landing-grid">
      <Cell col={12}>
    <img
      //src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2013%2F07%2F13%2F10%2F07%2Fman-156584_640.png&f=1&nofb=1"
      className="avatar-img"
     />
     <div className="banner-text">
     <h1>FullStack web developer</h1>

      <hr/>
      <p>HTML | CSS | boostrap | JavaScript | React | Rails | Ruby | Git</p>

      <div className="social-links">

        <a href="https://www.linkedin.com/in/juanparedess/" target="_blank">
          <i className="fa fa-linkedin-square" aria-hidden="true"/>
        </a>

        <a href="https://github.com/Nerfi" target="_blank">
          <i className="fa fa-github-square" aria-hidden="true"/>
        </a>




      </div>

     </div>
    </Cell>
      </Grid>
    </div>
    );
}


export default LandingPage;
