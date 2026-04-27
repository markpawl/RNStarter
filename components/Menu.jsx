import {Image} from "react-native";
import "./Menu.css";

export function Menu(params) {
    let classes = `menumodal menu ${(params.show) ? 'show' : 'hide'}`;

    let preText = 
`This app contains:
- Artist Info
- Event Info
- Set Lists
- Song Lyrics
`;
    
    return (<div className={classes} >
        <button onClick={(event) => params.closeMenu(event)}>
            <span><i className="icon-x"></i></span>
        </button>
        <header className={'menuHeader'}>
            <div>
                <h1>Event App</h1>
            </div>
        </header>
        <div className={'menuInfo'}>
                <div><pre className={'content'}>{preText}</pre></div>
                <h3>Share this App</h3>
                <Image
                    source={require("../assets/markpawl-events.vercel.app.QR-Code.png")}
                    style={{width: 250, height: 250}}
                />
                <br/>
                <h3>Contact</h3>
                <span><a href={'http://markpawl.com'} target="_blank" rel="noreferrer" >http://markpawl.com</a></span>
                <span><a href={`mailto://markpawl.music@gmail.com`} target="_blank" rel="noreferrer">markpawl.music@gmail.com</a></span>
            </div>
    </div>
    );
}