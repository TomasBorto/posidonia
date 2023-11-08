import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dapp = () => {

  const [number, setNumber] = useState(0)
  const [message, setMessage] = useState(0)
  const [conectado, setConectado] = useState(false)

  const [ boton1, setBoton1 ] = useState(true)
  const [ boton2, setBoton2 ] = useState(false)
  const [ boton3, setBoton3 ] = useState(false)

  const handleChange = e =>{
    setMessage(Number(e.target.value))
    
  }

  const badRequest = () => {
    toast.error('Compensacion Invalida', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }

  const goodRequest = () => {
    toast.success('Compra exitosa', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }

  // if(isNaN(number)){
  //   badRequest()
  // }else {
  //   goodRequest()
  // }

  const boton = `${boton1 ? "Individuales": ""} ${boton2 ? "PYMES": ""} ${boton3 ? "Empresas": ""}`

  const btnAct = 'bg-[#006c36] px-4 py-3 text-white px-6 py-2 font-semibold rounded-t-[20px] max-[450px]:px-2 max-[300px]:px-1'
  const btnNoAct = 'bg-white px-6 py-2 rounded-t-[20px] border-s-fuchsia-800 font-semibold text-slate-800 max-[450px]:px-2 max-[300px]:px-1'
  return (
    <section className='min-h-screen ml-[6vh] bg-[#f5f5f7] flex flex-col justify-center items-center'>
      <button onClick={(conectado) ? () => {setConectado(false)} : () => {setConectado(true)}} className='absolute py-3 px-8 top-12 right-5 rounded-[20px] bg-[#006c36] text-white font-bold'>{(conectado) ? "Conectado" : "Conectar"}</button>
      <h1 className='text-8xl max-[670px]:text-4xl text-center font-bold text-[#006c36] px-16 max-[800px]:mt-[100px]'>Posidonia Dapp</h1>
      <div className='w-[600px] mt-12 max-[670px]:w-[400px] max-[450px]:w-11/12'>
        <div className='w-full justify-evenly flex'>
          <button onClick={() => {setBoton1(true); setBoton2(false); setBoton3(false)}} className={(boton1) ? btnAct : btnNoAct}>Indivual</button>
          <button onClick={() => {setBoton1(false); setBoton2(true); setBoton3(false)}} className={(boton2) ? btnAct : btnNoAct}>PYMES</button>
          <button onClick={() => {setBoton1(false); setBoton2(false); setBoton3(true)}} className={(boton3) ? btnAct : btnNoAct}>Empresas</button>
        </div>
        <div className=' w-full bg-white rounded-[20px] max-[360px]:rounded-none px-10 h-96 shadow-2xl flex flex-col items-center max-[450px]:h-auto max-[450px]:pb-6'>
          <h2 className='text-3xl pt-6 text-center font-bold text-slate-800'>Compensaciones {boton}</h2>
          <p className='text-2xl pt-6 text-center font-bold text-slate-800'>Tus compensaciones: {number}</p>
          <div class="m-4 flex pt-12 max-[450px]:flex-col">
    	      <input 
            id='message'
            onChange={handleChange}
             
            class="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder={0}/>
	        	<button onClick={isNaN((message)) ? () => {badRequest()}  : () => {setNumber((message) + number); goodRequest()}} class="px-8 rounded-r-lg bg-[#006c36] text-white font-bold p-4 uppercase border-yellow-500 border-t border-b border-r">Compensar</button>
            
	        </div>
          
          <button
            onClick={() => setNumber(0)}
            class="middle none center mr-4 rounded-lg bg-red-500 p-4 font-sans font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            data-ripple-light="true"
          >
            Vender Compensaciones
          </button>
        </div>
        <ToastContainer />
      </div>
    </section>
  )
}

export default Dapp