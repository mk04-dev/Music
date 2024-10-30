export interface Album {
	name: string;
	singer: string;
	banner: string;
	poster: string;
	songs: Song[];
	links: StreamLink;
	musicVideo?: string;
    releaseDate: string;
}
export interface Song {
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
export const SONGS: Song[] = [
	{
		name: "Luôn sẽ suôn sẻ",
		time: 228,
	},
	{
		name: "Lao ra ngoại ô",
		time: 215,
	},
	{
		name: "O",
		time: 271,
	},
	{
		name: "Hallelujah",
		time: 246,
	},
	{
		name: "Tiếng ca tiên cá",
		time: 277,
	},
	{
		name: "Thư viện ở nghĩa trang",
		time: 226,
	},
	{
		name: "Hạt giống hạt bụi",
		time: 276,
	},
	{
		name: "Souls",
		time: 207,
	},
	{
		name: "noiniemnhungnho",
		time: 170,
	},
	{
		name: "Thiên hà trước hiên nhà",
		time: 229,
	},
];

export const ALBUM: Album = {
	name: "Sao đủ để bao phủ",
	singer: "Datmaniac",
	banner: "https://i.scdn.co/image/ab67616d0000b2734e8b37c9c38dbd3cf15d02e9",
	poster: "https://i.ytimg.com/vi/XprmOkQgoUs/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCtkCSXktPo8VUFBnYD2LYJ7k2qjg",
	songs: SONGS,
	links: {
		spotify: "https://open.spotify.com/album/0UxBR0MgNbCHSVofOEPuB0",
		youtube: "https://www.youtube.com/playlist?list=PLzehVtO3odB89j8JT-R0K7Qgaz7CVRn7H",
		soundCloud: "https://soundcloud.com/user-640730979/sao-du-de-bao-phu-full-album-datmaniac",
		apple: "https://music.apple.com/vn/album/sao-%C4%91%E1%BB%A7-%C4%91%E1%BB%83-bao-ph%E1%BB%A7/1746524112",
	},
	musicVideo: "https://www.youtube.com/embed/Ak1lunhhxQM",
    releaseDate: 'May 22, 2024'
};

export function displayTime(time: number) {
	const minutes = Math.floor(time / 60);
	const seconds = time - minutes * 60;
	const hours = Math.floor(time / 3600);
	return hours
		? `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
		: `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
