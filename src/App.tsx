import "./App.css";
import IMG from "resources/54846944.png";
import Player from "components/Player";
import { ALBUM, fnShuffle, Track } from "utils/utils";
import Streams from "components/Streams";
import TrackList from "components/TrackList";
import Section from "components/Section";
import Footer from "Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useCallback, useEffect, useState } from "react";

function App() {
	const { poster, links, musicVideo, tracks } = ALBUM;
	const [playing, setPlaying] = useState<boolean>(false);
	const [currentSong, setCurrentSong] = useState<Track>(tracks[0]);
	const [idx, setIdx] = useState<number>(0);
	const [currentTime, setCurrentTime] = useState<number>(0);
	const [trackList, setTrackList] = useState<Track[]>(tracks);
	const [repeat, setRepeat] = useState<boolean>(false);
	const [shuffle, setShuffle] = useState<boolean>(false);

	useEffect(() => {
		setCurrentSong(trackList[idx]);
		setCurrentTime(0);
	}, [idx]);

	useEffect(() => {
		if (shuffle) {
			const shuffled = fnShuffle(tracks);
			setTrackList([currentSong, ...shuffled.filter((e) => e.name !== currentSong.name)]);
			setIdx(0);
		} else {
			setTrackList(tracks);
			setIdx(tracks.findIndex((e) => e.id === currentSong.id));
		}
	}, [shuffle]);

	const prevTrack = useCallback(() => {
		if (idx === 0) {
			if (repeat) setIdx(tracks.length - 1);
		} else {
			setIdx(idx - 1);
		}
	}, [idx, repeat, setIdx]);

	const nextTrack = useCallback(() => {
		if (idx === tracks.length - 1) {
			if (repeat) setIdx(0);
		} else {
			setIdx(idx + 1);
		}
	}, [idx, repeat, setIdx]);

	return (
		<div className="App">
			<div className="app-header">
				<img className="app-logo" src={IMG} alt="App Logo" title="MK04"></img>
				<div className="app-contact">
					<FontAwesomeIcon
						className="icon-btn"
						icon={faFacebook}
						title="MK04 on Facebook"
						onClick={() => window.open("https://www.facebook.com/profile.php?id=100009699630551")}
					/>
					<FontAwesomeIcon
						className="icon-btn"
						icon={faGithub}
						title="MK04 on Github"
						onClick={() => window.open("https://github.com/mk04-dev")}
					/>
				</div>
			</div>
			<div
				className="background-poster"
				style={{
					backgroundImage: `url(${poster})`,
				}}
			></div>
			<article className="content">
				<Player
					idx={idx}
					repeat={repeat}
					shuffle={shuffle}
					playing={playing}
					tracks={trackList}
					url={currentSong.src}
					setIdx={setIdx}
					setRepeat={setRepeat}
					setShuffle={setShuffle}
					setPlaying={setPlaying}
					setCurrentTime={setCurrentTime}
					nextTrack={nextTrack}
					prevTrack={prevTrack}
				/>
				<Section title="STREAM IT YOUR WAY">
					<Streams links={links} />
				</Section>
				<Section title="Track list">
					<TrackList
						trackList={tracks}
						playing={playing}
						id={currentSong.id}
						currentTime={currentTime}
						setPlaying={setPlaying}
						setIdx={setIdx}
					/>
				</Section>
				<Section title="Music video">
					<iframe className="music-video" src={musicVideo} />
				</Section>
			</article>
			<Footer />
		</div>
	);
}

export default App;
