import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import data from '../../Data/datatwo.json'
const Ruslugat = () => {
    const [datas, setdatas] = useState([])
    const [moduledatas, setmoduledatas] = useState([])
    useEffect(() =>{
        setdatas(data.words)
        
    },[])
    function handleid(id){
        const word = data.words.find(item => item.id === id);
        setmoduledatas(word)
    }
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-800 min-h-screen">
      <Header />
      <div className="p-6 bg-gradient-to-r from-blue-600 to-indigo-800 shadow-lg text-white font-sans">
        <h1 className="text-3xl font-bold mb-6 text-center">Ruscha Lug'at</h1>
        <div className="flex justify-center">
          <div className="w-full max-w-4xl overflow-hidden rounded-xl bg-white shadow-xl">
            <div className="h-[550px] overflow-y-auto p-6 bg-gradient-to-r from-blue-400 to-indigo-500">
              <div className="space-y-4">

              {datas && datas.map((value, index) => (
  <div key={index} className="bg-indigo-100 p-4 rounded-lg shadow-md hover:scale-105 transition-transform flex items-center justify-between">
    <div>
      <p className="font-semibold text-xl text-gray-700">{value.ru}</p>
      <p className="text-lg text-gray-800">{value.uz}</p>
    </div>
    <p>
      <i
        className="fas fa-info-circle text-indigo-600 text-2xl cursor-pointer hover:text-indigo-800 transition-colors"
        onClick={() => {
          handleid(value.id);
          document.getElementById('my_modal_3').showModal()
        }}
      />
    </p>
  </div>
))}


              </div>
              <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
     
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600 drop-shadow-xl flex items-center space-x-3">
  <i className="fas fa-star text-yellow-400"></i>
  <span>{moduledatas.ru}</span>
</h1>

<h2 className="text-3xl sm:text-4xl mt-4 text-gray-400 font-semibold italic tracking-wider flex items-center space-x-3">
  <i className="fas fa-check-circle text-green-400"></i>
  <span>{moduledatas.uz}</span>
</h2>

<p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed opacity-90 tracking-wide font-light flex items-center space-x-3">
  <i className="fas fa-info-circle text-blue-500"></i>
  <span>{moduledatas.description}</span>
</p>

  </div>
</dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ruslugat;
