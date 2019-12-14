let skills = [
    {languages: 'javascript', frameworks: 'express'},
    {languages: 'python', framework: 'django'},
    {languages: 'ruby', framework: 'rubyonrails'}
]

function getAll() {
    return skills
}

function getOne(id) {
    return skills[id]
}

function create(languages, frameworks) {
    skills.push({languages, frameworks})
}

function deleteOne(id) {
    skills.splice(id, 1)
}

function update(id, skill) {
    skills[id] = skill
}

module.exports = {
    getAll, 
    getOne, 
    create, 
    deleteOne,
    update
}