import { Link } from 'react-router-dom'

const dummyProjects = ['project-1', 'project-2', 'project-3', 'project-4']

export default function Projects() {
  return (
    <div id="projects" className="p-10 bg-gray-900 text-white">
      <h2 className="text-2xl font-bold mb-6">My Projects</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {dummyProjects.map((proj, idx) => (
<Link to={`/project/${proj}`} key={idx} className="bg-gray-700 hover:bg-gray-600 p-4 rounded transition duration-300">
            <p className="text-center">{proj.replace('-', ' ')}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
