import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// import './App.css';
import events from './events';
import { SetList } from './components/SetList';
import { PageContent } from './components/PageContent';
import { Artist } from './components/Artist';
import { Venue } from './components/Venue';
import { Menu } from './components/Menu';

const event = events["houseConcert3"];

const styles = StyleSheet.create({

    // ul — use a <View> instead of <ul> in RN
    list: {
        padding: 0,
        margin: 5,
        // list-style: none is irrelevant in RN, there are no list bullets
    },

    // button — apply to <TouchableOpacity> or <Button> wrapper View
    button: {
        borderRadius: 6,          // 20% of 30px height ≈ 6
        borderColor: 'rgb(179, 137, 86)',
        borderWidth: 1,           // borderColor alone does nothing, borderWidth is required
        height: 30,
    },

    // hide/show — display:none/block has no direct RN equivalent
    // in RN use conditional rendering instead:
    // {isVisible && <View>...</View>}
    // or conditionally apply: style={isHidden ? { display: 'none' } : {}}
    hide: {
        display: 'none',          // this does work in RN as a special case
    },
    // show has no RN equivalent — just omit the hide style to show
    bolded: {
        fontWeight: 'bold',
    },

    title: {
        fontWeight: 'bold',
        backgroundColor: '#FFE4C4FF', // Bisque with FF (opaque) alpha channel
    },

    artistTitle: {
        fontWeight: 'bold',
        fontSize: 20,        // 'larger' has no RN equivalent, pick a concrete size
        marginLeft: 10,
        color: 'white',
        // width: 'auto' is the default in RN, so omit it
    },

    appHeader: {
        backgroundColor: '#D2691E',
        flexDirection: 'row', // flex is on by default, but RN defaults to 'column' so set 'row' if you want horizontal like a typical header
        alignItems: 'center',
        // justifyContent: 'normal' has no RN equivalent, omit it (defaults to 'flex-start')
        padding: 5,
    },

    modalOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    setlistmodal: {
        backgroundColor: '#FFFFFFFF', // White with FF (opaque) alpha channel
        borderRadius: 8,
        padding: 16,
    },

    venuemodal: {
        backgroundColor: '#FFFFFFFF', // White with FF (opaque) alpha channel
        borderRadius: 8,
        padding: 16,
    },

    artistmodal: {
        backgroundColor: '#FFFFFFFF', // White with FF (opaque) alpha channel
        borderRadius: 8,
        padding: 16,
    },

    hidden: {
        display: 'none',
    },

    bordered: {
        borderWidth: 2,
        borderColor: '#D2691E',
        borderRadius: 4,
        padding: 10,
    },

});

const ModalWrapper = (params: any) => {
    return (
        <Modal
            transparent={true}
            visible={params.show}
            animationType="fade"
        >
            <View style={[styles.modalOverlay, styles.setlistmodal, params.show ? {} : styles.hidden]}>
                {params.children}
            </View>
        </Modal>
    );
};

const VenueModal = (params: any) => {
    let modClasses = `venuemodal ${(params.show) ? 'show' : 'hide'}`;
    return (
        <View style={[styles.modalOverlay, styles.venuemodal, params.show ? {} : styles.hidden]}>
            {params.children}
        </View>
    );
};

const ArtistModal = (params: any) => {
    let modClasses = `artistmodal ${(params.show) ? 'show' : 'hide'}`;
    return (
        <View style={[styles.modalOverlay, styles.artistmodal, params.show ? {} : styles.hidden]}>
            {params.children}
        </View> )
};

