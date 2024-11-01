export const newGuid = () => crypto.randomUUID();
export interface Album {
	name: string;
	singer: string;
	banner: string;
	poster: string;
	tracks: Track[];
	links: StreamLink;
	musicVideo?: string;
	releaseDate: string;
}
export interface Track {
	id: string;
	name: string;
	src?: string;
	time: number;
}
export interface StreamLink {
	spotify?: string;
	youtube?: string;
	apple?: string;
	soundCloud?: string;
}
export const TRACKS: Track[] = [
	{
		id: newGuid(),
		name: "Luôn sẽ suôn sẻ",
		time: 228,
		src: require("resources/1.mp3"),
	},
	{
		id: newGuid(),
		name: "Lao ra ngoại ô",
		time: 215,
		src: require("resources/2.mp3"),
	},
	{
		id: newGuid(),
		name: "O",
		time: 271,
		src: require("resources/1.mp3"),
	},
	{
		id: newGuid(),
		name: "Hallelujah",
		time: 246,
		src: require("resources/1.mp3"),
	},
	{
		id: newGuid(),
		name: "Tiếng ca tiên cá ft. Mèo, Chú 13",
		time: 277,
		src: require("resources/1.mp3"),
	},
	{
		id: newGuid(),
		name: "Thư viện ở nghĩa trang",
		time: 226,
		src: require("resources/1.mp3"),
	},
	{
		id: newGuid(),
		name: "Hạt giống hạt bụi",
		time: 276,
		src: require("resources/1.mp3"),
	},
	{
		id: newGuid(),
		name: "Souls",
		time: 207,
		src: require("resources/1.mp3"),
	},
	{
		id: newGuid(),
		name: "noiniemnhungnho",
		time: 170,
		src: require("resources/1.mp3"),
	},
	{
		id: newGuid(),
		name: "Thiên hà trước hiên nhà",
		time: 229,
		src: require("resources/1.mp3"),
	},
];

export const ALBUM: Album = {
	name: "Sao đủ để bao phủ",
	singer: "Datmaniac",
	banner: "https://i.scdn.co/image/ab67616d0000b2734e8b37c9c38dbd3cf15d02e9",
	poster: "https://i.ytimg.com/vi/XprmOkQgoUs/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCtkCSXktPo8VUFBnYD2LYJ7k2qjg",
	tracks: TRACKS,
	links: {
		spotify: "https://open.spotify.com/album/0UxBR0MgNbCHSVofOEPuB0",
		youtube: "https://www.youtube.com/playlist?list=PLzehVtO3odB89j8JT-R0K7Qgaz7CVRn7H",
		soundCloud: "https://soundcloud.com/user-640730979/sao-du-de-bao-phu-full-album-datmaniac",
		apple: "https://music.apple.com/vn/album/sao-%C4%91%E1%BB%A7-%C4%91%E1%BB%83-bao-ph%E1%BB%A7/1746524112",
	},
	musicVideo: "https://www.youtube.com/embed/Ak1lunhhxQM",
	releaseDate: "May 22, 2024",
};

export function displayTime(time: number) {
	const minutes = Math.floor(time / 60);
	const seconds = Math.round(time - minutes * 60);
	const hours = Math.floor(time / 3600);
	return hours
		? `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
				.toString()
				.padStart(2, "0")}`
		: `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

export function fnShuffle<T>(arr: T[]) {
	let currentIndex = arr.length;
	let res = [...arr];
	// While there remain elements to shuffle...
	while (currentIndex != 0) {
		// Pick a remaining element...
		let randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[res[currentIndex], res[randomIndex]] = [res[randomIndex], res[currentIndex]];
	}
	return res;
}
