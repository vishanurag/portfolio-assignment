import React from 'react'

const ProjectCard = (props) => {
    // const project = props.projectData;

    return (
        <a href={props.url} target='_blank'  className="project-card w-[300px] h-[250px] bg-slate-900 border rounded-lg p-3 my-5 hover:border-purple-500 hover:h-[255px] hover:w-[305px] flex flex-col gap-2 relative">
            <h3 className='text-lg text-bold text-purple-500'>{props.title}</h3>
            <p className='italic text-justify'>{props.desc}</p>
            <p className='absolute bottom-2 text-blue-400'>{props.tech}</p>
        </a>
    )
}

export default ProjectCard
