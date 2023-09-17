import linkedinIcon from '../assets/icons-white/linkedin-white.png';
import githubIcon from '../assets/icons-white/github-white.png';

const Footer = () => {
  return (
    <div className="bg-black md:h-66 px-7">
      <div className="max-w-7xl mx-auto py-20 flex flex-col md:flex-row justify-between">
        {/* logo and description */}
        <div className="md:w-2/5 my-3">
          <h4 className="text-white font-bold text-2xl tracking-wide">
            Marziyeh Azhdari
          </h4>
          <p className="mt-5 text-sm leading-7 text-[#eee]">
            Feel free to Contact me
          </p>
        </div>
        {/* social icons */}
        <div className="my-3">
          <h4 className="text-white font-bold text-2xl tracking-wide ">
            SOCIAL
          </h4>
          <div className="mt-5 flex gap-3">
            <a href="" className="ml-1">
              <img src={linkedinIcon} alt="" className="w-7 h-7" />
            </a>
            <a href="" className="ml-1">
              <img src={githubIcon} alt="" className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>

   

    </div>
  );
};

export default Footer;
