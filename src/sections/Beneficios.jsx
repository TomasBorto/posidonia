

const Beneficios = () => {
  return (
    <section id="beneficios" className="md:container mt-12 flex flex-col text-slate-800">
        <div className="max-w-md max-md:max-w-full p-12 max-md:p-4 justify-center items-center">
            <h1 className="font-semibold text-[60px] font-palanquin max-md:text-4xl max-md:text-center max-[330px]:text-3xl">BENEFICIOS</h1>
            <p className="font-montserrat mt-4 max-md:mb-4">PosidoniaDAO está creando la primer empresa de compensacion de huella de carbono y presión humana mediante Posidonia.</p>
        </div>
        <div className=" ml-[30%] flex flex-col max-md:ml-[5%] bold text-slate-600 max-[450px]:text-slate-500">
            <div className="bg-photo1 rounded-[10px] w-[220px] h-[300px] text-[60px] font-bold pl-12 pt-[50px] translate-x-[90%] max-md:translate-x-[0] max-md:pl-4 max-md:pt-[80px]">
                <h3 className="font-palanquin  font-bold max-md:text-4xl text-right max-[400px]:text-[40px] absolute [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-slate-700">Transparente <span className="whitespace-nowrap"> y eficaz</span></h3>
            </div>
            <div className="bg-photo2 rounded-[10px] w-[220px] h-[300px] -mt-4 text-[60px] font-bold pl-12 pt-[50px] max-md:mt-6 max-md:ml-12 max-md:pl-12 max-md:pt-[90px] max-[330px]:ml-6">
                <h3 className="font-palanquin font-bold max-md:text-4xl absolute max-[400px]:text-[40px] opacity-100 translate-x-[50%] max-[450px]:translate-x-[40%] [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-slate-700"><span className="whitespace-nowrap">De facil <br /></span><span className="md:whitespace-nowrap"> acceso</span></h3>
            </div>
            <div className="bg-photo3 rounded-[10px] w-[220px] h-[300px] text-[60px] font-bold pl-12 translate-x-[150%] pt-[10px] max-md:translate-x-[0] max-md:mt-6 max-md:pl-8 max-md:pt-[55px]">
                <h3 className="font-palanquin font-bold max-md:text-4xl text-right absolute max-[400px]:text-[40px] translate-x-[25%]"><span className="whitespace-nowrap [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-slate-700">Creado </span><br /><span className="whitespace-nowrap"> para ser</span> sostenible</h3>
            </div>
        </div>
    </section>
  )
}

export default Beneficios