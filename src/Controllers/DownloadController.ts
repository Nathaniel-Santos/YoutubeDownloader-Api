import { Request, Response } from 'express'
import { UrlVideoInfo } from '../Interfaces/UrlVideoInfo'
import { InfoVideo } from '../Interfaces/InfoVideo'
import ytdl from 'ytdl-core'
const convertUrl = require('../Functions/ConvertUrl')
// QUERY EXEMPLE:
// Simple exemple -  localhost:port/download?videoId=YoutubeUrlVideo&type=mp4 
// Real exemple   -  http://localhost:4000/download?videoId=https://youtube.com/shorts/n2eKPdftpw8?feature=share&type=mp4
// This code download the youtube video renaming it by title
const Download = async (req: Request, res: Response) => {
	
	let itag: string = ''
	const queryData: UrlVideoInfo = req.query 
	const type = queryData.type ? queryData.type : 'mp4'
	const videoId: string = convertUrl(queryData.videoId)
	
	const info: InfoVideo = await ytdl.getInfo(videoId)
	const title = info.videoDetails.title

	if (type === "mp4") {
		itag = '22'
		res.header('Content-Disposition', `attachment; filename="${title}.mp4"`);
		res.header('Content-Type', 'video/mp4');
	} else if (type === "mp3") {
		itag = '251'
		res.header('Content-Disposition', `attachment; filename="${title}.mp3"`);
		res.header('Content-Type', 'audio/mp3');
	}

	ytdl(
        videoId,
		// {quality: 'highest'}
		{ filter: formats => formats.itag == itag }
	)
		.pipe(res);
}

module.exports = {
    get: Download
} 