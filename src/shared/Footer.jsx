import linkedinIcon from '../assets/icons-white/linkedin-white.png';
import githubIcon from '../assets/icons-white/github-white.png';

const Footer = () => {
  return (
    <div className="bg-black md:h-66 px-7">
      <div className="max-w-7xl mx-auto py-20 flex flex-col md:flex-row justify-between">
        {/* logo and description */}
        <div className="md:w-2/5 my-3">
          <h4 className="text-white font-bold text-2xl tracking-wide">
            Mohammad Nahvi
          </h4>
          <p className="mt-5 text-sm leading-7 text-[#eee]">
            Feel free to Contact me
            {/* <a href="tel:07503336272" className="flex items-center mt-3">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSww0IpYO-IZ03ycrEcSMNaVukLF9gMAnE7NUpDyt385Q&s"
                alt="Phone Icon"
                className="w-7 h-7 mr-2"
              />
              07503336272
            </a> */}
            <a
              href="mailto:"
              className="flex items-center mt-3"
            >
              <img
                src="https://img.icons8.com/?size=1x&id=0P9EO7FglSqN&format=gif"
                alt="Email Icon"
                className="w-7 h-7 mr-2"
              />
              mehmet.moghaddam@gmail.com
            </a>
          </p>
        </div>
        {/* social icons */}
        <div className="my-3">
          <h4 className="text-white font-bold text-2xl tracking-wide ">
            SOCIAL
          </h4>
          <div className="mt-5 flex gap-3">
            <a
              href="https://www.linkedin.com/in/mohammad-nahvi-m-98a4102a7/"
              className="ml-1"
              target="blank"
            >
              <img
                src={linkedinIcon}
                alt=""
                className="w-7 h-7"
                target="blank"
              />
            </a>
            <a
              href="https://github.com/monahvi"
              className="ml-1"
              target="blank"
            >
              <img src={githubIcon} alt="" className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
