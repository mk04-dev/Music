import React from "react";
import { displayTime, SONGS } from "utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faShareFromSquare } from "@fortawesome/free-solid-svg-icons";

function TrackList() {
	return (
		<table>
			<tbody>
				{SONGS.map((e, idx) => (
					<tr key={idx + 1} id={`track-${idx + 1}`}>
						<td>{idx + 1}</td>
						<td>
							<FontAwesomeIcon className="icon-btn" icon={true ? faPlay : faPause} />
							<span>{e.name}</span>
						</td>
						<td>{displayTime(e.time)}</td>
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
