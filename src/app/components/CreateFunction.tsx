import { Link } from "react-router";

export function CreateFunction() {
  return (
    <div className="flex flex-col gap-[20px] items-start w-[554px] mx-auto mt-20" style={{fontFamily: "'Inter', sans-serif"}}>
      <p className="font-normal leading-[normal] text-[30px] text-black">Crear función</p>
      <div className="bg-[#d9d9d9] flex flex-col gap-[20px] items-start p-[20px] rounded-[10px] w-full">
        <div className="flex flex-col gap-[5px] w-full">
          <p className="font-normal leading-[normal] text-[20px] text-black">Nombre</p>
          <input type="text" className="bg-white h-[40px] px-3 w-full outline-none text-[20px]" />
        </div>
        <div className="flex flex-col gap-[5px] w-full">
          <p className="font-normal leading-[normal] text-[20px] text-black">Descripción</p>
          <input type="text" className="bg-white h-[40px] px-3 w-full outline-none text-[20px]" />
        </div>
        <button className="bg-[#a6a2a2] hover:bg-[#8e8a8a] transition-colors py-[12px] rounded-[10px] w-full mt-2 cursor-pointer border-none">
          <span className="font-normal leading-[normal] text-[20px] text-black">Guardar</span>
        </button>
      </div>
    </div>
  );
}