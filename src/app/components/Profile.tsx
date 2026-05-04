import { useState } from "react";

export function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="flex flex-col gap-[20px] w-[620px]" style={{fontFamily: "'Inter', sans-serif"}}>
      <div className="h-[246px] relative shrink-0 mx-auto w-[262px]">
        <div className="absolute bottom-0 left-[30px] top-[57px] w-[202px] bg-[#d9d9d9] rounded-full"></div>
        <p className="absolute font-normal h-[36px] leading-[normal] left-0 not-italic text-[30px] text-black top-0 w-full text-center">Perfil</p>
      </div>
      
      <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
        {['Nombre', 'Cédula', 'Celular', 'Correo'].map((field) => (
          <div key={field} className="h-[65px] relative shrink-0 w-full">
            <p className="absolute font-normal leading-[normal] left-0 not-italic text-[20px] text-black top-[8px] w-[84px]">{field}</p>
            <div className="absolute inset-[36px_0_7px_0]">
              {isEditing ? (
                <input type="text" className="w-full h-full bg-[#e5e5e5] px-2 outline-none text-[20px]" />
              ) : (
                <div className="w-full h-full bg-[#d9d9d9]"></div>
              )}
            </div>
          </div>
        ))}
      </div>

      <button 
        onClick={() => setIsEditing(!isEditing)}
        className="bg-[#a6a2a2] hover:bg-[#8e8a8a] transition-colors relative rounded-[10px] shrink-0 w-full mt-4"
      >
        <div className="content-stretch flex flex-col items-center justify-center px-[7px] py-[12px] relative size-full">
          <span className="font-normal leading-[normal] text-[20px] text-black text-center">{isEditing ? 'Guardar' : 'Editar'}</span>
        </div>
      </button>
    </div>
  );
}