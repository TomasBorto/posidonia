import fondo from '../assets/fondo.jpg';

const Image = () => {
  return (
    <section className='h-auto pt-16'>
        <img src={fondo} className='w-full' alt="" />
    </section>
  )
}

export default Image