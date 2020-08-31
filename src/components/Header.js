import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const svgVariants = {
  hidden: {
    x: 500,
  },
  visible: {
    x: 0,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div className="h-full" id="Home">
      <div className="bg-gray-900 p-6 flex justify-center">
        <div className="logo text-gray-200 cursor-pointer">
          <Link to="Home" smooth>
            {" "}
            <span className="text-2xl font-hairline antialiased normal-case tracking-widest">
              Pawan
            </span>
            <span className="text-2xl font-bold antialiased normal-case tracking-widest">
              Bhatta
            </span>
          </Link>
        </div>
      </div>

      <div className="flex md:flex-row flex-col sm:px-32 px-4">
        <div className="md:w-1/2 flex flex-col justify-center flex-grow  py-12">
          <div className="pb-12 text-2xl ">
            Hi, my name is <span className="text-indigo-500">Pawan Bhatta</span>
            , A Full Stack JavaScript Developer
          </div>
          <div className=" pb-6 text-4xl">
            I bring passion to my work everyday
          </div>
          <div className="py-12 md:py-6 text-xl flex justify-center">
            <Link to="Works" smooth>
              <button
                className="bg-indigo-700 text-gray-200 rounded-lg px-4 py-2 shadow-lg "
                onClick={() => {
                  console.log("MY WORK");
                }}
              >
                See My Work
              </button>
            </Link>
          </div>
        </div>
        <motion.svg
          className="small-svg md:w-1/2 w-full px-12 "
          id="a0b12775-6e5f-4473-9cb3-a305020561f5"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          width="900.25"
          height="600.32263"
          viewBox="0 0 925.25 687.32263"
          variants={svgVariants}
          initial="hidden"
          animate="visible"
        >
          <title>online_cv</title>
          <rect
            x="68.94089"
            y="48.3297"
            width="799.80911"
            height="511.72621"
            fill="#3f3d56"
          />
          <rect
            x="485.90299"
            y="140.72471"
            width="360.10363"
            height="418.85738"
            fill="#f2f2f2"
          />
          <path
            d="M174.04032,637.75877c10.94518,20.29832,34.17479,29.012,34.17479,29.012s5.484-24.19646-5.46123-44.49478-34.17479-29.012-34.17479-29.012S163.09513,617.46044,174.04032,637.75877Z"
            transform="translate(-137.375 -106.33868)"
            fill="#3f3d56"
          />
          <path
            d="M181.56336,631.08076c19.76056,11.88861,27.371,35.50267,27.371,35.50267s-24.42779,4.33881-44.18835-7.5498S137.375,623.531,137.375,623.531,161.80279,619.19215,181.56336,631.08076Z"
            transform="translate(-137.375 -106.33868)"
            fill="#6c63ff"
          />
          <rect
            x="607.70226"
            y="179.69835"
            width="218.40315"
            height="8.80658"
            fill="#fff"
          />
          <rect
            x="607.70226"
            y="199.07282"
            width="218.40315"
            height="8.80658"
            fill="#fff"
          />
          <rect
            x="607.70226"
            y="218.4473"
            width="73.97526"
            height="8.80658"
            fill="#fff"
          />
          <rect
            x="159.21777"
            y="444.09022"
            width="218.40315"
            height="8.80658"
            fill="#fff"
          />
          <rect
            x="159.21777"
            y="463.4647"
            width="218.40315"
            height="8.80658"
            fill="#fff"
          />
          <rect
            x="159.21777"
            y="482.83917"
            width="73.97526"
            height="8.80658"
            fill="#fff"
          />
          <rect
            x="556.52964"
            y="287.72944"
            width="218.40315"
            height="8.80658"
            fill="#fff"
          />
          <rect
            x="556.52964"
            y="307.10391"
            width="218.40315"
            height="8.80658"
            fill="#fff"
          />
          <rect
            x="556.52964"
            y="326.05674"
            width="218.40315"
            height="8.80658"
            fill="#fff"
          />
          <rect
            x="556.52964"
            y="345.00956"
            width="218.40315"
            height="8.80658"
            fill="#fff"
          />
          <rect
            x="556.52964"
            y="363.96238"
            width="218.40315"
            height="8.80658"
            fill="#fff"
          />
          <rect
            x="556.52964"
            y="382.9152"
            width="218.40315"
            height="8.80658"
            fill="#fff"
          />
          <rect
            x="556.52964"
            y="401.86803"
            width="218.40315"
            height="8.80658"
            fill="#fff"
          />
          <rect
            x="556.52964"
            y="420.82085"
            width="218.40315"
            height="8.80658"
            fill="#fff"
          />
          <rect
            x="556.52964"
            y="439.77367"
            width="218.40315"
            height="8.80658"
            fill="#fff"
          />
          <rect
            x="556.52964"
            y="458.72649"
            width="218.40315"
            height="8.80658"
            fill="#fff"
          />
          <rect
            x="556.52964"
            y="477.67932"
            width="218.40315"
            height="8.80658"
            fill="#fff"
          />
          <path
            d="M485.37723,410.3988a79.38565,79.38565,0,0,1-29.538,61.87147,78.46291,78.46291,0,0,1-10.88838,7.42,76.93847,76.93847,0,0,1-7.12628,3.57263,78.80279,78.80279,0,0,1-25.48209,6.45343q-3.24088.27009-6.54817.26531a78.642,78.642,0,0,1-13.02058-1.07084c-1.51626-.23691-3.01349-.53067-4.49181-.87181a76.559,76.559,0,0,1-7.64747-2.12271,79.39979,79.39979,0,0,1-27.927-16.24258,72.43138,72.43138,0,0,1-5.92275-5.8943A79.57554,79.57554,0,1,1,485.37723,410.3988Z"
            transform="translate(-137.375 -106.33868)"
            fill="#6c63ff"
          />
          <path
            d="M722.13629,321.62139c.113,25.4717-14.99017,34.43149-33.6679,34.5144q-.65078.00288-1.29534-.00879-1.29857-.02225-2.57035-.10691c-16.86257-1.11874-30.00214-10.40985-30.10729-34.09847-.10881-24.51479,31.08548-55.59106,33.42508-57.889l.00413-.0021c.08888-.08758.13437-.13136.13437-.13136S722.02324,296.15175,722.13629,321.62139Z"
            transform="translate(-137.375 -106.33868)"
            fill="#6c63ff"
          />
          <path
            d="M687.22016,352.245l12.29276-17.33773-12.31548,19.23512-.02439,1.98457q-1.29857-.02225-2.57035-.10691l1.21955-25.488-.01124-.19714.02264-.03747.11595-2.40845-12.5171-19.17263L685.979,326.085l.03341.5105.92128-19.25719-10.73063-19.822,10.84639,16.43792.87109-39.92162.00355-.13286.00058.13076L687.89,295.51029l10.53721-12.52651-10.57087,15.23766-.2037,17.24047,9.82172-16.58775-9.8499,19.12244-.11313,9.58657,14.25791-23.09227-14.29912,26.43658Z"
            transform="translate(-137.375 -106.33868)"
            fill="#3f3d56"
          />
          <path
            d="M1005.65105,378.78551A132.66963,132.66963,0,0,0,872.98142,511.45513v.00017a38.85325,38.85325,0,0,1-38.85325,38.85325H769.68842a115.6121,115.6121,0,0,0-115.6121,115.6121v.00012h351.57486V378.78551Z"
            transform="translate(-137.375 -106.33868)"
            fill="#3f3d56"
          />
          <rect
            x="459.84286"
            y="48.3297"
            width="17.05754"
            height="511.72621"
            fill="#2f2e41"
          />
          <path
            d="M440.38325,147.08725v-13.267a27.4816,27.4816,0,0,0-54.96319,0v13.267H333.2998v29.37688H492.50351V147.08725Zm-27.48159-33.16744a16.1099,16.1099,0,1,1-16.1099,16.1099A16.10989,16.10989,0,0,1,412.90166,113.91981Z"
            transform="translate(-137.375 -106.33868)"
            fill="#6c63ff"
          />
          <path
            d="M419.92567,405.14744s-7.91562,22.529-3.04447,25.99506-16.44012,31.77174-16.44012,31.77174l-25.57351-6.932,14.00454-23.68439s1.82668-23.68438,1.82668-27.15039S419.92567,405.14744,419.92567,405.14744Z"
            transform="translate(-137.375 -106.33868)"
            fill="#ffb8b8"
          />
          <path
            d="M419.92567,405.14744s-7.91562,22.529-3.04447,25.99506-16.44012,31.77174-16.44012,31.77174l-25.57351-6.932,14.00454-23.68439s1.82668-23.68438,1.82668-27.15039S419.92567,405.14744,419.92567,405.14744Z"
            transform="translate(-137.375 -106.33868)"
            opacity="0.1"
          />
          <circle cx="266.37596" cy="294.76508" r="20.79605" fill="#ffb8b8" />
          <path
            d="M388.282,488.039a76.559,76.559,0,0,1-7.64747-2.12271l3.9801-27.292,1.23192-8.41506,6.31127,2.36911c.8529.31273,1.81951.68227,2.92824,1.08975a6.65729,6.65729,0,0,0,5.28785-.18948c6.10275-2.79556,9.73223-13.67446,9.73223-13.67446s.2464,3.05138.56862,8.216c.57805,9.06894,1.412,24.66707,1.6678,41.69621q-3.24088.27009-6.54817.26531a78.642,78.642,0,0,1-13.02058-1.07084C391.25751,488.67393,389.76028,488.38017,388.282,488.039Z"
            transform="translate(-137.375 -106.33868)"
            fill="#d0cde1"
          />
          <path
            d="M393.92986,436.34522l-1.77208,16.2331-.86233,7.85592L388.282,488.039a76.559,76.559,0,0,1-7.64747-2.12271,79.39979,79.39979,0,0,1-27.927-16.24258l-3.83793-13.69342a16.19547,16.19547,0,0,1,.24639-2.43539.03484.03484,0,0,1,.00949-.02846,17.22015,17.22015,0,0,1,.47382-2.12271.07338.07338,0,0,0,.00949-.02845,15.73221,15.73221,0,0,1,3.8853-6.93674c4.6245-4.62444,35.23329-19.06654,35.23329-19.06654l.578,1.213Z"
            transform="translate(-137.375 -106.33868)"
            fill="#d0cde1"
          />
          <path
            d="M403.30793,371.713c4.61024-.16481,9.54388-.24633,13.43095,2.23806a19.66294,19.66294,0,0,1,4.64175,4.54386c3.78579,4.78587,7.05688,10.80759,5.65065,16.74554l-1.63329-.637a10.69475,10.69475,0,0,0,1.0316,4.58235c-.23-.66878-1.00023.41235-.794,1.08884l1.7992,5.90252a5.55715,5.55715,0,0,0-7.087,4.22881c-.20562-6.85584-.91684-14.7173-6.47827-18.73166-2.80462-2.02443-6.35411-2.64244-9.76922-3.19123-3.15051-.50627-6.45328-.98906-9.47094.04812s-5.58739,4.12338-4.90328,7.24012a3.22511,3.22511,0,0,0-3.63522,1.79152,9.41008,9.41008,0,0,0-.74445,4.30752c-1.48318,1.04823-3.1711-1.03325-3.77556-2.74591-1.41886-4.02015-2.68-8.29951-1.91567-12.49362s4.182-8.20222,8.44516-8.21645a2.96018,2.96018,0,0,1-.76986-2.084l3.51383-.2969a3.88355,3.88355,0,0,1-2.32065-1.2235C389.93437,376.36238,401.02656,371.79458,403.30793,371.713Z"
            transform="translate(-137.375 -106.33868)"
            fill="#2f2e41"
          />
          <path
            d="M451.69809,451.36531c-.54017,4.33072-3.62949,16.5648-6.7472,28.325a76.93847,76.93847,0,0,1-7.12628,3.57263,78.80279,78.80279,0,0,1-25.48209,6.45343q-3.24088.27009-6.54817.26531a78.642,78.642,0,0,1-13.02058-1.07084c1.611-6.21652,3.78108-16.46052,5.809-26.496.61594-3.03247,1.22244-6.05545,1.79106-8.93625,2.22693-11.35278,3.95165-20.60177,3.95165-20.60177s6.91776-6.78508,11.02107-8.35814a3.55622,3.55622,0,0,1,1.77208-.29377c3.38309.55908,8.00758,8.65191,8.00758,8.65191s20.75331,6.91783,25.60522,14.77375A5.74767,5.74767,0,0,1,451.69809,451.36531Z"
            transform="translate(-137.375 -106.33868)"
            fill="#d0cde1"
          />
          <path
            d="M363.88969,451.36531l-1.213,25.9275a78.77283,78.77283,0,0,1-9.96921-7.61907,72.43138,72.43138,0,0,1-5.92275-5.8943c.99507-4.36867,1.82894-8.04546,2.33121-10.23451a.03484.03484,0,0,1,.00949-.02846c.26531-1.213.43588-1.96162.47382-2.12271a.07338.07338,0,0,0,.00949-.02845Z"
            transform="translate(-137.375 -106.33868)"
            fill="#d0cde1"
          />
          <path
            d="M455.83927,472.27027a78.46291,78.46291,0,0,1-10.88838,7.42,76.93847,76.93847,0,0,1-7.12628,3.57263l-2.30276-13.41863,2.31224-25.41574,12.89738,3.222.96662.2464Z"
            transform="translate(-137.375 -106.33868)"
            fill="#d0cde1"
          />
          <path
            d="M1002.625,516.84008s-9,44,6,40,9-42,9-42Z"
            transform="translate(-137.375 -106.33868)"
            fill="#a0616a"
          />
          <path
            d="M1044.625,334.84008h-10s-11,8-10,17-18,87-18,97-4,13-4,19,2,10,0,13-6,21-5,28a56.39446,56.39446,0,0,1,0,14h25s18-61,22-64,6-8,6-11-2-3,3-7,2-22,2-22l7-18Z"
            transform="translate(-137.375 -106.33868)"
            fill="#d0cde1"
          />
          <path
            d="M1044.625,334.84008h-10s-11,8-10,17-18,87-18,97-4,13-4,19,2,10,0,13-6,21-5,28a56.39446,56.39446,0,0,1,0,14h25s18-61,22-64,6-8,6-11-2-3,3-7,2-22,2-22l7-18Z"
            transform="translate(-137.375 -106.33868)"
            opacity="0.1"
          />
          <path
            d="M904.625,492.34008s-9,44,6,40,9-42,9-42Z"
            transform="translate(-137.375 -106.33868)"
            fill="#a0616a"
          />
          <polygon
            points="770.25 591.001 764.25 616.001 786.25 630.001 792.25 600.001 770.25 591.001"
            fill="#a0616a"
          />
          <polygon
            points="874.25 622.001 863.25 637.001 876.25 652.001 894.25 652.001 894.25 622.001 874.25 622.001"
            fill="#a0616a"
          />
          <path
            d="M1034.625,745.34008h-6a22.578,22.578,0,0,0-9,0c-6,1-14.14167-8.625-14.14167-8.625l-7.85833,6.625s-16,4-8,23l18,11s9,19,27,16,5-23,5-23Z"
            transform="translate(-137.375 -106.33868)"
            fill="#2f2e41"
          />
          <path
            d="M907.625,710.34008l-1.52119-6.66171L892.625,707.34008s-28-18-28,6,22,32,22,32,8-1,8,6,21,18,29,14,8-14,8-14l-2-28-9,2s-17-1-14-5S907.625,710.34008,907.625,710.34008Z"
            transform="translate(-137.375 -106.33868)"
            fill="#2f2e41"
          />
          <path
            d="M936.625,480.34008s-12,16-12,25-4,89-4,89-22,102-16,108,24,15,27,12,24-112,24-112l25-67,23,96s-1,83,3,84,6,2,4,6-5,12-5,12,25,6,30,2,6-101,0-135,1-112,1-112Z"
            transform="translate(-137.375 -106.33868)"
            fill="#2f2e41"
          />
          <circle cx="835.75" cy="150.5014" r="30" fill="#a0616a" />
          <path
            d="M964.125,275.84008s4,21,0,27,54,2,54,2-28-32-25-38S964.125,275.84008,964.125,275.84008Z"
            transform="translate(-137.375 -106.33868)"
            fill="#a0616a"
          />
          <path
            d="M938.625,310.34008s20-26,45-21c6.74943,1.34988,12.91575,2.69977,18.32188,3.95127,19.04912,4.40979,34.88928,17.98555,41.39687,36.42373,1.6875,4.78125,2.53125,9.375,1.78125,13.125-3,15-1.5,133.5-1.5,133.5s-8,3-7,7,8,9,1,9-113-4-111-7S938.625,310.34008,938.625,310.34008Z"
            transform="translate(-137.375 -106.33868)"
            fill="#d0cde1"
          />
          <path
            d="M948.625,310.34008h-10s-11,8-10,17-18,87-18,97-4,13-4,19,2,10,0,13-6,21-5,28a56.39446,56.39446,0,0,1,0,14h25s18-61,22-64,6-8,6-11-2-3,3-7,2-22,2-22l7-18Z"
            transform="translate(-137.375 -106.33868)"
            fill="#d0cde1"
          />
          <polygon
            points="796.671 377.682 826.75 311.501 811.711 381.885 796.671 377.682"
            opacity="0.1"
          />
          <path
            d="M962.65934,211.47281l.01589-2.47552a19.30356,19.30356,0,0,1,6.20625.21756,10.079,10.079,0,0,0-.9078-4.33478,19.62057,19.62057,0,0,1,5.93438,1.76628l.68923-4.598,17.91122,6.277c6.42944,2.25322,13.22424,4.76214,17.39709,10.1475,4.65211,6.00388,4.98937,14.40485,3.20384,21.7873s-5.41842,14.16484-8.12908,21.26a50.28061,50.28061,0,0,1-3.80544,8.74622c-5.41359,8.72668-17.63566,11.84086-27.21253,8.13337-3.53438-1.36826-6.87167-3.64954-8.66286-6.98954a51.87549,51.87549,0,0,1-2.335-6.37578c-1.66427-4.40914-4.09465-13.63272-8.13463-16.05941-1.77775-1.06784-4.48877,3.51676-6.02384,2.12239-3.94489-3.58331-3.96854-9.84523-2.40744-14.941a110.33971,110.33971,0,0,1,5.5034-14.94059C952.84268,219.26235,962.66125,211.17588,962.65934,211.47281Z"
            transform="translate(-137.375 -106.33868)"
            fill="#2f2e41"
          />
        </motion.svg>
      </div>
    </div>
  );
};

export default Header;
