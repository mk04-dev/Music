import { faShareFromSquare } from "@fortawesome/free-regular-svg-icons";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { displayTime, Song } from "utils/utils";

interface Props {
	idx: number;
	item: Song;
}
function TrackItem(props: Props) {
	const { idx, item } = props;
	const { name, time } = item;
	return (
		<tr id={`track-${idx}`}>
			<td>{idx}</td>
			<td>
				<FontAwesomeIcon className="icon-btn" icon={true ? faPlay : faPause} />
				<span>{name}</span>
			</td>
			<td>{displayTime(time)}</td>
			<td><FontAwesomeIcon className="icon-btn" icon={faShareFromSquare} /></td>
		</tr>
	);
}

export default React.memo(TrackItem);
