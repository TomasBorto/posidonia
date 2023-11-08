import Arbol from '../assets/Posidonia.jpg';

const Home = () => {
  return (
    <section className="bg-[#f5f5f7] pt-[20vh] min-h-screen" id='home'>
        <div className="max-container flex justify-evenly h-[50vh]">
            <div className=" w-5/12 bg-white  rounded-[20px] max-[360px]:rounded-none shadow-2xl px-10 py-16 h-96 max-sm:w-10/12 max-sm:z-10 max-[360px]:w-full">
                <h3 className="font-palanquin text-2xl leading-normal font-bold">BIENVENIDO A 
                    <br />
                    <span className='text-4xl max-md:text-3xl max-sm:text-4xl max-[400px]:text-3xl text-[#006c36] bold'>POSIDONIA</span></h3>
                <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">La primer empresa de compensaciones de huellas de carbono mediante Posidonia en el mundo.</p>
            </div>
            <div className="w-5/12 rounded-[20px] shadow-2xl h-96 max-sm:hidden">
                <img src={Arbol} className='w-full h-full rounded-[20px]' alt="" />
            </div>
        </div>
        <div className='sm:hidden -translate-y-60 z-1'>
            <img src={Arbol} className='w-full h-[55vh] max-[360px]:h-[65vh]' alt="" />
        </div>
    </section>
  )
}

export default Home