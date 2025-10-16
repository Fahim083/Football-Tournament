
import Result from "../Components/Result";

const Matchpage = () => {
  return (
    <>
    <h1 className='text-4xl font-semibold py-3 sticky top-[80px] z-50 bg-black'>Match Results</h1>
    <div className='flex flex-col gap-5 '>
      <Result />
      <Result />
      <Result />
      <Result />
    </div>
    </>
  )
}

export default Matchpage
