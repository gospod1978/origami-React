import { Component } from 'react'
import { Route, Link, NavLink, Redirect, Switch } from 'react-router-dom'

import * as postService from './services/postService'

import Header from './components/Header'
import Menu from './components/Menu'
import Main from './components/Main'
import Footer from './components/Footer'
import About from './components/About'
import ContactUs from './components/ContactUs'

import style from './App.module.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      selectedPost: null,
      heading: 'Sooooooooome Heading'
    }
    this.onMenuItemClick = this.onMenuItemClick.bind(this)
  }

  componentDidMount() {
    postService.getAll()
      .then(posts => {
        this.setState({posts})
      })
  }

  onMenuItemClick(id) {
    this.setState({selectedPost: id})
  }

  getPosts() {
    if (!this.state.selectedPost) {
      return this.state.posts
    } else {
      const result = [this.state.posts.find(x => x.id == this.state.selectedPost)]
      if (result[0] != undefined) {
        return result
      } else {
        return this.state.posts
      }
    }
  }

  render() {
    return(
      <div className={style.app}>
        <Header />
        <div className={style.container}>
            <Menu onMenuItemClick={this.onMenuItemClick} />
            <Switch>
              <Route path="/" exact>
                <Main posts={this.getPosts()} heading={this.state.heading}/>
              </Route>
              <Route path="/about/:name" component={About}/>
              <Route path="/contact-us" component={ContactUs}/>
              <Route render={() => <div className="main-container"><h1>Error Page</h1></div>} />
            </Switch>
        </div>
        <Footer />
    </div>
    )
  }
}

export default App;
