import { useNavigate } from "react-router";
import { useState } from "react";

export function DeclarationQuestions() {
  const [hasLicense, setHasLicense] = useState<boolean | null>(null);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-[40px] w-[940px] mx-auto" style={{fontFamily: "'Inter', sans-serif"}}>
      <div className="flex flex-col gap-[20px] w-full">
        <div className="flex flex-col gap-[5px] w-full">
          <p className="text-[20px] leading-[normal]">1. ¿Cuánto tiempo en minutos toma para almorzar al día?</p>
          <input type="number" className="bg-[#d9d9d9] h-[40px] w-full px-3 outline-none border-none" />
        </div>

        <div className="flex flex-col gap-[5px] w-full">
          <p className="text-[20px] leading-[normal]">2. ¿Cuánto tiempo en minutos toma para el café al día? (Digite el tiempo total de mañana y tarde)</p>
          <input type="number" className="bg-[#d9d9d9] h-[40px] w-full px-3 outline-none border-none" />
        </div>

        <div className="flex flex-col gap-[10px] w-full">
          <p className="text-[20px] leading-[normal]">3. ¿Cuenta con algún permiso o licencia autorizada en horas laborales? </p>
          <div className="flex flex-col gap-[5px] w-[112px]">
            <button className="flex items-center gap-[10px] w-full cursor-pointer bg-transparent border-none p-0" onClick={() => setHasLicense(true)}>
              <div className="w-[20px] h-[18px] bg-[#d9d9d9] rounded-[50%] flex items-center justify-center">
                {hasLicense === true && <div className="w-[10px] h-[9px] bg-black rounded-[50%]"></div>}
              </div>
              <span className="text-[20px] leading-[normal]">Sí.</span>
            </button>
            <button className="flex items-center gap-[10px] w-full cursor-pointer bg-transparent border-none p-0" onClick={() => setHasLicense(false)}>
              <div className="w-[20px] h-[18px] bg-[#d9d9d9] rounded-[50%] flex items-center justify-center">
                {hasLicense === false && <div className="w-[10px] h-[9px] bg-black rounded-[50%]"></div>}
              </div>
              <span className="text-[20px] leading-[normal]">No.</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-[10px] w-full">
        <button onClick={() => navigate(-1)} className="flex-1 bg-[#a6a2a2] hover:bg-[#8e8a8a] py-[12px] rounded-[10px] transition-colors cursor-pointer text-center border-none">
          <span className="text-[20px] leading-[normal] text-black">← Regresar</span>
        </button>
        <button className="flex-1 bg-[#a6a2a2] hover:bg-[#8e8a8a] py-[12px] rounded-[10px] transition-colors cursor-pointer text-center border-none">
          <span className="text-[20px] leading-[normal] text-black">Guardar y Continuar →</span>
        </button>
        <button className="flex-1 bg-[#e5b365] hover:bg-[#d4a254] py-[12px] rounded-[10px] transition-colors cursor-pointer text-center border-none">
          <span className="text-[20px] leading-[normal] text-black">Descartar declaración</span>
        </button>
      </div>
    </div>
  );
}