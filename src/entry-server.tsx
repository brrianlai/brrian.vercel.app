import React from 'react'
import { Router } from '@tanstack/react-router'
import { createRouter } from './router'

export function renderToString(url: string) {
	const router = createRouter()
	router.update({
		location: url,
	})

	return <Router router={router} />
}
