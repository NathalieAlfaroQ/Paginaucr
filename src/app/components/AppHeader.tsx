import { NavLink, useLocation } from "react-router";
import svgPaths from "../../imports/Frame62/svg-4x79pea2gy";

function TextoUcr1() {
  return (
    <div className="h-[27.697px] relative shrink-0 w-[423.928px]" data-name="textoUCR">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 423.928 27.6969">
        <g id="textoUCR">
          <path d={svgPaths.pbaf5100} fill="var(--fill-0, #1A171B)" id="Vector" />
          <path d={svgPaths.p241ecb70} fill="var(--fill-0, #1A171B)" id="Vector_2" />
          <path d={svgPaths.p1d11b580} fill="var(--fill-0, #1A171B)" id="Vector_3" />
          <path d={svgPaths.p201a0600} fill="var(--fill-0, #1A171B)" id="Vector_4" />
          <path d={svgPaths.pbfb0300} fill="var(--fill-0, #1A171B)" id="Vector_5" />
          <path d={svgPaths.p28179d00} fill="var(--fill-0, #1A171B)" id="Vector_6" />
          <path d={svgPaths.p13c92f0} fill="var(--fill-0, #1A171B)" id="Vector_7" />
          <path d={svgPaths.p16b43180} fill="var(--fill-0, #1A171B)" id="Vector_8" />
          <path d={svgPaths.p19069258} fill="var(--fill-0, #1A171B)" id="Vector_9" />
          <path d={svgPaths.p1a120300} fill="var(--fill-0, #1A171B)" id="Vector_10" />
          <path d={svgPaths.pe902600} fill="var(--fill-0, #1A171B)" id="Vector_11" />
          <path d={svgPaths.p1628d00} fill="var(--fill-0, #1A171B)" id="Vector_12" />
          <path d={svgPaths.p22159800} fill="var(--fill-0, #1A171B)" id="Vector_13" />
          <path d={svgPaths.pb895800} fill="var(--fill-0, #1A171B)" id="Vector_14" />
          <path d={svgPaths.p5c1fb80} fill="var(--fill-0, #1A171B)" id="Vector_15" />
          <path d={svgPaths.p14bf6700} fill="var(--fill-0, #1A171B)" id="Vector_16" />
          <path d={svgPaths.pf15a00} fill="var(--fill-0, #1A171B)" id="Vector_17" />
          <path d={svgPaths.p1edf9580} fill="var(--fill-0, #1A171B)" id="Vector_18" />
          <path d={svgPaths.p3175480} fill="var(--fill-0, #1A171B)" id="Vector_19" />
          <path d={svgPaths.p2cc30300} fill="var(--fill-0, #1A171B)" id="Vector_20" />
          <path d={svgPaths.p289db380} fill="var(--fill-0, #1A171B)" id="Vector_21" />
          <path d={svgPaths.p315f1400} fill="var(--fill-0, #1A171B)" id="Vector_22" />
        </g>
      </svg>
    </div>
  );
}

function FirmaUcrC() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-full" data-name="firma-ucr-c 1">
      <div className="-translate-y-1/2 absolute top-1/2 w-[423.928px]">
        <TextoUcr1 />
      </div>
    </div>
  );
}

function Cintillo() {
  return (
    <nav className="bg-[#00c0f3] h-[80px] relative shrink-0 w-full" data-name="Cintillo">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[40px] py-[15px] relative size-full">
          <FirmaUcrC />
        </div>
      </div>
    </nav>
  );
}

export function AppHeader() {
  const location = useLocation();
  const getNavClass = (path: string) => {
    return `flex-[1_0_0] h-full min-w-px overflow-clip relative flex items-center justify-center hover:bg-gray-100 transition-colors ${
      location.pathname.startsWith(path) ? "bg-[#d9d9d9]" : "bg-white"
    }`;
  };

  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-10 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
      <Cintillo />
      <div className="content-stretch flex h-[30px] items-center relative shrink-0 w-full bg-[#d9d9d9]" data-name="Barra de navegación">
        <NavLink to="/app/profile" className={getNavClass('/app/profile')}>
          <div className="flex flex-col font-normal justify-center leading-[0] text-[20px] text-black text-center" style={{fontFamily: "'EB Garamond', serif"}}>
            <p className="leading-[normal]">Perfil</p>
          </div>
        </NavLink>
        <NavLink to="/app/jobs" className={getNavClass('/app/jobs')}>
          <div className="flex flex-col font-normal justify-center leading-[0] text-[20px] text-black text-center" style={{fontFamily: "'EB Garamond', serif"}}>
            <p className="leading-[normal]">Puestos</p>
          </div>
        </NavLink>
        <NavLink to="/app/declaration" className={getNavClass('/app/declaration')}>
          <div className="flex flex-col font-normal justify-center leading-[0] text-[20px] text-black text-center" style={{fontFamily: "'EB Garamond', serif"}}>
            <p className="leading-[normal]">Declaración</p>
          </div>
        </NavLink>
        <button className="flex-[1_0_0] bg-white h-full min-w-px overflow-clip relative flex items-center justify-center hover:bg-gray-100 transition-colors">
          <div className="flex flex-col font-normal justify-center leading-[0] text-[20px] text-black text-center" style={{fontFamily: "'EB Garamond', serif"}}>
            <p className="leading-[normal]">Utilidades</p>
          </div>
        </button>
      </div>
    </div>
  );
}