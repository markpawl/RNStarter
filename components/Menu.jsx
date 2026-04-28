import { Image } from "react-native";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./MenuStyles.jsx";

export function Menu(params) {
    let visibility = (params.show) ? styles.show : styles.hidden;
    let preText =
        `This app contains:
- Artist Info
- Event Info
- Set Lists
- Song Lyrics
`;

    return (<View style={[styles.menumodal, styles.menu, visibility]} >
        <button onClick={(event) => params.closeMenu(event)}>
            <span><MaterialCommunityIcons name="close" size={24} color="black" /></span>
        </button>
        <View style={styles.menuHeader}>
            <Text>
                <h1>Event App</h1>
            </Text>
        </View>
        <View style={styles.menuInfo}>
            <div><pre className={'content'}>{preText}</pre></div>
            <h3>Share this App</h3>
            <Image
                source={require("../assets/markpawl-events.vercel.app.QR-Code.png")}
                style={{ width: 250, height: 250 }}
            />
            <br />
            <h3>Contact</h3>
            <span><a href={'http://markpawl.com'} target="_blank" rel="noreferrer" >http://markpawl.com</a></span>
            <span><a href={`mailto://markpawl.music@gmail.com`} target="_blank" rel="noreferrer">markpawl.music@gmail.com</a></span>
        </View>
    </View>
    );
}