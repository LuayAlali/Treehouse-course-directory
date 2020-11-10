import React from 'react';
import {
  NavLink,
  Route

} from 'react-router-dom';
//  components imports
import JavaScript from './courses/JavaScript';
import CSS from './courses/CSS';
import HTML from './courses/HTML';

const Courses = () => (

  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2> 
      <ul className="course-nav">
        <li><NavLink to='/courses/html'>HTML</NavLink></li>
        <li><NavLink to='/courses/css'>CSS</NavLink></li>
        <li><NavLink  to='/courses/javascript'>JavaScript</NavLink></li>
      </ul>
    </div>
    
    {/* Write routes here... */}
 <Route path="/courses/html" component={HTML} />
 <Route path="/courses/css" component={CSS} />
 <Route path="/courses/javascript" component={JavaScript} />

  </div>
  
);

export default Courses;