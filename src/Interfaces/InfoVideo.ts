import { FormatsVideoData } from "./FormatsVideoData"
import { videoDetailsData } from "./VideoDetailsData"

export interface InfoVideo {
	formats: Array<FormatsVideoData>,
	videoDetails: videoDetailsData
}