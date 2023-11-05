import { carbonoTarjeta } from '../constants/index';

const Carbono = () => {
  return (
    <section className="min-h-screen flex flex-col bg-[#f5f5f7] justify-center items-center py-12">
        <div className='justify-center items-center text-center pb-6 pt-12 max-lg:pt-16'>
            <h2 className='text-2xl font-semibold text-slate-800'>TONELADAS DE CARBONO RETENIDAS POR KLIMADAO</h2>
            <p className='text-8xl font-bold text-slate-800 max-md:text-4xl'>17.675.350</p>
        </div>
        <div className='flex flex-wrap justify-center mt-8 max-lg:mt-2'>
            { carbonoTarjeta.map((item) => (
                <div className='w-[300px] bg-white rounded-[20px] max-[360px]:rounded-none shadow-2xl h-[280px] max-sm:z-10 max-[360px]:w-full ml-6 max-md:mt-6'>
                    <img className='h-[70%] w-full rounded-t-[20px]' src={item.photo} alt="" />
                    <h2 className='m-2 ml-4 text-slate-gray text-lg'>{item.title}</h2>
                    <p className='ml-4 text-slate-800 font-bold text-2xl'>{item.number}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Carbono