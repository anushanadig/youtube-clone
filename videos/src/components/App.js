import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";

class App extends React.Component {
  state = {
    videos: []
  };

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    console.log(response);
    this.setState({ videos: response.data.items });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <p>I have videos of length {this.state.videos.length}</p>
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
