import { Image, View, Text, TouchableOpacity, Modal, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./MenuStyles.jsx";

export function Menu(params) {
    const preText =
        `This app contains:
- Artist Info
- Event Info
- Set Lists
- Song Lyrics
`;
    const Spacer = () => <View style={{ height: 20 }} />;

    return (
        <Modal
            transparent={false}
            visible={params.show}
            animationType="slide"
            onRequestClose={params.closeMenu}
        >
            <View style={styles.menuFullScreen}>
                <View style={styles.menuHeader}>
                    <TouchableOpacity onPress={params.closeMenu} style={styles.closeButton}>
                        <MaterialCommunityIcons name="close" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.h1}>Event App</Text>
                </View>
                
                <ScrollView style={styles.menuContent}>
                    <Text style={styles.pre}>{preText}</Text>
                    
                    <Text style={styles.menuInfoH3}>Share this App</Text>
                    <Image
                        source={require("../assets/markpawl-events.vercel.app.QR-Code.png")}
                        style={{ width: 250, height: 250 }}
                    />
                    <Spacer />
                    
                    <Text style={styles.h3}>Contact</Text>
                    <Text style={styles.link}>http://markpawl.com</Text>
                    <Text style={styles.link}>markpawl.music@gmail.com</Text>
                </ScrollView>
            </View>
        </Modal>
    );
}