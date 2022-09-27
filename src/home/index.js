import GIFS from "../gifs";

export default function Home({handler, gifList}) {
    return (
        <div className="home">
            <div className="search">
                <input type="text" onChange={handler} data-testid="input-search"/>
            </div>
            {gifList && gifList.length>0 &&<GIFS gifList={gifList}/>}
        </div>
    )
}
