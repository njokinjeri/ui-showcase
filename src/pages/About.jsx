import Logo from "../components/Logo";
import SocialLinks from "../components/SocialLinks";
import InteractivePath from "../components/InteractivePath";


const About = () => {
  return (
    <article className="min-h-screen bg-zinc-950 text-white">
      <nav className="flex gap-4 justify-between px-6 py-12">
        <Logo /> 
        <SocialLinks 
          className="px-10 py-14 text-stone-500"
        />
      </nav>
      <div className="flex-1 px-8 py-4 w-full lg:w-5/6 flex flex-col gap-8 font-inter text-xl leading-9  text-stone-400">
        <p>
            <a 
              href="/" 
              className="p-3 font-climate text-6xl text-white"
          >
          UI <sub className="text-2xl">showcase</sub>
        </a> {" "} is a space where I bring design implementations to life while learning modern web frameworks. 
                  Each recreation emphasizes accurate styling, performant interactions, and accessible markup.
        </p>
      </div>
      <div className="p-4 md:p-10 flex justify-start">
        <InteractivePath />
      </div>
    </article>
  )
}

export default About;