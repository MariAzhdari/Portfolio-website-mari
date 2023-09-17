/* eslint-disable react/no-unescaped-entities */
import LinkedIn from "../assets/socials/linkedin.svg";
import GitHub from "../assets/socials/github.svg";
// import Email from "../assets/socials/email.svg";
import Download from "../assets/socials/Download.png";
import { TypeAnimation } from "react-type-animation";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="hero my-8 md:py-8 px-7 relative" id="home">
      {/* hero info */}
      <div className="h-screen flex items-center justify-center">
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-center md:w-1/2"
        >
          <h1 className="text-primary text-5xl font-extrabold tracking-wider mb-8">
            HEY, I'M Marziyeh Azhdari
          </h1>
          <TypeAnimation
            className="font-semibold text-transparent leading-10 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            sequence={[
              // Same substring at the start will only be typed once, initially
              "full-stack developer",
              1000,
              "Data modeling for organized databases",
              1000,
              "Web designer crafting interfaces",
              1000,
              "Strong problem solver who thrives in collaborative development environments.",
              1000,
            ]}
            speed={50}
            style={{ fontSize: "2em" }}
            repeat={Infinity}
          />
          {/* hero info */}
          <p className="text-light text-xl my-8">
            Full-stack developer with a front-end focus, crafting captivating
            web experiences that drive product success. A creative mind, eager
            to learn, and a team player committed to excellence.
          </p>
          <button className="btn py-4 px-16">PROJECTS</button>
        </motion.div>
      </div>
      {/* hero socials */}
      <div className="bg-white w-20 rounded py-1 px-2 absolute left-0 top-48 hidden md:block">
        <div className="my-1">
          <a
            href="https://www.linkedin.com/in/marziyeh-azhdari-3685b0246/" //
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500"
          >
            <img src={LinkedIn} alt="" className="w-10 h-10" />
          </a>
        </div>

        <div className="my-1">
          <a
            href="mailto:marzi.aghchay@gmail.com" // Add your email address as a mailto link
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500"
          >
            <img
              src="https://img.icons8.com/?size=1x&id=12580&format=png"
              alt="Email"
              className="w-10 h-10"
            />
          </a>
        </div>
        <div className="my-1">
          <a
            href="https://github.com/MariAzhdari"
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500"
          >
            <img src={GitHub} alt="" className="w-10 h-10" />
          </a>
        </div>

        <div className="my-1">
          <a
            href="../cv.pdf"
            download="Marziyeh_Azhdari_CV.pdf"
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500"
          >
            <img
              width="64"
              height="64"
              src={Download}
              alt="external-resume-human-resources-itim2101-fill-itim2101-2"
              className="w-10 h-10"
            />   
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
