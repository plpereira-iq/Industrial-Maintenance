const Maintenance = require('../models/maintenance.models');

module.exports = {
    getAllMaintenances: ((req, res) => {
        Maintenance.find().sort({mainDate: 1}).collation({locale: "en", caseLevel:true})
            .then((allMaintenances) => {
                console.log(allMaintenances)
                res.json(allMaintenances)
            })
            .catch((err) => {
                console.log(err);
            })
    }),
    getOneMaintenance: ((req, res) => {
        Maintenance.findOne({_id: req.params.id})
            .then((oneMaintenance) => {
                res.json(oneMaintenance)
            })
            .catch((err) => {
                console.log(err)
            })
    }),
    addMaintenance: ((req, res) => {
        Maintenance.create(req.body)
            .then((newMaintenance) => {
                console.log(newMaintenance);
                res.json(newMaintenance);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err)
            })
    }),
    updateOneMaintenance: ((request, response) => {
        Maintenance.findOneAndUpdate({_id: request.params.id},
            request.body,{new: true, runValidators: true}).then((updatedMaintenance) => {
                console.log(updatedMaintenance);
                response.json(updatedMaintenance)
            })
            .catch((err) => {
                response.status(400).json(err);
            })
    }),

    deletedMaintenance: ((req, res) => {
        Maintenance.deleteOne({id: req.params.id})
            .then((deletedMaintenance) => {
                res.json(deletedMaintenance)
            })
            .catch((err) => {
                res.status(400).json(err);
            })
    })
}