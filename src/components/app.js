import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PeopleState from '../context/people/people-state'
import BlogState from '../context/blog/blog-state'

import Home from './pages/home/home'
import Blog from './pages/blog/blog'
import NoMatch from './common/no-match/no-match'
import BlogPost from './pages/blog-post/blog-post'
import Team from './pages/team/team'
import Projects from './pages/projects/projects'
import SingleProject from './pages/single-project/single-project'
import Contact from './pages/contact/contact'

import 'react-tippy/dist/tippy.css'

import '../assets/styles/main.scss'
import ScrollTop from './common/scroll-top/scroll-top'


const App = () => {
  return (
    <PeopleState>
      <BlogState>
        <Router>
          <ScrollTop>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/blog" component={Blog}/>
              <Route path="/post" component={BlogPost}/>
              <Route path="/team" component={Team}/>
              <Route exact path="/projects" component={Projects}/>
              <Route path="/projects/:slug" component={SingleProject}/>
              <Route path="/contact" component={Contact}/>
              <Route component={NoMatch}/>
            </Switch>
          </ScrollTop>
        </Router>
      </BlogState>
    </PeopleState>
  )
}

export default App
