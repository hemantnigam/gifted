import "./index.scss"

export default function GIFS({gifList}) {
    return (
        <div className="gifs_container">
            {gifList.map((gif, index)=><div className="gifs-item"><img data-testid='img-item' src={gif.url}/></div>)}
        </div>
    )
}
