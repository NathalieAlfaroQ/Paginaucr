import { Link } from "react-router";
import { useState } from "react";

export function DeclarationStart() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="flex flex-col gap-[42px] w-[888px] mx-auto" style={{fontFamily: "'Inter', sans-serif"}}>
      <div className="flex flex-col gap-[28px] w-full">
        <h1 className="text-[30px] font-normal leading-[normal]">Formulario cargas de trabajo</h1>
        <p className="text-[20px] text-justify leading-[1.4] whitespace-pre-wrap">
          El formulario de cargas de trabajo, tiene por objetivo recopilar información que permita conocer el volumen, distribución y organización del trabajo. Sus respuestas verdaderas y precisas servirán de referencia para valorar las necesidades planteadas por su unidad de trabajo. Las respuestas brindadas serán contrastadas con la matriz de procesos de la unidad respectiva, así como los formularios generales de puesto. Se agradece el tiempo y disposición para analizar y responder  las preguntas que se le indican.
        </p>
      </div>

      <div className="flex flex-col gap-[25px] w-full">
        <h2 className="text-[30px] font-normal leading-[normal]">Indicaciones generales</h2>
        
        <div>
          <h3 className="text-[24px] font-normal mb-2 leading-[normal]">Información General</h3>
          <p className="text-[20px] text-justify leading-[1.4]">
            En este apartado debe de registrar la información general relacionada con el puesto que ocupa actualmente en la unidad de trabajo.
          </p>
        </div>

        <div>
          <h3 className="text-[24px] font-normal mb-2 leading-[normal]">Diagnóstico de la carga</h3>
          <p className="text-[20px] text-justify leading-[1.4]">
            Para el diagnóstico de la carga de trabajo debe indicar las funciones que desempeña actualmente, la descripción de cada una de las funciones, la cantidad de veces que realiza la función y el tiempo aproximado que tarda en realizar cada una de ellas. 
          </p>
        </div>

        <div>
          <h3 className="text-[24px] font-normal mb-2 leading-[normal]">Información adicional</h3>
          <p className="text-[20px] text-justify leading-[1.4]">
            En este apartado se le solicita completar la información adicional relacionada con su puesto de trabajo. Esta información se utilizará como insumo en el análisis correspondiente.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-[15px] w-full">
        <h3 className="text-[30px] font-normal text-[#ff0d0d] leading-[normal]">Aviso importante</h3>
        <div className="text-[20px] text-justify leading-[1.4] whitespace-pre-wrap">
          <p className="mb-4">La veracidad y razonabilidad de la información suministrada en este archivo, es su responsabilidad.</p>
          <p>En caso de que el analista observe inconsistencias, se procederá a solicitar una reunión con el funcionario y/o con la jefatura inmediata.</p>
        </div>
      </div>

      <div className="w-full flex flex-col gap-3">
        <p className="text-[20px] leading-[normal]">Debe marcar el cuadro para poder continuar:</p>
        <div className="flex items-center gap-4">
          <button 
            className="size-[28px] bg-[#d9d9d9] flex items-center justify-center cursor-pointer"
            onClick={() => setAgreed(!agreed)}
          >
            {agreed && <span className="text-[20px]">x</span>}
          </button>
          <p className="text-[20px] leading-[normal]">He leído la información y acepto el acuerdo.</p>
        </div>
      </div>

      <div className="flex flex-col gap-[5px] w-full">
        <p className="text-[20px] leading-[normal]">Puesto de la declaración</p>
        <select className="bg-[#d9d9d9] px-[20px] py-[10px] w-full text-[20px] outline-none cursor-pointer border-none">
          <option>Seleccione una opción</option>
        </select>
      </div>

      <Link 
        to={agreed ? "/app/declaration/questions" : "#"} 
        className={`h-[47px] w-[888px] flex items-center justify-center transition-colors ${agreed ? "bg-[#a6a2a2] hover:bg-[#8e8a8a] cursor-pointer" : "bg-[#d9d9d9] cursor-not-allowed text-gray-500"}`}
      >
        <span className="text-[20px] leading-[normal]">Continuar</span>
      </Link>
    </div>
  );
}