const App = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [showArtist, setShowArtist] = useState(false);
    const [showVenue, setShowVenue] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const storageKey = 'setAndSong';
    let defaultLocater = { event: event, setNumber: 0, songNumber: 0 };

    // retrieve locally persisted settings
    let storedSetAndSongString = localStorage.getItem(storageKey);
    if (storedSetAndSongString) {
        let storedSetAndSong = JSON.parse(storedSetAndSongString);
        defaultLocater = { event: event, ...storedSetAndSong }
    }

    const [locater, setLocater] = useState(defaultLocater);

    // persist changes to set and song locally
    useEffect(() => {
        let setAndSong = { setNumber: locater.setNumber, songNumber: locater.songNumber };
        localStorage.setItem(storageKey, JSON.stringify(setAndSong))
    }, [locater]);


    function getCurrent(locater: any) {
        let event = locater.event;
        let currentSet = event.sets[locater.setNumber];
        let currentSong = currentSet.songs[locater.songNumber];
        let position = (locater.songNumber + 1) + "/" + currentSet.songs.length;
        return { "event": locater.event, "songSet": currentSet, "song": currentSong, "position": position };
    }

    function getIsFirst() {
        if (locater.setNumber === 0 && locater.songNumber === 0) {
            return true;
        } else {
            return false;
        }
    }

    function getIsLast() {
        let lastSetIdx = event.sets.length - 1;
        let lastSongIdx = event.sets[lastSetIdx].songs.length - 1;
        if (locater.setNumber === lastSetIdx && locater.songNumber === lastSongIdx) {
            return true;
        } else {
            return false;
        }
    }

    let current = getCurrent(locater);
    let isFirst = getIsFirst();
    let isLast = getIsLast();

    function onNext() {
        /* locater = {event:event, setNumber:0, songNumber:0}
           current = {"event":locater.event, "songSet": currentSet, "song": currentSong}; */
        let songCountForSet = current.songSet.songs.length;
        let newSongNumber = locater.songNumber + 1;

        if (newSongNumber < songCountForSet) {
            setLocater({ event: locater.event, setNumber: locater.setNumber, songNumber: newSongNumber });
            return;
        }
        let newSetNumber = locater.setNumber + 1;
        if (newSetNumber < locater.event.sets.length) {
            setLocater({ event: locater.event, setNumber: newSetNumber, songNumber: 0 });
            return;
        }
    }

    function onPrevious() {
        /* locater = {event:event, setNumber:0, songNumber:0}
           current = {"event":locater.event, "songSet": currentSet, "song": currentSong}; */
        let newSongNumber = locater.songNumber - 1;

        if (newSongNumber >= 0) {
            setLocater({ event: locater.event, setNumber: locater.setNumber, songNumber: newSongNumber });
            return;
        }
        let newSetNumber = locater.setNumber - 1;
        if (newSetNumber >= 0) {
            let newSongNumber = locater.event.sets[newSetNumber].songs.length
            setLocater({ event: locater.event, setNumber: newSetNumber, songNumber: (newSongNumber - 1) });
            return;
        }
    }

    const toggleMenu = (event: any) => {
        if (showMenu) {
            setShowMenu(false);
        } else {
            setShowArtist(false);
            setShowVenue(false);
            setShowSidebar(false);
            setShowMenu(true);
        }
        event.stopPropagation();
    }

    const toggleSidebar = (event: any) => {
        if (showSidebar) {
            setShowSidebar(false);
        } else {
            setShowArtist(false);
            setShowVenue(false);
            setShowSidebar(true);
            setShowMenu(false);
        }
        event.stopPropagation();
    }

    const toggleArtistModal = (event: any) => {
        if (showArtist) {
            setShowArtist(false);
        } else {
            setShowArtist(true);
            setShowVenue(false);
            setShowSidebar(false);
            setShowMenu(false);
        }
        event.stopPropagation();
    }

    const toggleVenueModal = (event: any) => {
        if (showVenue) {
            setShowVenue(false);
        } else {
            setShowArtist(false);
            setShowVenue(true);
            setShowSidebar(false);
            setShowMenu(false);
        }
        event.stopPropagation();
    }


    return (
        <View style={{ flex: 1 }}>
            <View style={styles.appHeader} >
                <TouchableOpacity onPress={(event) => toggleMenu(event)} >
                    <View>
                        <MaterialCommunityIcons name="menu" size={24} color="black" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={(event) => toggleArtistModal(event)} >
                    <Text style={styles.artistTitle}>
                        Artist: {event.artist.name}
                    </Text>
                </TouchableOpacity>
            </View>
            <Menu
                show={showMenu}
                closeMenu={toggleMenu}
            />
            <ModalWrapper
                show={showSidebar}
            >
                <View style={styles.bordered}>
                    <SetList
                        setLocater={setLocater}
                        locater={locater}
                        closeModal={toggleSidebar}
                    />
                </View>
            </ModalWrapper>
            <ArtistModal
                show={showArtist}
            >
                <View style={styles.bordered}>
                    <Artist
                        closeModal={toggleArtistModal}
                        artist={event.artist}
                    />
                </View>
            </ArtistModal>
            <VenueModal
                show={showVenue}
            >
                <View style={styles.bordered}>
                    <Venue
                        closeModal={toggleVenueModal}
                        venue={event.venue}
                    />
                </View>
            </VenueModal>
            <PageContent
                showSidebar={showSidebar}
                showVenue={showVenue}
                onNext={onNext}
                isFirst={isFirst}
                isLast={isLast}
                onPrevious={onPrevious}
                toggleSidebar={toggleSidebar}
                toggleVenueModal={toggleVenueModal}
                current={getCurrent(locater)}
                event={event}
            />
        </View>
    );
};

export default App;
