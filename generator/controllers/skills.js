const Skill = require('../models/skill')

const index = (req, res) => {
    res.render('skills/index', {
        skills: Skill.getAll()
    })
}

const show = (req, res) => {
    const skill = Skill.getOne(req.params.id)
    if(skill) {
        res.render('skills/show', {
            skill,
            skillId: req.params.id,
        })
    } else {
        res.redirect('/skills')
    }
}

const newSkill = (req, res) => { 
    res.render('skills/new')
}

const create = (req, res) => {
    Skill.create(req.body.skill),
    res.redirect('/skills')
}

const deleteSkill = (req, res) => {
    Skill.deleteOne(req.params.id),
    res.redirect('/skills')
}

const edit = (req, res) => {
    const skill = Skill.getOne(req.params.id)
    if (skill) { 
        res.render('skills/edit', {
            skill,
            skillId: req.params.id
        })
    } else {
        res.redirect('/skills')
    }
}

const update = (req, res) => {
    Skill.update( req.params.id, req.body)
    res.redirect(`/skills/${req.params.id}`)
}

module.exports = { 
    index, 
    show, 
    new: newSkill, 
    create, 
    delete: deleteSkill,  
    edit, 
    update
}