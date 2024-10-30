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
				<span className="main-player-album-name text-stroke text-xl">{name}</span>
				<span className="main-player-singer text-lg">{singer}</span>
				<div className="main-player-controls">
					<FontAwesomeIcon className="icon-btn text-md" icon={faBackwardStep} />
					<FontAwesomeIcon className="icon-btn text-md" icon={true ? faPlay : faPause} />
					<FontAwesomeIcon className="icon-btn text-md" icon={faForwardStep} />
				</div>
				<div className="marquee text-md">
					<span>Datmaniac - Tiếng ca tiên cá ft. Mèo, Chú 13</span>
				</div>
			</div>
		</section>
	);
}

export default React.memo(Player);
