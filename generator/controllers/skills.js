const Skill = require('../models/skill')

const index = (req, res) => {
    res.render('skills/index', {
        skilslls: Skill.getAll(),
        title: 'Skills'
    })
}

const show = (req, res) => {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        title: 'Skill'
    })
}

module.exports = { index, show}