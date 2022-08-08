import "./App.css";
import React from "react";
import { Navbar } from "./components/Navbar";

// function App() {
//   return (<div className="App">
//     <Navbar/>

//   </div>)
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = { like: 0, dislike: 0, subscribe: 0 };
  }
  render() {
    return (
      <div>
        <h1 className="text-amber-300 my-5 text-center">
          like{" "}
          <span className="bg-red-400 rounded-lg px-3 text-white shadow-lg shadow-red-500/50">
            {this.state.like}
          </span>
        </h1>
        <h1 className="text-amber-300 my-5 text-center">
          Subscribers{" "}
          <span className="bg-purple-400 rounded-lg px-3 text-white shadow-lg shadow-purple-500/50">
            {this.state.subscribe}
          </span>
        </h1>
        <div className="flex items-center justify-center">
          <button
            className="mx-3 px-2 rounded-full text-white  bg-sky-400 text-whitehover:drop-shadow-2xl before: hover:scale-105 shadow-lg shadow-blue-500/50  "
            onClick={() => {
              this.setState({ like: this.state.like + 1 });
            }}
          >
            Like
          </button>
          <button
            className="mx-3 px-2 rounded-full bg-sky-400 text-white  hover:drop-shadow-2xl  hover:scale-105 shadow-lg shadow-blue-500/50 "
            onClick={() => {
              this.setState({ like: (this.state.like <= 0)?0:this.state.like - 1});
            }}
          >
            Dislike
          </button>
          <button
            className="mx-3 px-2 rounded-full bg-sky-400 text-white hover:drop-shadow-2xl  hover:scale-105 shadow-lg shadow-blue-500/50  "
            onClick={() => {
              this.setState({ subscribe: this.state.subscribe + 1 });
            }}
          >
            subscribe
          </button>
          <button
            className="mx-3 px-2 rounded-full bg-sky-400 text-white hover:drop-shadow-2xl   hover:scale-105 shadow-lg shadow-blue-500/50 "
            onClick={() => {
              this.setState({ like: 0, subscribe: 0 });
            }}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default App;
