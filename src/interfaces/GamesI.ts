export interface GamesListI {
	id: number,
	title: string
	thumbnail: string,
	short_description: string,
	game_url: string,
	genre: string,
	platform: string,
	publisher: string,
	developer: string,
	release_date: string,
	profile_url: string
}

export interface ScreenshotsI {
	id: number,
	image: string
}

export interface SystemRequirementsI {
	graphics: string,
	memory: string,
	os: string,
	processor: string,
	storage: string
}

export interface GameI {
	id: number,
	description: string,
	title: string,
	short_description: string,
	game_url: string,
	genre: string,
	platform: string,
	publisher: string,
	developer: string,
	release_date: string,
	profile_url: string,
	thumbnail: string,
	screenshots: ScreenshotsI[]
	minimum_system_requirements: SystemRequirementsI
}
