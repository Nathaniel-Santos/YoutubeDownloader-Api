import { Request, Response } from "express";
import ytdl from "ytdl-core"
import { UrlVideoInfo } from "../Interfaces/UrlVideoInfo"
import { InfoVideo } from "../Interfaces/InfoVideo"
const convertUrl = require('../Functions/ConvertUrl')
// QUERY EXEMPLE:
// Simple exemple -  localhost:port/audio?videoId=YoutubeUrlVideo&type=mp4 
// Real exemple   -  http://localhost:4000/audio?videoId=https://youtube.com/shorts/n2eKPdftpw8?feature=share&type=mp4
// This code will return the audio info
const Audio = async (req: Request, res: Response) => {
	const queryData: UrlVideoInfo = req.query	
	const videoId: string = convertUrl(queryData.videoId)
	const info: InfoVideo = await ytdl.getInfo(videoId)
	const audioFormats = ytdl.filterFormats(info.formats, 'audioonly');

	res.json(audioFormats)
}

module.exports = {
    get: Audio
}   