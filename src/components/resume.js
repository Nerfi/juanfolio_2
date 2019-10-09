import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';



class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2013%2F07%2F13%2F10%2F07%2Fman-156584_640.png&f=1&nofb=1"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Juan Paredes</h2>
            <h4 style={{color: 'grey'}}>Software Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>“Experience is the name everyone gives to their mistakes." – Oscar Wilde</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>

          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2018}
              endYear={2018}
              schoolName="LeWagon"
              schoolDescription="9-week intensive coding
             bootcamp learning HTML, CSS, Bootstrap, JavaScript ES2015, SQL, git, GitHub, Heroku and Ruby on Rails.
             Designed, Implemented and Shipped to production a clone of AirBnB and a Rails prototype"
             />

                <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Experience</h2>

              <Experience
                startYear={2018}
                endYear={2018}
                jobName="Foodie"
                jobDescription="App developed as our final project on lewagon's bootcamp, app developed in a team of 4 lewagon students. Developed in RoR as framework, Ruby on the back-end, JS, boostrap HTML,SCC on the front-end and hosted on Heroku. With this app we try to solve the problem of having many foods to choose,
                making and UI similar to the one Tinder has.
                I took care of the front-end part"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="Javascript"
                progress={60}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="Rails"
                    progress={80}
                    />
                    <Skills
                      skill="React"
                      progress={45}
                      />
                      <Skills
                      skill="Ruby"
                      progress={65}
                      />
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Resume;
