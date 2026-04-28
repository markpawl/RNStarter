import { useState } from 'react';
import { styles } from "./PageContentStyles"
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const PageContent = (params) => {
    let [language, setLanguage] = useState("en");

    function onLanguageButtonPress(event, lang) {
        setLanguage(lang);
        event.stopPropagation();
    }

    function onClickNext(event) {
        params.onNext();
        event.stopPropagation();
    }

    function onClickPrevious(event) {
        params.onPrevious();
        event.stopPropagation();
    }

    function getArtist() {
        if (params.current.song.artist) {
            return params.current.song.artist;
        } else {
            return params.current.event.artist.name;
        }
    }

    function getLyrics() {
        switch (language) {
            case "de": // german
                return params.current.song["lyrics-de"]
            default: // english
                return params.current.song["lyrics-en"]
        }
    }

    function getCaretIcon(showVariable) {
        if (showVariable) {
            return "chevron-down";
        } else {
            return "chevron-right";
        }
    }

    return <>

        <View  name={"pageContent"} style={styles.pageContent} >
            <Text  style={styles.eventHeader} onTouch={params.toggleVenueModal} >
                <Text onClick={params.toggleVenueModal}>
                    <MaterialCommunityIcons name={getCaretIcon(params.showVenue)} size={20} color="black" />
                </Text>
                <Text >
                    &nbsp;{params.current.event.title} @ {params.event.venue.name}
                </Text>
            </Text>
            {/* Song Header */}
            <View style={[styles.container, styles.songHeader]} >

                <View style={styles.leftGroup}>
                    <Text>
                    <Text onClick={params.toggleSidebar}>                       
                        <MaterialCommunityIcons name={getCaretIcon(params.showSidebar)} size={20} color="black" />
                    </Text>                  
                    <Text className={"songTitle"} onClick={params.toggleSidebar} >
                        &nbsp;
                        <Text style={{ fontSize: "medium", fontWeight: "normal" }}>{params.current.song.title} </Text>
                        &nbsp;
                    </Text>
                    <Text style={{ fontSize: "small", paddingTop: "4px" }}>({params.current.position})&nbsp;</Text>
                    <button
                        onClick={(event) => onClickPrevious(event)}
                        style={(params.isFirst) ? { backgroundColor: "lightgrey" } : {}}
                    >
                        <Text><MaterialCommunityIcons name="chevron-left" size={20} color="black" /></Text>
                    </button>
                    &nbsp;
                    <button
                        onClick={(event) => onClickNext(event)}
                        style={(params.isLast) ? { backgroundColor: "lightgrey" } : {}}
                    >
                        <Text><MaterialCommunityIcons name="chevron-right" size={20} color="black" /></Text>
                    </button>
                    </Text>
                </View>
                <View style={styles.rightGroup}>
                    <View style={{ flex: 1, flexDirection: 'row' }} >
                        <TouchableOpacity onPress={(event) => onLanguageButtonPress(event, "en")} >
                            <Text
                                style={language === 'en' ? styles.borderBlack : styles.borderWhite}
                                alt="american flag"
                            >🇺🇸</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={(event) => onLanguageButtonPress(event, "de")} >
                            <Text
                                style={language === 'de' ? styles.borderBlack : styles.borderWhite}
                                alt="germany flag"
                            >🇩🇪</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <pre className={'preContent'}>{getLyrics() + " (c) " + getArtist()}</pre>
            <View style={styles.pageEnd}></View>
        </View>
    </>
}