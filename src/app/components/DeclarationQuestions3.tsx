import { Link } from "react-router";
import { useState } from "react";

export function DeclarationQuestions3() {
  const [bossKnows, setBossKnows] = useState<boolean | null>(null);

  return (
    <div className="flex flex-col gap-[40px] w-[800px] mx-auto" style={{fontFamily: "'Inter', sans-serif"}}>
      <div className="flex flex-col gap-[20px] w-full">
        <div className="flex flex-col gap-[5px] w-full">
          <p className="text-[20px] leading-[normal]">7. ¿Cuánto tiempo a la semana toma aproximadamente?</p>
          <input type="text" className="bg-[#d9d9d9] h-[40px] w-full px-3 outline-none border-none text-[20px]" />
        </div>

        <div className="flex flex-col gap-[5px] w-full">
          <p className="text-[20px] leading-[normal]">8. ¿Cuál es el motivo?</p>
          <input type="text" className="bg-[#d9d9d9] h-[40px] w-full px-3 outline-none border-none text-[20px]" />
        </div>

        <div className="flex flex-col gap-[10px] w-full">
          <p className="text-[20px] leading-[normal]">9. ¿Es de conocimiento de su jefatura inmediata que utilice tiempo adicional a su jornada laboral?</p>
          <div className="flex flex-col gap-[5px] w-[112px]">
            <label className="flex items-center gap-[10px] w-full cursor-pointer bg-transparent border-none p-0">
              <div className="w-[20px] h-[18px] bg-[#d9d9d9] rounded-[50%] flex items-center justify-center">
                <input 
                  type="radio" 
                  name="bossKnows"
                  className="opacity-0 absolute w-0 h-0"
                  checked={bossKnows === true}
                  onChange={() => setBossKnows(true)}
                />
                {bossKnows === true && <div className="w-[10px] h-[9px] bg-black rounded-[50%]"></div>}
              </div>
              <span className="text-[20px] leading-[normal]">Sí.</span>
            </label>
            <label className="flex items-center gap-[10px] w-full cursor-pointer bg-transparent border-none p-0">
              <div className="w-[20px] h-[18px] bg-[#d9d9d9] rounded-[50%] flex items-center justify-center">
                <input 
                  type="radio" 
                  name="bossKnows"
                  className="opacity-0 absolute w-0 h-0"
                  checked={bossKnows === false}
                  onChange={() => setBossKnows(false)}
                />
                {bossKnows === false && <div className="w-[10px] h-[9px] bg-black rounded-[50%]"></div>}
              </div>
              <span className="text-[20px] leading-[normal]">No.</span>
            </label>
          </div>
        </div>
      </div>

      <div className="flex gap-[10px] w-full">
        <Link to="/app/declaration/questions-2" className="flex-1 bg-[#a6a2a2] hover:bg-[#8e8a8a] py-[12px] rounded-[10px] transition-colors cursor-pointer text-center border-none no-underline block text-black text-[20px] leading-[normal]">
          ← Regresar
        </Link>
        <button className="flex-1 bg-[#a6a2a2] hover:bg-[#8e8a8a] py-[12px] rounded-[10px] transition-colors cursor-pointer text-center border-none block">
          <span className="text-[20px] leading-[normal] text-black">Guardar y Continuar →</span>
        </button>
        <button className="flex-1 bg-[#e5b365] hover:bg-[#d4a254] py-[12px] rounded-[10px] transition-colors cursor-pointer text-center border-none">
          <span className="text-[20px] leading-[normal] text-black">Descartar declaración</span>
        </button>
      </div>
    </div>
  );
}