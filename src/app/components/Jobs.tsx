export function Jobs() {
  return (
    <div className="flex flex-col gap-[10px] items-center w-full" style={{fontFamily: "'Inter', sans-serif"}}>
      <h1 className="font-normal leading-[normal] text-[30px] text-black w-full max-w-[1078px] text-left">Puesto</h1>
      
      <div className="flex gap-[20px] items-start w-full max-w-[1078px] justify-between">
        {[1, 2].map((i) => (
          <div key={i} className="bg-[#d9d9d9] flex flex-col items-start p-[20px] relative rounded-[10px] w-[534px]">
            <div className="flex flex-col gap-[20px] w-full">
              <div className="flex flex-col gap-[10px] text-[20px] text-black leading-[normal]">
                <p className="font-bold">Nombre del puesto</p>
                <p className="font-bold">Número de plaza</p>
                <p className="font-normal">Descripción</p>
                <p className="italic">Clase ocupacional</p>
              </div>

              <div className="flex flex-col gap-[10px] w-full">
                <div className="flex flex-col gap-[5px] w-full">
                  <p className="font-normal text-[20px] leading-[normal]">Jornada</p>
                  <select className="bg-white px-[20px] py-[8px] w-full text-[20px] outline-none cursor-pointer">
                    <option>Seleccione una opción</option>
                  </select>
                </div>
                
                <div className="flex flex-col gap-[5px] w-full">
                  <p className="font-normal text-[20px] leading-[normal]">Lugar de trabajo</p>
                  <select className="bg-white px-[20px] py-[8px] w-full text-[20px] outline-none cursor-pointer mb-1">
                    <option>Seleccione un área</option>
                  </select>
                  <select className="bg-white px-[20px] py-[8px] w-full text-[20px] outline-none cursor-pointer mb-1">
                    <option>Seleccione un departamento o una sección</option>
                  </select>
                  <select className="bg-white px-[20px] py-[8px] w-full text-[20px] outline-none cursor-pointer">
                    <option>Seleccione una unidad</option>
                  </select>
                </div>

                <div className="flex gap-[15px] w-full">
                  <div className="flex flex-col gap-[5px] flex-1">
                    <p className="font-normal text-[20px] leading-[normal]">Hora de entrada</p>
                    <input type="time" className="bg-white h-[40px] px-2 outline-none w-full" />
                  </div>
                  <div className="flex flex-col gap-[5px] flex-1">
                    <p className="font-normal text-[20px] leading-[normal]">Hora de salida</p>
                    <input type="time" className="bg-white h-[40px] px-2 outline-none w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}