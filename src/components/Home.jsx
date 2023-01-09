import React from 'react'
import mylogo from '../react.png';

function Home() {
  return (
    <div className="MyCustApp">
      <div class="header">
        <h2>ReactJS</h2>
      </div>

      <div class="row">
        <div class="column">
          <p>ReactJS is a declarative, efficient, and flexible JavaScript library for building reusable UI components. It is an open-source, component-based front end library which is responsible only for the view layer of the application. It was initially developed and maintained by Facebook and later used in its products like WhatsApp & Instagram.</p>

          <p> The main objective of ReactJS is to develop User Interfaces (UI) that improves the speed of the apps. It uses virtual DOM (JavaScript object), which improves the performance of the app. The JavaScript virtual DOM is faster than the regular DOM. We can use ReactJS on the client and server-side as well as with other frameworks. It uses component and data patterns that improve readability and helps to maintain larger apps.</p>

          <p>
            <b>Create React App</b>
            <br></br>
            npx create-react-app my-react-app

            <br></br>
            <b>Run the React Application</b>
            <br></br>
            cd my-react-app
            <br></br>
            npm start
          </p>
        </div>
        <div class="column1">
          <img src={mylogo} alt="logo" />
        </div>
      </div>

      <div class="footer">
        <h6>My-React-App © pvshafeeq</h6>
      </div>
    </div>
  )
}

export default Home