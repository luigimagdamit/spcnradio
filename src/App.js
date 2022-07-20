import logo from './logo.svg';
import './App.css';
import mp3 from './audio/test.mp3'
import ReactAudioPlayer from 'react-audio-player';
import songs from './audio/index'
import React from 'react';



console.log(songs)



class Radio extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.song)
  }
  render() {
    return (
      <div>
       <div class = "player">
        <div class = "top">
          <h1>{this.props.song.name}</h1>
          <h1>{this.props.song.pcn}</h1>
        </div>
        <ReactAudioPlayer
          src={this.props.song.mp3}
          autoPlay
          controls
          style={{width : "500px"}}
        />
      </div>
      </div>
    );
  }
}

class Window extends React.Component {
  constructor(props) {
    super(props);
    

    let songnames = Object.values(songs)
    const songList = songnames.map((song) => 
      <li class = "song" key = {song.name}><button onClick={() => this.handleClick(song)} value = {song.mp3}>{song.name}</button></li>
    );

    this.state = {songStore: songnames, songList: songList, currentSong: songnames[0]}
  }
  handleClick(info) {
    console.log(this.state.currentSong)
    this.state.currentSong = info
    this.forceUpdate();

  }
  render() {
    return(<div>
      <h1>Samahang Pilipino Cultural Night Radio</h1>
      <Radio song={this.state.currentSong}/>
      <h1>Song List</h1>
     <ul>{this.state.songList}</ul>
    </div>)
  }
}
function App() {
  return (
    <div class = "main">
      
      <Window />
    </div>
    
  );
}

export default App;
