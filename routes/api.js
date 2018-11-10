// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()
const controllers = require('../controllers')

router.get('/:resource', (req, res) => {
	const resource = req.params.resource
	const controller = controllers[resource]
	const filters = req.query

	if(controller == null) {
		res.json({
			status: 'error',
			message: 'Invalid Resource'
		})
		return
	}

	controller.get(filters)
	.then(data => {
		res.json({
			status: 'success',
			data: data
		})
	})
	.catch(err => {
		res.json({
			status: 'error',
			message: err.message
		})
	})
})

router.get('/:resource/:id', (req, res) => {
	const resource = req.params.resource
	const id = req.params.id
	const controller = controllers[resource]

	if(controller == null) {
		res.json({
			status: 'error',
			message: 'Invalid Resource'
		})
		return
	}

	controller.show(id)
	.then(data => {
		res.json({
			status: 'success',
			data: data
		})
	})
	.catch(err => {
		res.json({
			status: 'error',
			message: err.message
		})
	})
})

router.post('/:resource', (req, res) => {
	const resource = req.params.resource
	const controller = controllers[resource]

	if(controller == null) {
		res.json({
			status: 'error',
			message: 'Invalid Resource'
		})
		return
	}

	controller.store(req.body)
	.then(data => {
		res.json({
			status: 'success',
			data: data
		})
	})
	.catch(err => {
		res.json({
			status: 'error',
			message: err.message
		})
	})
})

router.put('/:resource/:id', (req, res) => {
	const resource = req.params.resource
	const id = req.params.id
	const controller = controllers[resource]

	if(controller == null) {
		res.json({
			status: 'error',
			message: 'Invalid Resource'
		})
		return
	}

	controller.update(id, req.body)
	.then(data => {
		res.json({
			status: 'success',
			data: data
		})
	})
	.catch(err => {
		res.json({
			status: 'error',
			message: err.message
		})
	})
})

router.delete('/:resource/:id', (req, res) => {
	const resource = req.params.resource
	const id = req.params.id
	const controller = controllers[resource]

	if(controller == null) {
		res.json({
			status: 'error',
			message: 'Invalid Resource'
		})
		return
	}

	controller.destroy(id)
	.then(data => {
		res.json({
			status: 'success',
			data: data
		})
	})
	.catch(err => {
		res.json({
			status: 'error',
			message: err.message
		})
	})
})

/*
router.get('/players', (req, res) => {
	
	Player.find(null)
	.then(data => {
		res.json({
			status: 'success',
			data: data
		})
	})
	.catch(err => {
		res.json({
			status: 'error',
			message: err.message
		})
	})
})

router.get('/teams', (req, res) => {
	
	Team.find(null)
	.then(data => {
		res.json({
			status: 'success',
			data: data
		})
	})
	.catch(err => {
		res.json({
			status: 'error',
			message: err.message
		})
	})
})
*/
/*
const players = [
	{firstname: "Rodinei", lastname: "Teixeira", position: "qb", age: 35, team: "nyg"},
	{firstname: "Fulano", lastname: "Tal", position: "qb", age: 40, team: "nep"},
	{firstname: "Ciclano", lastname: "Bla", position: "de", age: 25, team: "hou"}
]

const teams = [
	{name:"giants", city:"new york", conference:"nfc"},
	{name:"patriots", city:"new england", conference:"afc"},
	{name:"texns", city:"houston", conference:"afc"}
]

const db = {
	teams: teams,
	players: players
}

router.get('/:resource', (req, res) => {
	const resource = req.params.resource

	const data = db[resource]

	if (data == null) {
		res.json({
			status: 'error',
			message: 'Invalid request. Resource undefined'
		})

		return
	}
	
	res.json({
		status: 'success',
		data: data
	})
})
*/

/*
router.get('/:resource', (req, res) => {
	const resource = req.params.resource
	
	if (resource == 'players') {
		res.json({
			status: 'success',
			data: players
		})

		return
	}

	if (resource == 'teams') {
		res.json({
			status: 'success',
			data: teams
		})

		return
	}

	res.json({
		status: 'error',
		message: 'Invalid request. Resource undefined'
	})
})

router.get('/players', (req, res) => {
	res.json({
		status: 'success',
		data: players
	})
})

router.get('/teams', (req, res) => {
	res.json({
		status: 'success',
		data: teams
	})
})
*/
module.exports = router
