const projectService = require('../services/projectService');

exports.getAll = (req, res) => {
    const projects = projectService.getAll();
    res.status(200).json(projects);
}

exports.create = (req, res) => {
    const newProject = projectService.create(req.body);
    res.status(200).json(newProject);
}