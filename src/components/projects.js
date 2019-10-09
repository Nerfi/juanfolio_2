import React, {Component} from 'react';
import { Tabs,Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button,IconButton, CardMenu  }  from 'react-mdl';



class Projects extends Component{
  constructor(props) {
    super(props);
    this.state = { activeTab: 0};
  }

  toggleCategories(){
    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
         <Card shadow={5} style={{width: '330px', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.dribbble.com%2Fusers%2F146798%2Fscreenshots%2F2484828%2Freact_illo_800x600.png&f=1&nofb=1) center / cover'}}>React</CardTitle>
        <CardText>React projects, dont forget to write something in here</CardText>
        <CardActions border >
        <Button colored>Github</Button>

        </CardActions>

        <CardMenu style={{color: '#fff'}}>
        <IconButton name="share"/>
        </CardMenu>

       </Card>

      {/* Project 2*/}
         <Card shadow={5} style={{width: '330px', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.dribbble.com%2Fusers%2F146798%2Fscreenshots%2F2484828%2Freact_illo_800x600.png&f=1&nofb=1) center / cover'}}>React</CardTitle>
        <CardText>React projects, dont forget to write something in here</CardText>
        <CardActions border >
        <Button colored>Github</Button>

        </CardActions>

        <CardMenu style={{color: '#fff'}}>
        <IconButton name="share"/>
        </CardMenu>

       </Card>

     {/* project 3 */ }


     <Card shadow={5} style={{width: '330px', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.dribbble.com%2Fusers%2F146798%2Fscreenshots%2F2484828%2Freact_illo_800x600.png&f=1&nofb=1) center / cover'}}>React</CardTitle>
        <CardText>React projects, dont forget to write something in here</CardText>
        <CardActions border >
        <Button colored>Github</Button>

        </CardActions>

        <CardMenu style={{color: '#fff'}}>
        <IconButton name="share"/>
        </CardMenu>

       </Card>

        </div>


        )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>This is Ruby </h1></div>
        )
    } else if (this.state.activeTab === 2) {
      return (
        <div><h1>This is Ruby on Rails</h1></div>
        )
    } else if (this.state.activeTab === 3) {
      return (
        <div><h1>This is JavaScript</h1></div>
        )
    }

  }

  render(){
    return(
      <div className="category-tabs">
      <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} >

      <Tab>React</Tab>
      <Tab>Ruby</Tab>
      <Tab>Ruby on Rails</Tab>

      <Tab>JavaScript</Tab>

      </Tabs>

      <section className="projects-grid">
        <Grid>
        <Cell col={12}>
        <div className="content">{this.toggleCategories()}</div>

        </Cell>

        </Grid>

      </section>

      </div>
    )
  }
}


export default Projects;
