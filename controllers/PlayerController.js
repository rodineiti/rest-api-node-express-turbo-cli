const Player = require('../models/Player')

module.exports = {
    
    get: (params) => {
        return new Promise((resolve, reject) => {
            Player.find(params)
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
            Player.findById(id)
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                reject(new Error('Player ' + id + ' not found'))
            })
        })
    },

    store: (params) => {
        return new Promise((resolve, reject) => {
            Player.create(params)
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
            Player.findByIdAndUpdate(id, params, { new: true})
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
            Player.findByIdAndRemove(id)
            .then(data => {
                resolve({id: id})
            })
            .catch(err => {
                reject(new Error('Team ' + id + ' not found'))
            })
        })
    },
}