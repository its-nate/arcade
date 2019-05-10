import React from 'react';
import './style.css'

class Brickbreaker extends React.Component {
    componentDidMount() {

        let script = document.createElement("script");
    
        script.src = "./js/brickbreaker/brickbreaker.js";    
    
        //check if the script tags have not yet been added
        let scriptTags = document.getElementsByTagName('script');
        let scriptSources = [];
        for (var i = 0; i < scriptTags.length; i++) {
          scriptSources.push(scriptTags[i].outerHTML);
        }
    
        //turn script tage into strings so they can strictly match the scriptSources array
        let scriptstring = `<script src="./js/brickbreaker/brickbreaker.js"></script>`
    
        if (scriptSources.indexOf(scriptstring) === -1) {
          document.body.appendChild(script);
        }
      }

    render() {
        return (
            <div>
                <canvas id='brickbreakercanvas' width='800' height='400'></canvas>
                <h3>Score: <span id='brickbreakerscore'>0</span></h3>
                <h3>Level: <span id='brickbreakerlevel'>1</span></h3>
                <h5 id='directions'>Press the left or right arrow to begin.</h5>
                <a href='/brickbreaker'><button id='brickbreakerresetbutton'>Play Again</button></a>
                <script src="./brickbreaker.js"></script>
            </div>
        )
    }
}

export default Brickbreaker;

