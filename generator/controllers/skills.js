const Skills = require('../models/skill')

const index = (req, res) => {
    res.render('skills/index', {
        skills: Skills.getAll(),
        title: 'Skills'
    })
}

const show = (req, res) => {
    res.render('skills/show', {
        skill: Skills.getOne(req.params.id),
        title: 'Skill'
    })
}

module.exports = { index, show}