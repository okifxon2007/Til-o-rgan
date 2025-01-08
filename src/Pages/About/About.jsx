// import React, { useEffect, useState } from 'react'
// import Header from '../../Components/Header/Header'
// import datatwo from '../../Data/datatwo.json'
// const About = () => {
//     const [falce, setfalse] = useState(0)
//     const [truee, settrue] = useState(0) 
//     const [javob, setjavob] = useState('javob')
//     const [data, setdata] = useState('')
//     const [start, setstart] = useState('boshlash')
//     useEffect (() =>{
//     },[])
//     function handlenext() {
//         const randomdatas = datatwo.words[Math.floor(Math.random() * datatwo.words.length)]
//         setdata(randomdatas)
//         setstart('Keyingisi')
//     }
//     function handletrue () {
//         const randomdatas = datatwo.words[Math.floor(Math.random() * datatwo.words.length)]
//         setdata(randomdatas)
//         setjavob('togri javob');
//         settrue(truee + 1)
//     }
//     function handlefalse () {
//         const randomdatas = datatwo.words[Math.floor(Math.random() * datatwo.words.length)]
//         setdata(randomdatas)
//         setjavob('notogri javob');
//         setfalse(falce + 1)
        
//     }
//   return (
// <div>
//     <Header></Header>
//     <h1 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text shadow-sm p-4 rounded-lg">
//   Bu o'yinda sizga tasodifiy lug'at tushadi va siz bu savolga variantlar orqali javob berishingiz kerak
// </h1>

// <div className="w-full sm:w-[500px] mx-auto flex flex-col items-center mt-10 rounded-lg bg-gradient-to-b from-gray-200 to-gray-400 p-6">
//   <h1 className="absolute text-3xl md:text-4xl font-extrabold mb-6 text-center text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text drop-shadow-lg">
//     {data.ru}
//   </h1>
  
//   <div className="flex gap-10 sm:gap-20 items-center mt-20">
//     <div className="flex flex-col items-center bg-gradient-to-br from-green-400 to-green-600 text-white font-bold rounded-xl shadow-lg p-6 w-20 sm:w-24 h-20 sm:h-24 justify-center transform hover:scale-110 transition-all duration-300">
//       <p className="text-3xl">✔</p>
//       <p className="text-xl">{truee}</p>
//     </div>
//     <div className="flex flex-col items-center bg-gradient-to-br from-red-400 to-red-600 text-white font-bold rounded-xl shadow-lg p-6 w-20 sm:w-24 h-20 sm:h-24 justify-center transform hover:scale-110 transition-all duration-300">
//       <p className="text-3xl">✖</p>
//       <p className="text-xl">{falce}</p>
//     </div>
//   </div>

//   <div className="text-7xl mb-6 animate-bounce mt-10">😐</div>

//   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8 w-full max-w-4xl">
//     <button className="bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transform transition-all duration-300 ease-in-out" onClick={handletrue}>
//       {data.uz}
//     </button>
//     <button className="bg-gradient-to-r from-pink-500 to-red-400 text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transform transition-all duration-300 ease-in-out" onClick={handlefalse}>
//       {data.incorrect_1}
//     </button>
//     <button className="bg-gradient-to-r from-green-500 to-yellow-400 text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transform transition-all duration-300 ease-in-out" onClick={handlefalse}>
//     {data.incorrect_2}
//     </button>
//   </div>

//   <p className="text-lg sm:text-xl font-medium mb-6 text-gray-800 bg-white py-2 px-4 rounded-md shadow-sm">
//     {javob}
//   </p>

//   <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:scale-110 hover:shadow-xl transform transition-all duration-300 ease-in-out" onClick={handlenext}>
//     {start}
//   </button>
// </div>


// </div>
//   )
// }

// export default About



import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import datatwo from '../../Data/datatwo.json'

const About = () => {
    const [falce, setfalse] = useState(0)
    const [truee, settrue] = useState(0) 
    const [javob, setjavob] = useState('javob')
    const [data, setdata] = useState('')
    const [start, setstart] = useState('boshlash')
    const [shuffledButtons, setShuffledButtons] = useState([]);

    useEffect(() => {
        if (data) {
            shuffleButtons();
        }
    }, [data]);

    function handlenext() {
        const randomdatas = datatwo.words[Math.floor(Math.random() * datatwo.words.length)];
        setdata(randomdatas);
        setstart('Keyingisi');
    }

    function handletrue() {
        const randomdatas = datatwo.words[Math.floor(Math.random() * datatwo.words.length)];
        setdata(randomdatas);
        setjavob('togri javob');
        settrue(truee + 1);
    }

    function handlefalse() {
        const randomdatas = datatwo.words[Math.floor(Math.random() * datatwo.words.length)];
        setdata(randomdatas);
        setjavob('notogri javob');
        setfalse(falce + 1);
    }

    function shuffleButtons() {
        const buttons = [
            { text: data.uz, onClick: handletrue },
            { text: data.incorrect_1, onClick: handlefalse },
            { text: data.incorrect_2, onClick: handlefalse }
        ];
        setShuffledButtons(buttons.sort(() => Math.random() - 0.5));
    }

    return (
        <div>
            <Header></Header>
            <h1 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text shadow-sm p-4 rounded-lg">
                Bu o'yinda sizga tasodifiy lug'at tushadi va siz bu savolga variantlar orqali javob berishingiz kerak
            </h1>

            <div className="w-full sm:w-[500px] mx-auto flex flex-col items-center mt-10 rounded-lg bg-gradient-to-b from-gray-200 to-gray-400 p-6">
                <h1 className="absolute text-3xl md:text-4xl font-extrabold mb-6 text-center text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text drop-shadow-lg">
                    {data.ru}
                </h1>

                <div className="flex gap-10 sm:gap-20 items-center mt-20">
                    <div className="flex flex-col items-center bg-gradient-to-br from-green-400 to-green-600 text-white font-bold rounded-xl shadow-lg p-6 w-20 sm:w-24 h-20 sm:h-24 justify-center transform hover:scale-110 transition-all duration-300">
                        <p className="text-3xl">✔</p>
                        <p className="text-xl">{truee}</p>
                    </div>
                    <div className="flex flex-col items-center bg-gradient-to-br from-red-400 to-red-600 text-white font-bold rounded-xl shadow-lg p-6 w-20 sm:w-24 h-20 sm:h-24 justify-center transform hover:scale-110 transition-all duration-300">
                        <p className="text-3xl">✖</p>
                        <p className="text-xl">{falce}</p>
                    </div>
                </div>

                <div className="text-7xl mb-6 animate-bounce mt-10">😐</div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8 w-full max-w-4xl">
                    {shuffledButtons.map((button, index) => (
                        <button
                            key={index}
                            className="bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transform transition-all duration-300 ease-in-out"
                            onClick={button.onClick}
                        >
                            {button.text}
                        </button>
                    ))}
                </div>

                <p className="text-lg sm:text-xl font-medium mb-6 text-gray-800 bg-white py-2 px-4 rounded-md shadow-sm">
                    {javob}
                </p>

                <button
                    className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:scale-110 hover:shadow-xl transform transition-all duration-300 ease-in-out"
                    onClick={handlenext}
                >
                    {start}
                </button>
            </div>
        </div>
    );
};

export default About;
