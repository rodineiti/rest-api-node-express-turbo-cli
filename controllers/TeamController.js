const Team = require('../models/Team')

module.exports = {
    
    get: (params) => {
        return new Promise((resolve, reject) => {
            Team.find(params)
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                reject(err)
            })
        })
    },

    show: (id) => {
        return new Promise((resolve, reject) => {
            Team.findById(id)
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                reject(new Error('Team ' + id + ' not found'))
            })
        })
    },

    store: (params) => {
        return new Promise((resolve, reject) => {
            Team.create(params)
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                reject(err)
            })
        })
    },

    update: (id, params) => {
        return new Promise((resolve, reject) => {
            Team.findByIdAndUpdate(id, params, { new: true})
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                reject(err)
            })
        })
    },

    destroy: (id) => {
        return new Promise((resolve, reject) => {
            Team.findByIdAndRemove(id)
            .then(data => {
                resolve({id: id})
            })
            .catch(err => {
                reject(new Error('Team ' + id + ' not found'))
            })
        })
    },
}