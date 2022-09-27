import './App.scss';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"
import Home from "./home";
import Trending from "./trending";
import {useState} from "react";

function App() {
    const [gifList, setGifsList] = useState([])
    const searchGifHandler = (e) => {

        const api_key = '9FXt8HLKzm9QFXYG5B81sllxh5qtGj0O';
        const q = e.target.value
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${q}`

        fetch(url,)
        .then(response=>response.json())
        .then(result=>{
            const imageList = result.data.reduce((list, image)=>{
                const imageObj = image.images.preview_webp
                if(imageObj) {
                    list = [...list, imageObj]
                }
                return list
            },[])
            setGifsList(imageList)
        })
    }
  return (
      <Router>
        <div className="gifted" data-testid="app">
          <header className="gifted__header">
            <div className="logo">GIF'ted</div>
            <div className="nav-link">
                <Link to="/trendings">Trendings</Link>
                <Link to="/">Home</Link>
            </div>
          </header>
          <main>
            <Switch>
                <Route exact path="/" ><Home gifList={gifList} handler={searchGifHandler}/></Route>
                <Route exact path="/trendings"><Trending gifList={gifList} handler={searchGifHandler}/></Route>
            </Switch>
          </main>
        </div>
    </Router>
  );
}

export default App;
