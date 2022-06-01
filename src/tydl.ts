import express, { Application } from "express";
const app: Application = express();
const cors = require('cors')
const VideoRouter = require('./Routers/VideoRouter')
const AudioRouter = require('./Routers/AudioRouter')
const DownloadController = require('./Routers/DownloadRouter')

const port: number = parseInt(process.env.PORT) || 4000;

app.use(cors())
// video
app.use("/video", VideoRouter)
// audio
app.use("/audio", AudioRouter)
// Download video with custom title and quality
app.use("/download", DownloadController)


app.listen(port, () => {
		console.log(`Listening on port ${port}`)
	}
)