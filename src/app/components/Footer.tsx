import svgPaths from "../../imports/Desktop/svg-6spckjx898";
import imgPngfindComEfectosPngPhotoscape38746151 from "figma:asset/4a20184b2d7a8e2e83d446c9b7c7b08c3a8500ad.png";

function TextoUcr1() {
  return (
    <div className="absolute h-[18.465px] left-0 top-0 w-[285.179px]" data-name="textoUCR">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 285.179 18.4648">
        <g id="textoUCR">
          <path d={svgPaths.p24f22000} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2c728e00} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p8cd7480} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p10e57200} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p3ede8c00} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p3ce89480} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p3fbde800} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p1f7a1840} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.pab43780} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p1f83de00} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p9705bf0} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p6941100} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.p26549f00} fill="var(--fill-0, white)" id="Vector_13" />
          <path d={svgPaths.p3721df00} fill="var(--fill-0, white)" id="Vector_14" />
          <path d={svgPaths.p2dcea700} fill="var(--fill-0, white)" id="Vector_15" />
          <path d={svgPaths.p32e54600} fill="var(--fill-0, white)" id="Vector_16" />
          <path d={svgPaths.p25c39180} fill="var(--fill-0, white)" id="Vector_17" />
          <path d={svgPaths.pa3d1c00} fill="var(--fill-0, white)" id="Vector_18" />
          <path d={svgPaths.p1788ea80} fill="var(--fill-0, white)" id="Vector_19" />
          <path d={svgPaths.p19a70c00} fill="var(--fill-0, white)" id="Vector_20" />
          <path d={svgPaths.p2421dc80} fill="var(--fill-0, white)" id="Vector_21" />
          <path d={svgPaths.p118dfc00} fill="var(--fill-0, white)" id="Vector_22" />
        </g>
      </svg>
    </div>
  );
}

function FirmaUcrC1() {
  return (
    <div className="absolute h-[22px] left-0 overflow-clip top-0 w-[289px]" data-name="firma-ucr-c 2">
      <TextoUcr1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[105px] left-[50px] top-[30px] w-[337px]">
      <FirmaUcrC1 />
      <div className="absolute left-0 size-[20px] top-[32px]" data-name="pngfind.com-efectos-png-photoscape-3874615 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPngfindComEfectosPngPhotoscape38746151} />
      </div>
      <div className="absolute bottom-[7.5px] flex flex-col font-serif font-normal h-[15px] justify-center leading-[0] left-0 text-[15px] text-white translate-y-1/2 w-[337px]" style={{fontFamily: "'EB Garamond', serif"}}>
        <p className="leading-[normal]">© Vicerrectoría de Administración, 2026.</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[58px] leading-[0] right-[50px] text-[15px] text-white top-[30px] w-[250px]" style={{fontFamily: "'EB Garamond', serif"}}>
      <div className="-translate-y-1/2 absolute flex flex-col font-bold h-[15px] justify-center left-0 top-[7.5px] w-[250px]">
        <p className="leading-[normal]">Contacto</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-normal h-[15px] justify-center left-0 top-[32.5px] w-[250px]">
        <p className="leading-[normal]">+506 2511-1100</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-normal h-[15px] justify-center left-0 top-[50.5px] w-[250px]">
        <p className="leading-[normal]">vicerrectoria.administracion@ucr.ac.cr</p>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#595959] block h-[155px] overflow-clip relative shrink-0 w-full" data-name="Pie de página">
      <Frame1 />
      <Frame />
    </footer>
  );
}