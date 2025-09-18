import React from 'react'

const Skills = () => {
  const skills = [
    { name: 'HTML', level: '90%' },
    { name: 'CSS', level: '80%' },
    { name: 'Next.js', level: '70%' },
    { name: 'React', level: '70%' },
    { name: 'JavaScript', level: '70%' },
    { name: 'Tailwind', level: '80%' },
    { name: 'Bootstrap', level: '80%' },
    { name: 'Node.js', level: '70%' },
    { name: 'MongoDB', level: '70%' },
    { name: 'FireBase', level: '70%' },
    { name: 'SupaBase', level: '70%' },
    { name: 'Angular', level: '50%' },
  ]

  return (
    <div id='skills' className="bg-black text-white py-10 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        {/* <h2 className="text-xl text-[#00df9a] mb-1">My Skills</h2> */}
        <h1 className="text-4xl font-bold text-[#00df9a] mb-8">My Skills</h1>

        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
          {skills.map((skill, index) => (
            <div key={index}>
              <h3 className="text-gray-400 text-md mb-1">{skill.name}</h3>
              <div className="w-full bg-white h-2 rounded-full">
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
