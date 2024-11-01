import React from "react";
import { displayTime, Track } from "utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faShareFromSquare } from "@fortawesome/free-solid-svg-icons";

interface Props {
	playing: boolean;
	id: string;
	currentTime: number;
	trackList: Track[];
	setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
	setIdx: React.Dispatch<React.SetStateAction<number>>;
}
function TrackList(props: Props) {
	const { playing, id, currentTime, trackList, setIdx, setPlaying } = props;
	return (
		<table>
			<tbody>
				{trackList.map((e, idx) => (
					<tr key={idx + 1} id={`track-${idx + 1}`}>
						<td>{idx + 1}</td>
						<td>
							<FontAwesomeIcon
								className="icon-btn"
								icon={playing && e.id === id ? faPause : faPlay}
								onClick={() => {
									if (e.id === id) {
										setPlaying(!playing);
									} else {
										setIdx(idx);
										setPlaying(true);
									}
								}}
							/>
							<span>{e.name}</span>
						</td>
						<td>{displayTime(e.time - (e.id === id ? currentTime : 0))}</td>
						<td>
							<FontAwesomeIcon className="icon-btn" icon={faShareFromSquare} />
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default React.memo(TrackList);
