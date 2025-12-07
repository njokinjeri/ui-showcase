import { Link } from "react-router";
import NavBar from "../components/NavBar"
import SocialLinks from "../components/SocialLinks";
import Logo from "../components/Logo"
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects.json"
import {ArrowUpRight} from "lucide-react";

const Home = () => {
  return (
    <main className="min-h-screen bg-zinc-950 text-white flex flex-col gap-4">
      <NavBar />
      <div className="px-8 flex flex-col gap-4">
        <h1 className="font-climate text-7xl">UI <sub className="text-lg">showcase</sub></h1>
        <p className="font-inter text-stone-400">
          A showcase of my practical work with various JavaScript frameworks and tooling.
        </p>
        </div>
      <section className="flex-1 flex justify-center py-16">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project}/>
          ))
        }
        </div>
      </section>
      <footer className="flex justify-between items-center gap-2 p-4 relative">
        <div className="flex place-items-center">
          <Logo />
          <h3 className="font-climate text-6xl flex flex-col gap-2 md:flex-row md:items-end">UI <sub className="text-sm">showcase</sub></h3>
        </div>
        <div className="h-36 border-l border-t border-stone-700 px-8 absolute bottom-0 right-0 flex gap-4">
          <div className="flex flex-col gap-4 border-l px-6 pt-4  border-stone-700 font-montserrat text-stone-300">
            <Link to="/about" className="flex py-4 hover:text-violet-300">
              About
            <ArrowUpRight />
            </Link>
            <SocialLinks />
          </div>
        </div> 
      </footer>
    </main>
  )
}

export default Home