import {Image} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import "./Artist.css";

const imageMap = {
    "markpawl-01-300.jpg": require("../assets/markpawl-01-300.jpg"),
};

export function Artist(params) {
    const filename = params.artist.image.split('/').pop();
    const imageSource = imageMap[filename] || require("../assets/markpawl-01-300.jpg");

    return (<div className={'artist'} >
        <button onClick={(event) => params.closeModal(event)}>
            <span>
                <MaterialCommunityIcons name="close" size={24} color="black" />
            </span>
        </button>
        <header className={'artistHeader'}>
            <Image 
                source={imageSource}
                accessibilityLabel={params.artist.description}
                style={{width: 300, height: 300}}
            />            
            <div>
                <h1>Artist</h1>
                <h3>{params.artist.name}</h3>
            </div>
        </header>
        <div className={'artistInfo'}>
                <div>{params.artist.description}</div>
                <span>Homepage: <a href={params.artist.links.website} target="_blank" rel="noreferrer" >markpawl.com</a></span>
                <span>Bandcamp: <a href={params.artist.links.bandcamp} target="_blank" rel="noreferrer" >markpaw.bandcamp.com</a></span>
                <span>Email: <a href={`mailto://${params.artist.links.email}`} target="_blank" rel="noreferrer">markpawl.music@gmail.com</a></span>
            </div>
        <p className={'bio'}>{`${params.artist.biography}`}</p>
    </div>
    );
}