import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faApple, faSoundcloud, faSpotify, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { StreamLink } from "utils/utils";

interface Props {
	links: StreamLink;
}
function Streams(props: Props) {
	const { links } = props;
	const openLink = (key: keyof StreamLink) => {
		links[key] && window.open(links[key], "_blank");
	};
	return (
		<div className="stream-brands">
			<FontAwesomeIcon icon={faSpotify} onClick={() => openLink("spotify")} />
			<FontAwesomeIcon icon={faYoutube} onClick={() => openLink("youtube")} />
			<FontAwesomeIcon icon={faSoundcloud} onClick={() => openLink("soundCloud")} />
			<FontAwesomeIcon icon={faApple} onClick={() => openLink("apple")} />
		</div>
	);
}

export default React.memo(Streams);
