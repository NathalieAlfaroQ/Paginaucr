import { Link } from "react-router";

export function ResetPassword() {
  return (
    <div className="w-[470px]" style={{fontFamily: "'Inter', sans-serif"}}>
      <div className="bg-[#d9d9d9] relative rounded-[10px] shrink-0 w-full">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[20px] items-start px-[29px] py-[34px] relative size-full">
            <h1 className="font-normal leading-[normal] not-italic relative shrink-0 text-[30px] text-black text-center w-full">
              Cambiar contraseña
            </h1>
            
            <p className="font-normal leading-[normal] not-italic relative shrink-0 text-[20px] text-black text-center w-full">
              Introduzca la nueva contraseña que desea utilizar para su cuenta.
            </p>
            
            <div className="bg-white h-[39px] relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start px-[10px] relative size-full">
                <input 
                  type="password" 
                  placeholder="Contraseña nueva" 
                  className="font-normal h-full justify-center not-italic relative shrink-0 text-[#1a171b] text-[20px] w-full bg-transparent outline-none placeholder:text-[#1a171b]" 
                />
              </div>
            </div>
            
            <div className="bg-white h-[39px] relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start px-[10px] relative size-full">
                <input 
                  type="password" 
                  placeholder="Confirmar contraseña" 
                  className="font-normal h-full justify-center not-italic relative shrink-0 text-[#1a171b] text-[20px] w-full bg-transparent outline-none placeholder:text-[#1a171b]" 
                />
              </div>
            </div>
            
            <Link to="/" className="bg-[#a6a2a2] relative rounded-[10px] shrink-0 w-full hover:bg-[#8e8a8a] transition-colors block">
              <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                <div className="content-stretch flex flex-col items-center justify-center px-[7px] py-[12px] relative size-full">
                  <span className="font-normal leading-[normal] text-[20px] text-black text-center w-full">Continuar</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}