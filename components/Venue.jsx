import {Image} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import "./Venue.css";

const imageMap = {
    "ATSV-image-300.jpg": require("../assets/ATSV-image-300.jpg"),
    "reepschlagerhaus-01-300.jpg": require("../assets/reepschlagerhaus-01-300.jpg"),
    "poolstrasse41-368.jpg": require("../assets/poolstrasse41-368.jpg"),
};

export function Venue(params) {
    // Extract filename from path (e.g., "../assets/ATSV-image-300.jpg" -> "ATSV-image-300.jpg")
    const filename = params.venue.image.split('/').pop();
    const imageSource = imageMap[filename] || {uri: params.venue.image};

    return (<div className={'venue'} >
        <button onClick={(event) => params.closeModal(event)}>
            <span><MaterialCommunityIcons name="close" size={24} color="black" /></span>
        </button>
        <header className={'venueHeader'}>
            <Image
                source={imageSource}
                accessibilityLabel={params.venue.description}
                style={{width: 300, height: 300}}
            />
            <div>
                <h1>Venue</h1>
                <h3>{params.venue.name}</h3>
            </div>
        </header>
        <div className={'venueInfo'}>
                <div>{params.venue.description}</div>
                <span>Homepage: <a href={params.venue.links.website} target="_blank" rel="noreferrer" >{params.venue.links.website}</a></span>
                <span>Email: <a href={`mailto://${params.venue.links.email}`} target="_blank" rel="noreferrer">{params.venue.links.email}</a></span>
            </div>
    </div>
    );
}