import React from 'react'

const Skills = () => {
  const skills = [
    { name: 'HTML', level: '80%' },
    { name: 'CSS', level: '70%' },
    { name: 'JavaScript', level: '65%' },
    { name: 'React', level: '60%' },
    { name: 'Tailwind', level: '60%' },
    { name: 'Bootstrap', level: '70%' },
    { name: 'Node.js', level: '40%' },
    { name: 'MongoDB', level: '45%' },
  ]

  return (
    <div id='skills' className="bg-black text-white py-10 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xl text-[#00df9a] mb-1">My Skills</h2>
        <h1 className="text-4xl font-bold text-white mb-8">My Skills</h1>

        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
          {skills.map((skill, index) => (
            <div key={index}>
              <h3 className="text-gray-400 text-md mb-1">{skill.name}</h3>
              <div className="w-full bg-green-600 h-2 rounded-full">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-green-300 to-green-300"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
