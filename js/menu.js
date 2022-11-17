import React from 'react';
import ReactDOM from 'react-dom';

class Menu extends React.Component{
  render() {

    // let style = {
    //         width: this.props.headerWidth
    //     },
    //     headers = [];

    // this.props.data.forEach((category, index) => headers.push(<span className='header' style={style} key={index}>{category.category}</span>));

    return (
        <div className='Menu'>
          <h1>Trivia Game</h1>
          <div id="startBtn">Start</div>
        </div>
    );
  }
};

ReactDOM.render(<App/>, document.getElementById('menu'));