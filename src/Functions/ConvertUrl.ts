const convertUrl: Function = (url: string) => {

	let newUrlArray: string[];

	if (url.includes("youtu.be") || url.includes('https://youtu.be/')) {

		newUrlArray = url.split("https://youtu.be/")
		const result: string = `https://youtube.com/watch?v=${newUrlArray[1]}`
		
		return result

	} else if (url.includes("https://youtube.com/shorts/") || url.includes("https://www.youtube.com/shorts/")) {		

		newUrlArray = url.split("https://youtube.com/shorts/")
		const result: string = `https://youtube.com/watch?v=${newUrlArray[1]}`
		
		return result

	} else if (url.includes("https://youtube.com/watch?v=") || url.includes("https://www.youtube.com/watch?v=")) {
		const baseUrl = url.split('=')[0]

		let videoIdInit = url.search('=') + 1
		let videoIdEnds = url.search('&') + 1 != 0 ? url.search('&') + 1 : (url.split('=')[1].length) + (baseUrl.length + 1)
		let findVideoId = url.slice(videoIdInit, videoIdEnds)
		const result: string = `https://youtube.com/watch?v=${findVideoId}`

		return result
	}
	else {
		console.log('Entrou 4')
		const result: string = "https://youtube.com/watch?v=dQw4w9WgXcQ"
		
		return result
	}
}

module.exports = convertUrl