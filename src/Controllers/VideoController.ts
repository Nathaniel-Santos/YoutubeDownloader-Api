import { Request, Response } from "express";
import ytdl from "ytdl-core"
import { UrlVideoInfo } from "../Interfaces/UrlVideoInfo"
import { InfoVideo } from "../Interfaces/InfoVideo"
const convertUrl = require('../Functions/ConvertUrl')
// QUERY EXEMPLE:
// Simple exemple -  localhost:port/video?videoId=YoutubeUrlVideo
// Real exemple   -  http://localhost:4000/video?videoId=https://youtube.com/shorts/n2eKPdftpw8?feature=share
// This code will return the video info
const Video = async (req: Request, res: Response) => {
	const queryData: UrlVideoInfo = req.query
	const videoId: string = convertUrl(queryData.videoId)
	const info: InfoVideo = await ytdl.getInfo(videoId)

	res.status(200).json(info.formats)
}

module.exports = {
    get: Video
} 