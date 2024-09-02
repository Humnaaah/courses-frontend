
import React from 'react'
import Header from './components/Header';

import Carrousel from './components/Carrousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.scss'
import listItem1 from './styles/assets/home-icon.png';
import listItem2 from './styles/assets/profile-icon.png';
import listItem3 from './styles/assets/directory-icon.png';
import listItem4 from './styles/assets/connection-icon.png';
import listItem5 from './styles/assets/presenter-icon.png';
import listItem6 from './styles/assets/multiple-icons.png';
import detailIcon1 from "./styles/assets/duration-icon.png";
import detailIcon2 from "./styles/assets/content-icon.png";
import detailIcon3 from "./styles/assets/level-icon.png";
import detailIcon4 from "./styles/assets/release-icon.png";
import detailIcon5 from "./styles/assets/rating-icon.png";
import detailIcon6 from "./styles/assets/completed-by-icon.png";
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Detail from './components/Course/Details';



const App = () =>{
  const navList = [
    { icon: listItem1,
      title: "home",
      active:false
    },
    {icon: listItem2,
    title: "profile",
    active:true
    },
    {icon: listItem3,
    title: "directory",
    active:false
    },
    {icon: listItem4,
      title: "connection ",
      active:false
    },
    {icon: listItem5,
      title: "presenter",
      active:false
    },
    {icon: listItem6,
      title: "multiple screen ",
      active:false
    },
  ]
  const CourseInfo = [
    {
      id: 1,
      title: 'Advance Techniques with Gulpjs',
      src:'https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.webm#t=5,10',
      owner:{
        name: 'Olli Hawkins',
        position: 'Development Lead',
        avatar: '',
      },
      description:[
        {title: "Cookie Marcoon", desc:'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. '},
        {title:"Muffin", desc:'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. '},


      ],
      info:[
        {title:'Duration', detail: "14 Hours", icon:detailIcon1 },
        {title:'Content', detail: "8 Chapters", icon:detailIcon2 },
        {title:'Level', detail: "Beginner", icon:detailIcon3 },
        {title:'Release', detail: "05.11.2021", icon:detailIcon4 },
        {title:'Rating', detail: "4.8 (843)", icon:detailIcon5 },
        {title:'Completed', detail: "1.522", icon:detailIcon6},
        ],
        tags:[
          "Food (12)", "Baking (3)" , "Sweet (1)", "Molding (3)", "Pastry (5)", "Healthy (7)", "Rye (3)", "Simple (3)"],
        Badges: [{title: "Javascript Noice", progress:20},{title: "FrontEnd Apprentice", progress:40}],
        Contents: [{title: 'Dashboard', item:['abc', 'xyz', 'cde' ]},{title: 'Applications', item:['abc', 'xyz', 'cde' ]}]
    
    }
  ]
    return (
      <>
      <NavigationBar navList={navList}/>
        <div className='main'>
            <Detail info={CourseInfo}/>
            <Footer/>
        </div>
        {/* <Container fluid id="mainCont"> 
        <Header/>
        <Carrousel farmsSlider={farmsSlider}/>
        </Container> */}
      </>
    )
}

export default App