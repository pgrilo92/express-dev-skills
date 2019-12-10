let skills = [
    {languages: 'javascript', framework: 'express', id: 'a1'},
    {languages: 'python', framework: 'django', id: 'b2'},
    {languages: 'ruby', framework: 'rubyonrails', id: 'c6'}
]

function getAll() {
    return skills
}

function getOne() {
    return skills.find(skill => skill.id === id)
}

module.exports = {getAll, getOne}