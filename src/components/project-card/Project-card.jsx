import './Project-card.css'
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { TiArrowRight } from "react-icons/ti";


const skills = [
    {
      id: 1,
      name: "HTML",
      svg: (
        <svg viewBox="0 0 128 128" height="100%" width="100%"><circle cx="64" cy="64" r="64"></circle><path fill="url(#a)" d="M106.317 112.014 49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64.216 64.216 0 0 0 6.763-5.209z"></path><path fill="url(#b)" d="M81.778 38.4h8.533v51.2h-8.533z"></path><defs><linearGradient id="a" x1="109" x2="144.5" y1="116.5" y2="160.5" gradientTransform="scale(.71111)" gradientUnits="userSpaceOnUse"><stop stopColor="#fff"></stop><stop offset="1" stopColor="#fff" stopOpacity="0"></stop></linearGradient><linearGradient id="b" x1="121" x2="120.799" y1="54" y2="106.875" gradientTransform="scale(.71111)" gradientUnits="userSpaceOnUse"><stop stopColor="#fff"></stop><stop offset="1" stopColor="#fff" stopOpacity="0"></stop></linearGradient></defs></svg>
    ),
    },

    {
      id: 2,
      name: "CSS",
      svg: (
        <svg viewBox="0 0 128 128" height="100%" width="100%"><path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0" fill="#38bdf8"></path></svg>
      ),
    },

    {
      id: 3,
      name: "Javascript",
      svg: (
        <svg viewBox="0 0 128 128" height="100%" width="100%"><path fill="#ffa000" d="M17.474 103.276 33.229 2.462a2.91 2.91 0 0 1 5.44-.924l16.294 30.39 6.494-12.366a2.91 2.91 0 0 1 5.15 0l43.97 83.714H17.474Z"></path><path fill="#f57c00" d="M71.903 64.005 54.955 31.913l-37.481 71.363Z"></path><path fill="#ffca28" d="M110.577 103.276 98.51 28.604a2.913 2.913 0 0 0-1.984-2.286 2.906 2.906 0 0 0-2.94.714l-76.112 76.243 42.115 23.618a8.728 8.728 0 0 0 8.51 0l42.478-23.618Z"></path><path fill="#fff" fillOpacity=".2" d="M98.51 28.604a2.913 2.913 0 0 0-1.984-2.286 2.906 2.906 0 0 0-2.94.713L78.479 42.178 66.6 19.562a2.91 2.91 0 0 0-5.15 0l-6.494 12.365L38.662 1.538A2.91 2.91 0 0 0 35.605.044a2.907 2.907 0 0 0-2.384 2.425L17.474 103.276h-.051l.05.058.415.204 75.676-75.764a2.91 2.91 0 0 1 4.932 1.571l11.965 74.003.116-.073L98.51 28.603Zm-80.898 74.534L33.228 3.182A2.91 2.91 0 0 1 35.613.756a2.911 2.911 0 0 1 3.057 1.495l16.292 30.39 6.495-12.366a2.91 2.91 0 0 1 5.15 0L78.245 42.41 17.61 103.138Z"></path><path fill="#a52714" d="M68.099 126.18a8.728 8.728 0 0 1-8.51 0l-42.015-23.55-.102.647 42.115 23.61a8.728 8.728 0 0 0 8.51 0l42.48-23.61-.11-.67-42.37 23.575z" opacity=".2"></path></svg>
      ),
    },

    {
      id: 4,
      name: "React",
      svg: (
        <svg viewBox="0 0 128 128" height="100%" width="100%"><path fill="#764abc" d="M88.69 88.11c-9 18.4-24.76 30.78-45.61 34.85a39.73 39.73 0 0 1-9.77 1.14c-12 0-23-5-28.34-13.19C-2.2 100-4.64 76.87 19 59.76c.48 2.61 1.46 6.19 2.11 8.31A38.24 38.24 0 0 0 10 81.1c-4.4 8.64-3.91 17.27 1.3 25.25 3.6 5.38 9.3 8.65 16.63 9.65a44 44 0 0 0 26.55-5c12.71-6.68 21.18-14.66 26.72-25.57a9.32 9.32 0 0 1-2.61-6A9.12 9.12 0 0 1 87.37 70h.34a9.15 9.15 0 0 1 1 18.25zm28.67-20.2c12.21 13.84 12.54 30.13 7.82 39.58-4.4 8.63-16 17.27-31.6 17.27a50.48 50.48 0 0 1-21-5.05c2.29-1.63 5.54-4.24 7.33-5.87a41.54 41.54 0 0 0 16 3.42c10.1 0 17.75-4.72 22.31-13.35 2.93-5.7 3.1-12.38.33-19.22a43.61 43.61 0 0 0-17.27-20.85 62 62 0 0 0-34.74-10.59h-2.93a9.21 9.21 0 0 1-8 5.54h-.31a9.13 9.13 0 0 1-.3-18.25h.33a9 9 0 0 1 8 4.89h2.61c20.8 0 39.06 7.98 51.42 22.48zm-82.75 23a7.31 7.31 0 0 1 1.14-4.73c-9.12-15.8-14-35.83-6.51-56.68C34.61 13.83 48.13 3.24 62.79 3.24c15.64 0 31.93 13.69 33.88 40.07-2.44-.81-6-2-8.14-2.44-.53-8.63-7.82-30.13-25.09-29.81-6.19.17-15.31 3.1-20 9.12a43.69 43.69 0 0 0-9.64 25.25 59.61 59.61 0 0 0 8.47 36.16 2.75 2.75 0 0 1 1.14-.16h.32a9.121 9.121 0 0 1 .33 18.24h-.33a9.16 9.16 0 0 1-9.12-8.79z"></path></svg>
    ),
    },

    {
      id: 5,
      name: "Tailwind",
      svg: (
        <svg viewBox="0 0 128 128" height="100%" width="100%"><path d="M22.684 0h84.253v42.667H64.81L22.684 0Zm0 42.667H64.81l42.127 42.666H64.81V128L22.684 85.333V42.667Z"></path></svg>
    ),
    },

    {
      id: 6,
      name: "Tailwind",
      svg: (
      <svg viewBox="0 0 128 128" height="100%" width="100%"><path fill="#5fa04e" d="M86.072 24.664a.71.71 0 0 0-.351.09.755.755 0 0 0-.375.637v18.93a.564.564 0 0 1-.264.464.549.549 0 0 1-.52 0l-3.066-1.773a1.486 1.486 0 0 0-1.478 0L67.75 50.146a1.48 1.48 0 0 0-.754 1.28v14.238c0 .524.291 1.021.754 1.283l12.27 7.135a1.486 1.486 0 0 0 1.476 0l12.27-7.135c.463-.262.754-.759.754-1.283V30.168c0-.553-.291-1.05-.754-1.31l-7.32-4.104a.836.836 0 0 0-.374-.09zM13.686 42.43c-.23 0-.461.086-.663.2L.753 49.739A1.493 1.493 0 0 0 0 51.047l.03 19.101c0 .263.142.526.374.643a.656.656 0 0 0 .725 0l7.295-4.193a1.48 1.48 0 0 0 .75-1.282v-8.939c0-.524.29-1.021.754-1.283l3.095-1.805a1.39 1.39 0 0 1 .752-.203c.26 0 .522.057.725.203l3.096 1.805c.463.262.754.759.754 1.283v8.94c0 .522.288 1.02.75 1.28l7.236 4.194a.704.704 0 0 0 .752 0 .724.724 0 0 0 .377-.643V51.047c0-.524-.29-1.02-.754-1.283L14.47 42.63a1.763 1.763 0 0 0-.664-.201h-.121zm100.67.207v.002l-.002.002c-.253 0-.505.065-.737.197l-12.271 7.13c-.463.264-.75.759-.75 1.284v14.24c0 .524.287 1.02.75 1.281l12.183 6.989a1.43 1.43 0 0 0 1.448 0l7.38-4.133a.724.724 0 0 0 .375-.643.724.724 0 0 0-.375-.64L110.03 61.21a.76.76 0 0 1-.375-.645V56.11a.72.72 0 0 1 .375-.638l3.854-2.213a.705.705 0 0 1 .752 0l3.845 2.213a.762.762 0 0 1 .377.638v3.494c0 .263.144.525.375.641a.704.704 0 0 0 .754 0l7.291-4.28a1.46 1.46 0 0 0 .727-1.28V51.22c0-.524-.292-1.019-.727-1.282l-12.181-7.101a1.499 1.499 0 0 0-.74-.201zm-67.043.049a1.374 1.374 0 0 0-.682.183l-12.17 7.067 4.258 7.81L47.457 42.7a2 2 0 0 0-.143-.013h-.002zm.566.148 8.607 14.814 4.045-7.445a1.34 1.34 0 0 0-.25-.201l-6.271-3.643-6.037-3.488c-.03-.015-.063-.025-.094-.037zm-.25.06-8.774 15.104 8.702 15.965c.024-.005.048-.007.072-.014l8.719-16.047-8.72-15.007zm-13.377 7.172a1.35 1.35 0 0 0-.576 1.123V65.49c0 .228.062.45.168.647l4.728-8.143-4.32-7.928zm26.45.342-4.071 7.49 4.318 7.434V51.189c0-.28-.092-.553-.248-.78zm20.056 2.865c.065 0 .13.015.19.045l4.193 2.448c.116.058.175.201.175.318v4.893c0 .146-.06.264-.175.322l-4.196 2.445a.431.431 0 0 1-.377 0l-4.195-2.443c-.116-.058-.176-.205-.176-.322v-4.893c0-.146.061-.261.176-.32l4.195-2.448a.425.425 0 0 1 .19-.045zm33.555 1.98a.26.26 0 0 0-.145.046l-2.346 1.369a.3.3 0 0 0-.142.26v2.74c0 .116.055.204.142.262l2.346 1.369a.262.262 0 0 0 .289 0l2.344-1.37a.308.308 0 0 0 .144-.261V56.93a.303.303 0 0 0-.144-.26l-2.344-1.371a.26.26 0 0 0-.144-.043v-.002zm-57.819 2.9-8.512 15.665.014-.007 12.287-7.137c.343-.194.563-.526.637-.903l-4.426-7.619zm-17.783.095-4.715 8.117c.1.123.217.23.35.31L46.5 73.737l.13.075h.003a1.377 1.377 0 0 0 .3.126c.031.01.062.015.092.022.06.013.118.022.178.027.029.003.057.002.086.002l-8.578-15.74zm24.51 13.393c-.427 0-.853.1-1.215.304l-11.55 6.73A2.457 2.457 0 0 0 49.24 80.8v13.42c0 .874.463 1.689 1.215 2.127l3.041 1.746c1.475.728 1.995.724 2.66.724 2.17 0 3.416-1.338 3.416-3.638V81.936a.356.356 0 0 0-.345-.352h-1.475a.356.356 0 0 0-.352.352v13.248c0 1.019-1.066 2.039-2.773 1.166l-3.156-1.834c-.116-.058-.174-.207-.174-.323V80.768c0-.116.058-.263.174-.32l11.545-6.696c.087-.058.232-.058.35 0l11.544 6.695c.115.06.176.176.176.32v13.424c0 .145-.06.265-.176.323l-11.547 6.726c-.087.058-.232.058-.35 0l-2.949-1.777c-.088-.058-.204-.086-.29-.03-.81.468-.953.528-1.735.79-.174.058-.463.172.115.492l3.852 2.303c.376.203.78.318 1.215.318.434 0 .866-.115 1.213-.26L75.98 96.35a2.463 2.463 0 0 0 1.215-2.13V80.8c0-.874-.463-1.686-1.215-2.123l-11.546-6.73a2.488 2.488 0 0 0-1.213-.305zm18.027 6.129a2.236 2.236 0 0 0-2.227 2.244 2.236 2.236 0 0 0 2.227 2.242c1.217 0 2.23-1.02 2.23-2.242a2.254 2.254 0 0 0-2.23-2.243v-.001zm-.03.376h.003a1.86 1.86 0 0 1 1.883 1.868c0 1.02-.841 1.89-1.883 1.89-1.012 0-1.854-.842-1.854-1.89s.87-1.866 1.852-1.868zm-.81.614v2.56h.494v-1.013h.438c.174 0 .23.058.26.203 0 .03.086.669.086.785h.52c-.06-.116-.087-.468-.116-.672-.028-.32-.056-.551-.404-.58.174-.059.46-.145.46-.611 0-.67-.58-.67-.869-.67l-.869-.002zm.438.408h.402c.146 0 .379 0 .379.35 0 .116-.059.35-.379.35h-.402v-.7zm-14.469 2.01c-3.3 0-5.272 1.399-5.272 3.758 0 2.534 1.969 3.228 5.124 3.548 3.79.38 4.08.935 4.08 1.692 0 1.31-1.042 1.861-3.473 1.861-3.068 0-3.735-.757-3.967-2.299 0-.176-.14-.29-.314-.29H61.05a.35.35 0 0 0-.35.35c0 1.98 1.044 4.307 6.11 4.307 3.645 0 5.755-1.456 5.755-4.02 0-2.503-1.68-3.174-5.238-3.64-3.59-.466-3.965-.728-3.965-1.572 0-.699.32-1.629 2.98-1.629 2.375 0 3.272.524 3.62 2.125a.34.34 0 0 0 .316.264h1.534c.087 0 .177-.057.236-.115a.476.476 0 0 0 .086-.264c-.231-2.795-2.053-4.076-5.758-4.076z"></path></svg>
    ),
    },



  ];

