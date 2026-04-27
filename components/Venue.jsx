import {Image} from "react-native";
import "./Venue.css";

export function Venue(params) {

    return (<div className={'venue'} >
        <button onClick={(event) => params.closeModal(event)}>
            <span><i className="icon-x"></i></span>
        </button>
        <header className={'venueHeader'}>
            <Image
                source={{uri: params.venue.image}}
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