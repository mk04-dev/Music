import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackwardStep, faForwardStep, faPause, faPlay, faRepeat, faShuffle } from "@fortawesome/free-solid-svg-icons";
import { ALBUM, Track } from "utils/utils";
import Marquee from "./Marquee";

interface Props {
	url: string | undefined;
	playing: boolean;
	idx: number;
	repeat: boolean;
	shuffle: boolean;
	tracks: Track[];
	setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
	setIdx: React.Dispatch<React.SetStateAction<number>>;
	setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
	setRepeat: React.Dispatch<React.SetStateAction<boolean>>;
	setShuffle: React.Dispatch<React.SetStateAction<boolean>>;
	nextTrack: () => void;
	prevTrack: () => void;
}
function Player(props: Props) {
	const { name, singer, banner, releaseDate } = ALBUM;
	const {
		url,
		playing,
		idx,
		tracks,
		repeat,
		shuffle,
		setRepeat,
		setShuffle,
		setPlaying,
		setIdx,
		setCurrentTime,
		nextTrack,
		prevTrack,
	} = props;
	const [audio, setAudio] = useState(new Audio(url));
	const disabled = !url;

	useEffect(() => {
		setAudio(new Audio(url));
	}, [url]);

	useEffect(() => {
		playing ? audio.play() : audio.pause();
	}, [playing, audio]);

	useEffect(() => {
		function onEnded() {
			if (idx === tracks.length - 1) {
				setPlaying(false);
			} else {
				setIdx(idx + 1);
			}
		}
		audio.addEventListener("ended", onEnded);
		audio.addEventListener("timeupdate", (e) => setCurrentTime((e.target as any).currentTime));
		return () => {
			audio.pause();
			audio.removeEventListener("ended", onEnded);
			audio.removeEventListener("timeupdate", (e) => setCurrentTime((e.target as any).currentTime));
		};
	}, [audio]);

	return (
		<section className="main-player-wrapper">
			<div className="banner">
				<span className="text-secondary">Release in {releaseDate}</span>
				<img src={banner}></img>
			</div>
			<div className="main-player">
				<Marquee activeOnOverflow className="main-player-album-name text-stroke text-xl">
					{name}
				</Marquee>
				<span className="main-player-singer text-lg">{singer}</span>
				<div className="main-player-controls">
					<FontAwesomeIcon
						className={`icon-btn${disabled || (!repeat && !idx) ? " disabled" : ""}`}
						icon={faBackwardStep}
						onClick={prevTrack}
					/>
					<FontAwesomeIcon
						className={`icon-btn${disabled ? " disabled" : ""}`}
						icon={!playing ? faPlay : faPause}
						onClick={() => {
							!disabled && setPlaying(!playing);
						}}
					/>
					<FontAwesomeIcon
						className={`icon-btn${disabled || (!repeat && idx >= tracks.length - 1) ? " disabled" : ""}`}
						icon={faForwardStep}
						onClick={nextTrack}
					/>
					<FontAwesomeIcon
						className={`icon-btn${repeat ? " active" : ""}`}
						icon={faRepeat}
						onClick={() => setRepeat((repeat) => !repeat)}
					/>
					<FontAwesomeIcon
						className={`icon-btn${shuffle ? " active" : ""}`}
						icon={faShuffle}
						onClick={() => setShuffle((shuffle) => !shuffle)}
					/>
				</div>
				<Marquee activeOnOverflow className="text-secondary">
					{tracks[idx].name}
				</Marquee>
			</div>
		</section>
	);
}

export default React.memo(Player);
