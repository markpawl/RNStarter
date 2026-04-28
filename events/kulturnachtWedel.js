import {markPawlowski} from "../artists";
import {setLists} from "../songs";

const eventObject = {
    "title": "Kulturnacht Wedel", 
    "venue": {
        "name": "Reepschlägerhaus",
        "description": "Historic location in the town of Wedel",
        "location": "Wedel, Germany",
        "image": "../assets/reepschlagerhaus-01-300.jpg",
        "links": {
            "website": "https://reepschlaegerhaus.de/",
            "email": "Info@reepschlaegerhaus.de"
        }
    },    
    "artist": {
        "name": "Mark Pawlowski",
        "description": "Singer songwriter from the USA, living in Hamburg Germany",
        "biography": markPawlowski,
        "image": "../assets/markpawl-01-300.jpg",
        "links": {
            "website": "http://www.markpawl.com",
            "bandcamp": "https://markpaw.bandcamp.com/",
            "email": "markpawl.music@gmail.com",
            "videos": "https://www.markpawl.com/videos"
        }
    },
    "sets": [
        { "name": "A", "time":"5:30-6:00", "songs": setLists['songsA'] },
        { "name": "B", "time":"6:30-7:00", "songs": setLists['songsB'] },
        { "name": "C", "time":"7:30-8:00", "songs": setLists['songsC'] },
        { "name": "D", "time":"Other...", "songs": setLists['songsD'] },
    ]
}

export default eventObject;