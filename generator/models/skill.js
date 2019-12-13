let skills = [
    {languages: 'javascript', framework: 'express', id: 'a1'},
    {languages: 'python', framework: 'django', id: 'b2'},
    {languages: 'ruby', framework: 'rubyonrails', id: 'c6'}
]

function getAll() {
    return skills
}

function getOne(id) {
    return skills[id]
}

function create(languages, framework) {
    skills.push({languages, framework})
}

function deleteOne(id) {
    skills.splice[id, 1]
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