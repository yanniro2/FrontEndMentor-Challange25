
import icon from "./assets/images/icon-reaction.svg"
import data from "./assets/data.json";
function App()
{

  const DynamicComponent = () =>
  {
    return (
      <div className='flex flex-col gap-3'>
        {data.map((item) => (
          <div className='flex items-center justify-between bg-Light-red-2 rounded-xl p-4'>
            <div className='flex gap-5'>
              <img src={item.icon} alt={item.category} />
              <h5 className={`text-${item.color}`}>{item.category}</h5>
            </div>
            <div className=' text-Dark-gray-blue font-xl'>{item.score} / <span className=' text-Dark-gray-blue-2'>100</span></div>
          </div>
        ))}


      </div>
    );
  };
  return (
    <div className="h-screen w-screen overflow-hidden font-hanken text-ms flex items-center justify-center bg-Pale-blue ">
      <section className='w-1/2 h-2/3 bg-White  shadow-md rounded-2xl flex Mobile:w-full Mobile:flex Mobile:flex-col Mobile:h-full Tablet:w-2/3'>
        <div className="left bg-gradient-to-b from-Light-slate-blue  to-Light-royal-blue w-1/2 h-full rounded-2xl flex items-center flex-col text-White justify-evenly Mobile:w-full Mobile:h-2/5 Mobile:rounded-tl-none Mobile:rounded-tr-none">
          <h3 className=' text-Light-lavender font-m'>Your Result</h3>
          <div className='flex items-center justify-center w-[8rem] h-[8rem] rounded-full   flex-col bg-gradient-to-b  from-Violet-blue to-Light-royal-blue '>
            <h3 className='text-[3rem] font-xl'>76</h3>
            <h4 className=' text-Light-slate-blue text-[14px] -mt-3'>of 100</h4>
          </div>
          <div className='flex items-center justify-center flex-col gap-5'>
            <h2 className='text-[1.4rem] font-l'> Great</h2>

            <p className='text-[14px] text-center w-3/4 text-Light-lavender'>You scored higher than 65% of the people who have taken these tests.</p>
          </div>


        </div>
        <div className='w-1/2 h-full p-5 gap-3 flex flex-col Mobile:w-full Mobile:h-3/5 Mobile:gap-0 Mobile:justify-between'>
          <h1 className='text-[1.4rem] font-xl text-Dark-gray-blue'>Summary</h1>
          <DynamicComponent />
          <button className=' bg-Cobalt-blue text-White capitalize p-3 rounded-full hover:bg-Light-slate-blue transition-all'>Continue</button>

        </div>
      </section>
    </div>
  );
}

export default App;
