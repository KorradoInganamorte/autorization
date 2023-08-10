function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col items-center px-[3.5rem] pt-[3.5rem] pb-[4rem] bg-white border border-black rounded-[1rem]">
        <div>
          <button className="py-[1rem] px-[4.5rem] bg-blue-500 text-white text-2xl rounded-[.5rem] border border-black border-opacity-60 mr-[2.5rem]">
            Registration
          </button>
          <button className="py-[1rem] px-[4.5rem] bg-blue-500 text-white text-2xl rounded-[.5rem] border border-black border-opacity-60">
            Log In
          </button>
        </div>

        <div></div>
      </div>
    </div>
  )
}

export default Home
