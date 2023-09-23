import Image from 'next/image'

export default function Home() {
  return (
    <>
    <div className="container mx-auto mt-[100px]">
      <div className="row">
        <div className="mx-auto rounded-sm shadow-sm lg:flex justify-around p-10 text-white text-center">
          <div className='grid gap-3 text-[30px] p-10'>
            <div id='days'>00</div>
            <div>Days</div>
          </div>
          <div className='grid gap-3 text-[30px] p-10'>
            <div id='hours'>00</div>
            <div>Hours</div>
          </div>
          <div className='grid gap-3 text-[30px] p-10'>
            <div id='minutes'>00</div>
            <div>Minutes</div>
          </div>
          <div className='grid gap-3 text-[30px] p-10'>
            <div id='seconds'>00</div>
            <div>Seconds</div>
          </div>
        </div>
        <div className="mx-auto text-center mt-[50px]">
          <button className='bg-blue-700 p-3 rounded text-white'>Notify Me</button>
        </div>
      </div>
    </div>
    <script src='/js/counter.js'></script>
    </>
  )
}
