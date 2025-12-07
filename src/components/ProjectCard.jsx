import {FaGithub} from "react-icons/fa6";
import {ArrowUpRight} from "lucide-react";
import GradientEffect from "../components/GradientEffect";

const ProjectCard = ({ project }) => {
    const {image, title, description, tags, sourceCode, liveLink} = project;
    return (
        <div className="w-86 xl:w-96 h-115 border border-stone-700 rounded-sm flex flex-col gap-4 overflow-hidden">
          <GradientEffect className="w-full h-60 pt-12 px-6 cursor-pointer">
            <a href={liveLink} target="_blank">
              <img
                src={image}
                alt={title}
                className="h-full w-full object-cover rounded-t-sm"
              />
            </a>
         </GradientEffect>
          <section className="font-montserrat px-4 flex flex-col gap-4 overflow-hidden">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="h-18 text-sm text-stone-400 leading-6">{description}</p>
            <div className="text-sm text-stone-300 flex flex-wrap gap-2">
                {tags?.map(tag => (
                  <span key={tag}> #{tag} </span>
                  ))
                }
              </div>
              <div className="flex justify-between gap-4 text-stone-400 ">
                <a href={sourceCode} target="_blank" className="hover:text-violet-300">
                  <FaGithub className="text-xl"/>
                </a>
                <a href={liveLink} target="_blank" className="hover:text-violet-300">
                  <ArrowUpRight className="text-xl"/>
                </a>
              </div>
            </section>
        </div>
     );
}

export default ProjectCard;