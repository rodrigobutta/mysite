import React from 'react'
import IconList from '../../../common/icon-list/icon-list'

const icons = [
  {'svg':'laravel-plain-mono','title':'Laravel'},
  {'svg':'react-original-mono','title':'React / React Native'},
  {'svg':'nextjs-plain-mono','title':'Next.js'},
  {'svg':'vuejs-plain-mono','title':'Vue.js'},
  {'svg':'nodejs-plain-mono','title':'Node.js'},
  {'svg':'express-original-mono','title':'Express'},
  {'svg':'redux-original-mono','title':'Redux'},
  {'svg':'android-plain-mono','title':'Android Native APPs using React Native'},
  {'svg':'apple-original-mono','title':'iOS Native APPs using React Native'},

  // {'svg':'docker-plain-mono','title':'Docker'},
  {'svg':'html5-plain-mono','title':'HTML5'},
  {'svg':'css3-plain.mono','title':'CSS3'},
  {'svg':'sass-original-mono','title':'SASS'},

  {'svg':'typescript-plain-mono','title':'Typescript'},
  {'svg':'handlebars-original-mono','title':'Handlebars'},
  {'svg':'bootstrap-plain-mono','title':'Bootstrap'},
  {'svg':'jquery-plain-mono','title':'jQuery'},
  
  {'svg':'php-plain-mono','title':'PHP'},
  {'svg':'wordpress-plain-mono','title':'Wordpress'},
  {'svg':'mysql-plain-mono','title':'mySql'},
  {'svg':'redis-plain-mono','title':'Redis'},

  {'svg':'npm-original-wordmark-mono','title':'NPM'},
  {'svg':'composer-mono','title':'Composer'},
  {'svg':'webpack-plain-mono','title':'Webpack'},
  {'svg':'gulp-plain-mono','title':'Gulp'},
  {'svg':'bower-plain-mono','title':'Bower'},
  {'svg':'babel-plain-mono','title':'Babel'},
  {'svg':'yarn-original-mono','title':'Yarn'},
 
  {'svg':'rest-mono','title':'REST API'},
  {'svg':'google-plain-mono','title':'Google (Social authentication, APIs, GTM,.. )'},
  {'svg':'facebook-plain-mono','title':'Facebook API as authentication method for web applications, and Facebook Opengraph for content share'},
  {'svg':'firebase-plain-mono','title':'Firebase for APPs (Social authentication, Push notifications, Realtime database,.. )'},
 
  {'svg':'git-plain-mono','title':'GIT'},
  // {'svg':'ssh-original-wordmark-mono','title':'SSH'},
  // {'svg':'photoshop-plain-mono','title':'Photoshop'},
  // {'svg':'illustrator-plain-mono','title':'Illustrator'},
  // 'android-plain-wordmark-mono',
// 'bootstrap-plain-wordmark-mono',
// 'bower-plain-wordmark-mono',
// 'composer-wordmark-mono',
// 'css3-plain-wordmark-mono',
// 'docker-plain-wordmark-mono',
// 'express-original-wordmark-mono',
// 'git-plain-wordmark-mono',
// 'google-plain-wordmark-mono',
// 'handlebars-original-wordmark-mono',
// 'html5-plain-wordmark-mono',
// 'jquery-plain-wordmark-mono',
// 'laravel-plain-mono',
// 'laravel-plain-wordmark-mono',
// 'react-original-mono',
// 'react-original-wordmark-mono',
// 'redis-plain-wordmark-mono',
// 'ssh-original-mono',
// 'nextjs-wordmark-mono',
// 'webpack-plain-wordmark-mono',
// 'wordpress-plain-wordmark-mono',
// 'yarn-original-wordmark-mono'
]

const Technologies = (props) => {
  return (
    <section className="motivation text-md-center position-relative pb-7 pb-md-8">
      <div className="container">
        <h2>Modern technologies</h2>
        <IconList icons={icons} size="48"/>
      </div>
      <img className="rellax fly-shape fly-shape_left" data-rellax-speed="4"
           src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDYwIDYwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2MCA2MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI2NHB4IiBoZWlnaHQ9IjY0cHgiPgo8cGF0aCBkPSJNMzAsMEMxMy40NTgsMCwwLDEzLjQ1OCwwLDMwczEzLjQ1OCwzMCwzMCwzMHMzMC0xMy40NTgsMzAtMzBTNDYuNTQyLDAsMzAsMHoiIGZpbGw9IiMwMDAwMDAiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="/>
      <div className="rellax fly-shape fly-shape_right" data-rellax-speed="-1">
        <img
          src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDYwIDYwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2MCA2MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI2NHB4IiBoZWlnaHQ9IjY0cHgiPgo8cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9IiMwMDAwMDAiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="/>
      </div>
    </section>
  )
}

export default Technologies
