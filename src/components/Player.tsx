import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackwardStep, faForwardStep, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { ALBUM } from "utils/utils";
function Player() {
	const { name, singer, banner, releaseDate } = ALBUM;
	return (
		<section className="main-player-wrapper">
			<div className="banner">
				<span>Release in {releaseDate}</span>
				<img src={banner}></img>
			</div>
			<div className="main-player">
				<span className="main-player-album-name text-stroke">{name}</span>
				<span className="main-player-singer">{singer}</span>
				<div className="main-player-controls">
					<FontAwesomeIcon className="icon-btn" icon={faBackwardStep} />
					<FontAwesomeIcon className="icon-btn" icon={true ? faPlay : faPause} />
					<FontAwesomeIcon className="icon-btn" icon={faForwardStep} />
				</div>
				<div className="marquee">
					<span>Datmaniac - Tiếng ca tiên cá ft. Mèo, Chú 13</span>
				</div>
			</div>
		</section>
	);
}

export default React.memo(Player);
