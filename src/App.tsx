import "./App.css";
import IMG from "resources/54846944.png";
import Player from "components/Player";
import { ALBUM } from "utils/utils";
import Streams from "components/Streams";
import TrackList from "components/TrackList";
import Section from "components/Section";
import Footer from "Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";

function App() {
	const { poster, links, musicVideo } = ALBUM;
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
				<Player />
				<Section title="STREAM IT YOUR WAY">
					<Streams links={links} />
				</Section>
				<Section title="Track list">
					<TrackList />
				</Section>
				<Section title="Music video">
					<audio className="music-video" src={musicVideo} />
				</Section>
			</article>
			<Footer />
		</div>
	);
}

export default App;