export const Vlog_card = () => {


    return (
        <div className={`h-[210px] w-full md:w-[48%] lg:h-[30vh] lg:w-[31%] border border-[#27272a] flex flex-col shadow-white-light rounded-lg bg-[#18181b] scaleup-animation overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[101%] hover:border-[#64f196] group`}>
            <div className="header w-full h-[17%]  bg-[#27272a] px-[3%] py-[1%] flex items-center justify-between text-[#d4d4d8] text-[18px] lg:text-[1.25vw]">
                <div className='flex items-center gap-2 lg:gap-[0.6vw] w-[70%] group-hover:text-[#64f196]'><FaGithub className=' mb-[0.2vw]' /><p className='line-clamp-1'>E-Commerce Website</p>  <FaExternalLinkAlt className=' mb-[0.2vw] text-[12px] lg:text-[1vw]' /></div>
                <div className=' text-[#7c7c7c] text-[14px] lg:text-[1vw] flex items-center justify-center'>12-04-2025</div>
            </div>
            <main className='grow-1 px-3 lg:px-[1vw] py-2 lg:py-[0.8vw] flex justify-between  flex-col gap-2 lg:gap-[1vw]'>
              <div className='lg:max-h-max h-2 grow-1 overflow-scroll'>
                <p className='text-[15px] lg:text-[1.2vw] font-[300] leading-[15px] lg:leading-[1.35vw]  lg:line-clamp-7 text-[#cecece]'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit qui fugit, omnis impedit dolore alias, optio magnam, repellat voluptas excepturi saepe voluptates suscipit ratione eos eaque mollitia. Minus, quidem exercitationem.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit qui fugit, omnis impedit dolore alias, asdf  optio magnam, repellat voluptas excepturi saepe voluptates suscipit ratione eos eaque mollitia. Minus, quidem exercitationem.
                  </p>
              </div>
              <div className='flex w-full items-center justify-end'>
                <button className='text-[14px] lg:text-[0.9vw] border-[#cecece] text-[#cecece] border rounded-xl group-hover:text-[#64f196] group-hover:border-[#64f196]  cursor-pointer px-2.5 lg:px-[0.7vw] py-[0.2vw] flex gap-1 lg:gap-[0.2vw] items-center'>Read more <TiArrowRight className=' text-[16px] lg:text-[1.2vw]'/></button>
              </div>
            </main>

        </div>

    )
}
export const Project_card = () => {


    return (
        <div className={`h-[210px] w-full md:w-[48%] lg:h-[30vh] lg:w-[31%] border border-[#27272a] flex flex-col shadow-white-light rounded-lg bg-[#18181b] scaleup-animation overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[101%] hover:border-[#64f196] group`}>
            <div className="header w-full h-[17%]  bg-[#27272a] px-[3%] py-[1%] flex items-center justify-between text-[#d4d4d8] text-[18px] lg:text-[1.25vw]">
                <div className='flex items-center gap-2 lg:gap-[0.6vw] w-[70%] group-hover:text-[#64f196]'><FaGithub className='mb-[0.3vw]' /><p className='line-clamp-1'>E-Commerce Website</p>  <FaExternalLinkAlt className=' mb-[0.2vw] text-[12px] lg:text-[1vw]' /></div>
                <div className=' text-[#7c7c7c] text-[14px] lg:text-[1vw] flex items-center justify-center'>12-04-2025</div>
            </div>
            <main className='grow-1 mx-[0.5vw] my-[0.4vw]   rounded-md overflow-hidden relative '>
                <img src="/maxebels-banner.webp" className='object-cover h-full w-full' alt="" />
                <div className='absolute bottom-[-100%] rounded-tl-xl rounded-tr-xl bg-[#000000d2] flex flex-col justify-between z-[99] group-hover:bottom-[0] transition-all duration-500 px-2 lg:px-[0.5vw] py-2 lg:py-[0.4vw]  h-[85%] w-full border border-[#27272a]'>
                    <p className='text-[15px] lg:text-[1.2vw] font-[300] leading-[15px] lg:leading-[1.35vw] overflow-scroll grow-1 max-h-[67%] lg:line-clamp-5 text-[#cecece]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam totam incidunt soluta, ducimus, sit inventore natus asdf asd fasdf asdf asdf  asdfasdf  nihil vitae dolorem distinctio commodi possimus accusamus veritatis doloremque hic nobis. Neque, facilis aut.
                    </p>

                    <div className='flex gap-2 lg:gap-[0.5vw] items-center w-full overflow-scroll'>
                    { skills.map((elem) =>{
          return (
              <div key={elem.id} className="h-[30px] w-[33px] lg:h-[2.7vw] p-1 lg:w-[2.9vw] border-[1px] border-[#1b3f0d] bg-[#a0a0a05c] rounded-lg shrink-0">
                {elem.svg}
              </div>
          )
       })}
                    </div>
                </div>
            </main>

        </div>

    )
}
