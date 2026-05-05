import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
function App() {
  const whtsapp = () => {
    const url = `https://wa.me/7982275958?text=Hi%2C%20I%20came%20from%20your%20portfolio%20and%20would%20like%20to%20work%20with%20you.`;
    window.open(url);
  };
  const onsubmit = async (data) => {
    const msg = `
        name:${data.name}
        email:${data.email}
        phone no.:${data.tel}
       
        message:${data.msg}`;
    const url = `https://wa.me/7982275958?text=${encodeURIComponent(msg)}`;
    window.open(url);

    reset();
  };
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const [load, setload] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setload(true);
    }, 2000);
  }, []);

  return (
    <>
      <div>
        <div
          className={` fixed top-0 z-60 w-screen bg-black h-screen ${load ? "hidden" : "flex"}  justify-center items-center`}
        >
          <div class="loader"></div>
        </div>
        <nav className="fixed fo top-0 z-50 w-screen  border-b-2 border-purple-800  bg-black/90 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center">
            <h2 className="text-xl px-2 font-bold text-white w-screen md:w-fit">
              NAMAN KURADIA
            </h2>
            <div className="flex w-screen md:w-fit border px-2  justify-around space-x-4">
              <a href="#home" className="text-white hover:text-blue-500">
                Home
              </a>
              <a href="#about" className="text-white hover:text-blue-500">
                About
              </a>
              <a href="#projects" className="text-white hover:text-blue-500">
                Projects
              </a>

              <a href="#contact" className="text-white hover:text-blue-500">
                Contact
              </a>
            </div>
          </div>
        </nav>

        <section id="home">
          <div className="bg-black text-white w-screen relative h-screen">
            <div className=" w-full h-full flex justify-center items-center   z-10 top-0 overflow-x-hidden">
              <img
                className=" w-screen justify-center items-center flex h-screen fixed left-0 right-0 object-cover object-center  top-0"
                src="img/hero11.png"
                alt=""
              />
              <div className="w-screen h-screen bg-black/60 z-30 justify-center flex  items-center">
                <div className=" op w-4/5 sm:w-fit ">
                  <h3 className=" sm:text-3xl text-[18px] text-white font-semibold fo ">
                    NAMAN KURADIA
                  </h3>
                  <h1 className=" text-white font-semibold text-4xl sm:text-5xl fo">
                    Professional Video Editor
                  </h1>
                  <div className=" flex flex-col sm:flex-row w-full sm:w-fit gap-4 sm:gap-10 items-center pt-2 sm:pt-4">
                    <button
                      onClick={() => {
                        whtsapp();
                      }}
                      type="button"
                      className="text-white  fo rounded-2xl cursor-pointer w-full  sm:w-50 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5"
                    >
                      Let’s Talk on WhatsApp
                    </button>
                    <a className=" w-full sm:w-50" href="#projects">
                      <button
                        type="button"
                        className="text-white fo rounded-2xl cursor-pointer w-full sm:w-50 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5"
                      >
                        View My Projects
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className=" text-white fo w-screen h-fit  pb-10 relative z-40 bg-black/90"
          id="about"
        >
          <div>
            <h1 className=" sm:text-start text-center w-3/5 sm:w-4/5 md:w-2/5 px-2 mx-auto p-2  text-4xl sm:text-5xl text-white pt-10 font-semibold">
              About
            </h1>
            <div className="w-3/5 sm:w-4/5 md:w-2/5 bg-gradient-to-br mx-auto h-1 from-purple-600 to-blue-500 "></div>
          </div>

          <div className=" flex flex-col justify-center items-center pt-10 text-[16px] sm:text-2xl">
            <div className="sm:w-4/5 w-[95vw] fo flex flex-col font-semibold gap-3 sm:gap-5">
              <p>
                I’m Naman Kuradia, a Video Editor with 6+ years of experience in
                post-production and production management.
              </p>
              <p>
                I’ve worked with brands like Nestle and Realme, editing 2000+
                reels, YouTube videos, and podcasts. I specialize in creating
                cinematic, high-quality content that performs across platforms.
              </p>
              <p>
                With expertise in FCP X, Premiere Pro, and AI-based workflows, I
                focus on delivering clean, engaging, and impactful visual
                stories.
              </p>
            </div>
          </div>
          <div className=" flex gap-15 pt-10  justify-center">
            <svg
              width="60"
              height="60"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="4" y="4" width="56" height="56" rx="14" fill="#111" />

              <polygon points="10,14 54,14 48,20 6,20" fill="#ff3c3c" />
              <polygon points="12,20 52,20 46,26 8,26" fill="#3b82f6" />
              <polygon points="14,26 50,26 44,32 10,32" fill="#22c55e" />
              <polygon points="16,32 48,32 42,38 12,38" fill="#facc15" />

              <rect x="10" y="38" width="44" height="12" rx="4" fill="#222" />
            </svg>

            <svg
              width="60"
              height="60"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="4" y="4" width="56" height="56" rx="12" fill="#1e1b4b" />
              <rect
                x="4"
                y="4"
                width="56"
                height="56"
                rx="12"
                fill="none"
                stroke="#a855f7"
                stroke-width="2"
              />
              =
              <text
                x="50%"
                y="55%"
                text-anchor="middle"
                fill="#a855f7"
                font-size="20"
                font-family="Arial, sans-serif"
                font-weight="bold"
              >
                Pr
              </text>
            </svg>
            <svg
              width="60"
              height="60"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="4" y="4" width="56" height="56" rx="12" fill="#0f172a" />

              <rect
                x="4"
                y="4"
                width="56"
                height="56"
                rx="12"
                fill="none"
                stroke="#38bdf8"
                stroke-width="2"
              />

              <text
                x="50%"
                y="55%"
                text-anchor="middle"
                fill="#38bdf8"
                font-size="20"
                font-family="Arial, sans-serif"
                font-weight="bold"
              >
                Lr
              </text>
            </svg>
          </div>
        </section>
        <section
          id="projects"
          className="relative z-40 bg-black/90 w-screen min-h-screen"
        >
          <div>
            <h1 className=" w-3/5 text-center sm:text-start sm:w-4/5 md:w-2/5 px-2 mx-auto p-2  text-4xl sm:text-5xl text-white pt-10 ">
              Projects
            </h1>
            <div className="w-3/5 sm:w-4/5 md:w-2/5 bg-gradient-to-br mx-auto h-1 from-purple-600 to-blue-500 "></div>
          </div>
          <div className="sm:w-3/5 lg:w-2/5 w-4/5 text-gray-100 fo text-2xl sm:text-4xl mt-10 ">
            <h1 className="border-b-4 sm:p-2 px-2  border-b-purple-800">
              Reels Edits
            </h1>
          </div>

          <div className=" mt-10 overflow-x-scroll flex items-center sco py-10">
            <div className=" flex gap-10 px-3 ">
              <div
                className=" p-5 border-2  border-purple-800    shadow-[0_0_10px_rgba(107,33,168,0.5)]
            hover:shadow-[0_0_30px_rgba(107,33,168,1)]
            hover:scale-105
            transition-all duration-300 ease-in-out rounded-2xl "
              >
                <iframe
                  width="200"
                  height="350"
                  src="https://youtube.com/embed/Rq5eiP4wIpg?si=JY-ZRZQD44Ym2OiG"
                  title="YouTube Shorts video"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
              <div
                className=" p-5 border-2  border-purple-800    shadow-[0_0_10px_rgba(107,33,168,0.5)]
            hover:shadow-[0_0_30px_rgba(107,33,168,1)]
            hover:scale-105
            transition-all duration-300 ease-in-out rounded-2xl "
              >
                <iframe
                  width="200"
                  height="350"
                  src="https://youtube.com/embed/SbBW-3ZiJXk?si=pIl4ItbqLkOUFxi_"
                  title="YouTube Shorts video"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
              <div
                className=" p-5 border-2  border-purple-800    shadow-[0_0_10px_rgba(107,33,168,0.5)]
            hover:shadow-[0_0_30px_rgba(107,33,168,1)]
            hover:scale-105
            transition-all duration-300 ease-in-out rounded-2xl "
              >
                <iframe
                  width="200"
                  height="350"
                  src="https://youtube.com/embed/qSPtaFSX7Mo?si=l3FaBbqipOP2RZzF"
                  title="YouTube Shorts video"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
              <div
                className=" p-5 border-2  border-purple-800    shadow-[0_0_10px_rgba(107,33,168,0.5)]
            hover:shadow-[0_0_30px_rgba(107,33,168,1)]
            hover:scale-105
            transition-all duration-300 ease-in-out rounded-2xl "
              >
                <iframe
                  width="200"
                  height="350"
                  src="https://youtube.com/embed/j8_2dLMZol8?si=qQ_pmtFBzoAfHULa"
                  title="YouTube Shorts video"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
              <div
                className=" p-5 border-2  border-purple-800    shadow-[0_0_10px_rgba(107,33,168,0.5)]
            hover:shadow-[0_0_30px_rgba(107,33,168,1)]
            hover:scale-105
            transition-all duration-300 ease-in-out rounded-2xl "
              >
                <iframe
                  width="200"
                  height="350"
                  src="https://youtube.com/embed/dT9UDBM9l3c?si=IeYmV42vv_0f_ojj"
                  title="YouTube Shorts video"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
              <div
                className=" p-5 border-2  border-purple-800    shadow-[0_0_10px_rgba(107,33,168,0.5)]
            hover:shadow-[0_0_30px_rgba(107,33,168,1)]
            hover:scale-105
            transition-all duration-300 ease-in-out rounded-2xl "
              >
                <iframe
                  width="200"
                  height="350"
                  src="https://youtube.com/embed/l0r2WV7ymMg?si=b3TXXuUY01N3nc2b"
                  title="YouTube Shorts video"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
               <div
                className=" p-5 border-2  border-purple-800    shadow-[0_0_10px_rgba(107,33,168,0.5)]
            hover:shadow-[0_0_30px_rgba(107,33,168,1)]
            hover:scale-105
            transition-all duration-300 ease-in-out rounded-2xl "
              >
                <iframe
                  width="200"
                  height="350"
                  src="https://youtube.com/embed/lKSQp1df90g?si=2MkZfH8tEcXIF93S"
                  title="YouTube Shorts video"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>

          <div></div>

           <div className="sm:w-3/5 lg:w-2/5 w-4/5 text-gray-100 fo text-2xl sm:text-4xl mt-10 ">
            <h1 className="border-b-4 sm:p-2 px-2  border-b-purple-800">
              YouTube Video Edits
            </h1>
          </div>

          <div className="w-screen grid grid-cols-1 gap-5 md:grid-cols-2 place-items-center xl:grid-cols-3 p-10  ">
            <div className="p-5 w-75 h-45 sm:w-120 sm:h-76 xl:w-100 xl:h-70  md:w-80 md:h-60 border-2  border-purple-800    shadow-[0_0_10px_rgba(107,33,168,0.5)]
            hover:shadow-[0_0_30px_rgba(107,33,168,1)]
            hover:scale-105
            transition-all duration-300 ease-in-out rounded-2xl flex justify-center items-center">
              <iframe className=" w-full h-full" src="https://www.youtube.com/embed/wopApqYnu4Q?si=NzLgFAj49S1p9knr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="p-5 w-75 h-45 sm:w-120 sm:h-76 xl:w-100 xl:h-70 md:w-80 md:h-60 border-2  border-purple-800    shadow-[0_0_10px_rgba(107,33,168,0.5)]
            hover:shadow-[0_0_30px_rgba(107,33,168,1)]
            hover:scale-105
            transition-all duration-300 ease-in-out rounded-2xl flex justify-center items-center">
              <iframe className=" w-full h-full" src="https://www.youtube.com/embed/HSYuoCJ0RTo?si=jPQFMC3xdi2qgvjH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
            <div className="p-5 w-75 h-45 sm:w-120 sm:h-76 xl:w-100 xl:h-70  md:w-80 md:h-60 border-2  border-purple-800    shadow-[0_0_10px_rgba(107,33,168,0.5)]
            hover:shadow-[0_0_30px_rgba(107,33,168,1)]
            hover:scale-105
            transition-all duration-300 ease-in-out rounded-2xl flex justify-center items-center">
              <iframe className=" w-full h-full" src="https://www.youtube.com/embed/yCwtvp9X6vc?si=M6QtFrGYk8ET20yB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
            <div className="p-5 w-75 h-45 sm:w-120 sm:h-76 xl:w-100 xl:h-70  md:w-80 md:h-60 border-2  border-purple-800    shadow-[0_0_10px_rgba(107,33,168,0.5)]
            hover:shadow-[0_0_30px_rgba(107,33,168,1)]
            hover:scale-105
            transition-all duration-300 ease-in-out rounded-2xl flex justify-center items-center">
              <iframe className=" w-full h-full" src="https://www.youtube.com/embed/G-EWi_btLF0?si=E0oWa1QQM9Jw27v6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
            <div className="p-5 w-75 h-45 sm:w-120 sm:h-76 xl:w-100 xl:h-70  md:w-80 md:h-60 border-2  border-purple-800    shadow-[0_0_10px_rgba(107,33,168,0.5)]
            hover:shadow-[0_0_30px_rgba(107,33,168,1)]
            hover:scale-105
            transition-all duration-300 ease-in-out rounded-2xl flex justify-center items-center">
              <iframe className=" w-full h-full" src="https://www.youtube.com/embed/BzNIgFAjT5Y?si=FvmJIgr8yPnCzwAR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="p-5 w-75 h-45 sm:w-120 sm:h-76 xl:w-100 xl:h-70  md:w-80 md:h-60 border-2  border-purple-800    shadow-[0_0_10px_rgba(107,33,168,0.5)]
            hover:shadow-[0_0_30px_rgba(107,33,168,1)]
            hover:scale-105
            transition-all duration-300 ease-in-out rounded-2xl flex justify-center items-center">
              <iframe className=" w-full h-full" src="https://www.youtube.com/embed/PnS-O9lV-VY?si=hf87qPT7ScNOGARu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
             <div className="p-5 w-75 h-45 sm:w-120 sm:h-76 xl:w-100 xl:h-70  md:w-80 md:h-60 border-2  border-purple-800    shadow-[0_0_10px_rgba(107,33,168,0.5)]
            hover:shadow-[0_0_30px_rgba(107,33,168,1)]
            hover:scale-105
            transition-all duration-300 ease-in-out rounded-2xl flex justify-center items-center">
              <iframe className="w-full h-full" src="https://www.youtube.com/embed/w-B5hixq1Sw?si=8CqXtWHYwGf9_fnZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
             <div className="p-5 w-75 h-45 sm:w-120 sm:h-76 xl:w-100 xl:h-70  md:w-80 md:h-60 border-2  border-purple-800    shadow-[0_0_10px_rgba(107,33,168,0.5)]
            hover:shadow-[0_0_30px_rgba(107,33,168,1)]
            hover:scale-105
            transition-all duration-300 ease-in-out rounded-2xl flex justify-center items-center">
              <iframe className="w-full h-full" src="https://www.youtube.com/embed/e0LDqaKjPA8?si=i0LsvR4tCyQoeC7Z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
            
m
          </div>
        </section>
        <section
          id="contact"
          className="w-screen bg-black/90 min-h-screen relative z-40 "
        >
          <div className=" pb-15 h-full  flex flex-col gap-10 pt-50 justify-center items-center w-screen  text-white">
            <div className="md:w-2/5 w-4/5 text-center  flex flex-col justify-center items-center ">
              <h1 className="md:text-5xl fo text-4xl w-4/5 sm:w-full sm:text-start  sm:p-2  ">
                Get In Touch
              </h1>
              <div className="w-4/5 sm:w-full bg-gradient-to-br h-1 from-purple-600 to-blue-500 "></div>
            </div>
            <div className="w-full  flex flex-col md:flex-row h-fit ">
              <div className="md:w-2/5 w-full  justify-center flex  items-center flex-col ">
                <div className=" w-4/5 text-2xl md:w-3/5 flex justify-center  items-center md:text-3xl">
                  <h1>Contact Information</h1>
                </div>
                <div className=" w-4/5 md:w-3/5  items-center flex gap-10 mt-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="drop-shadow-[0_0_6px_rgba(99,102,241,0.7)]"
                  >
                    <defs>
                      <linearGradient
                        id="gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#9333ea" />{" "}
                        {/* purple-600 */}
                        <stop offset="100%" stopColor="#3b82f6" />{" "}
                        {/* blue-500 */}
                      </linearGradient>
                    </defs>

                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.09 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.78.59 2.62a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.46-1.11a2 2 0 0 1 2.11-.45c.84.27 1.72.47 2.62.59A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <div>
                    <h1 className="md:text-3xl text-[20px] ">Phone</h1>
                    <p className="text-white/70 text-[16px]">+91 7982275958</p>
                  </div>
                </div>
                <div className=" w-4/5 md:w-3/5 flex     items-center gap-10 mt-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="url(#gradientMail)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="drop-shadow-[0_0_6px_rgba(99,102,241,0.7)] transition-all duration-300 hover:scale-110"
                  >
                    <defs>
                      <linearGradient
                        id="gradientMail"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#9333ea" />{" "}
                        {/* purple-600 */}
                        <stop offset="100%" stopColor="#3b82f6" />{" "}
                        {/* blue-500 */}
                      </linearGradient>
                    </defs>

                    <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                    <path d="M3 7l9 6 9-6"></path>
                  </svg>
                  <div>
                    <h1 className="md:text-3xl text-[20px] ">Email</h1>
                    <p className="text-white/70    w-full  text-[16px]">
                      nishukuradia781@gmail.com
                    </p>
                  </div>
                </div>

                <div className=" w-4/5 md:w-3/5 flex    items-center gap-8 mt-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="url(#gradientLocation)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="drop-shadow-[0_0_6px_rgba(99,102,241,0.7)] transition-all duration-300 hover:scale-110"
                  >
                    <defs>
                      <linearGradient
                        id="gradientLocation"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#9333ea" />{" "}
                        {/* purple-600 */}
                        <stop offset="100%" stopColor="#3b82f6" />{" "}
                        {/* blue-500 */}
                      </linearGradient>
                    </defs>

                    <path d="M12 21s-6-5.33-6-10a6 6 0 1 1 12 0c0 4.67-6 10-6 10z"></path>
                    <circle cx="12" cy="11" r="2.5"></circle>
                  </svg>
                  <div>
                    <h1 className="md:text-3xl text-[20px]">Location</h1>
                    <p className="text-white/70    w-full  text-[16px]">
                      New Delhi, India
                    </p>
                  </div>
                </div>
                <div className="w-full mt-5 gap-10 flex justify-center ">
                  <div>
                    <a href="https://www.instagram.com/namankuradia?igsh=bmp4Nmo5ZTFvMHFl">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="url(#gradientInsta)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="drop-shadow-[0_0_6px_rgba(99,102,241,0.7)] transition-all duration-300 hover:scale-110"
                      >
                        <defs>
                          <linearGradient
                            id="gradientInsta"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop offset="0%" stopColor="#9333ea" />{" "}
                            {/* purple-600 */}
                            <stop offset="100%" stopColor="#3b82f6" />{" "}
                            {/* blue-500 */}
                          </linearGradient>
                        </defs>

                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="5"
                          ry="5"
                        ></rect>
                        <circle cx="12" cy="12" r="4"></circle>
                        <circle cx="17" cy="7" r="1"></circle>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className=" w-full md:w-3/5 ">
                <form
                  className=" flex-col fo flex justify-center items-center gap-5 mt-10"
                  action=""
                  onSubmit={handleSubmit(onsubmit)}
                >
                  <div className=" w-4/5 ">
                    <h1 className="text-[16px] md:text-2xl">Full Name</h1>
                    <input
                      placeholder="Enter Your Full name"
                      className="border-white border h-10 w-full"
                      type="text"
                      {...register("name", { required: true })}
                    />
                  </div>
                  <div className=" w-4/5 ">
                    <h1 className="text-[16px] md:text-2xl">Email Address </h1>
                    <input
                      placeholder="Enter Your Email"
                      className="border-white border h-10 w-full"
                      type="email"
                      {...register("email", { required: true })}
                    />
                  </div>
                  <div className=" w-4/5 ">
                    <h1 className="text-[16px] md:text-2xl">Phone Number</h1>
                    <input
                      placeholder="Enter Your Phone Number"
                      className="border-white border h-10 w-full"
                      type="tel"
                      {...register("tel", { required: true })}
                    />
                  </div>
                  <div className=" w-4/5 ">
                    <h1 className="text-[16px] md:text-2xl">Message</h1>
                    <textarea
                      placeholder="Write Your Message"
                      className="border-white w-full border"
                      name=""
                      id=""
                      {...register("msg", { required: true })}
                    ></textarea>
                  </div>

                  <input
                    className=" text-white fo rounded-2xl cursor-pointer w-70  bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5"
                    disabled={isSubmitting}
                    type="submit"
                    value="Send Message via WhatsApp "
                  />
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
