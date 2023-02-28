import React from 'react'

const Login = () => {
  return (
    <main className='min-h-screen flex flex-col'>
      <header className='text-center py-3 text-2xl font-bold border-b-2'>
        <h1 className='flex items-center justify-center'><i className='text-3xl bx bxl-spotify'></i> SpotiClone</h1>
      </header>
      <section className='flex-1 grid place-content-center'>
        <form className='p-2'>
          <p className='font-bold mb-4'>Para continuar, inicia sesión con un nombre.</p>
          <div>
            <label className='font-bold' htmlFor="">Nombre</label>
            <input className='block w-full p-3 border-2 rounded-md mt-2' type="text" placeholder='Escoge un nombre de usuario...'/>
          </div>
          <button className='bg-bgsp-base text-black my-6 font-smibold uppercase py-3 w-full rounded-full hover:bg-bgsp-light duration-200 hover:tracking-widest'>Inicia Sesión</button>
        </form>
      </section>
    </main>
  )
}

export default Login