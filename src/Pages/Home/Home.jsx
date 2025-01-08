import React, { useEffect } from "react";
import Header from "../../Components/Header/Header";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { useNavigate } from "react-router-dom";

const Home = () => {
  const nav = useNavigate('')
  function handlelu (){
    nav('ruslugat')
  }
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, 
    });
  }, []);

  return (
    <div className="bg-gradient-to-b from-blue-200 to-purple-300 min-h-screen">
      <Header />
      
      <section className="text-center py-16 px-6">
        <h1
          className="text-4xl sm:text-5xl font-bold text-gray-800"
          data-aos="fade-up"
        >
          O'qish markaziga xush kelibsiz!
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-600" data-aos="fade-up">
          Til o'rganish, lug'at boyligini oshirish va bilimlarni kengaytirish uchun mo'ljallangan platforma.
        </p>
      </section>

      <section
        className="py-12 px-6 bg-white rounded-lg shadow-lg mx-auto max-w-4xl mt-16"
        data-aos="fade-right"
      >
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 text-center">
          Ushbu sayt haqida
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-gray-600 text-center">
          Bu sayt - lug'at boyligini oshirish, yangi so'zlarni o'rganish va turli mavzularda batafsil ma'lumot olish uchun mo'ljallangan joy.
        </p>
      </section>

      <section
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 px-6"
        data-aos="fade-up"
      >
        <div className="bg-gradient-to-br from-green-400 to-green-600 text-white p-6 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300">
          <div className="text-4xl mb-4">
            <i className="fas fa-book"></i>
          </div>
          <h3 className="text-2xl font-bold">Lug'at</h3>
          <p className="mt-4 text-lg">
            Har xil so'zlarning ma'nolari, tarjimalari va ishlatilish kontekstlari haqida ma'lumotlar.
          </p>
        </div>

        <div className="bg-gradient-to-br from-orange-400 to-orange-600 text-white p-6 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300">
          <div className="text-4xl mb-4">
            <i className="fas fa-lightbulb"></i>
          </div>
          <h3 className="text-2xl font-bold">O'rganish Vositalari</h3>
          <p className="mt-4 text-lg">
            Tilni o'rganish jarayonini yanada samarali qilish uchun interaktiv mashqlar, o'yinlar tashkillangan
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white p-6 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300">
          <div className="text-4xl mb-4">
            <i className="fas fa-chart-line"></i>
          </div>
          <h3 className="text-2xl font-bold">Tizimni Kuzatish</h3>
          <p className="mt-4 text-lg">
            O'rganish jarayonini kuzatish, yangi maqsadlar belgilash va o'z rivojlanishingizni baholash.
          </p>
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-6 mt-16" data-aos="fade-up">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 text-center">
          Bizga qo'shiling va o'rganishni boshlang!
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-gray-600 text-center">
          Bizga qo'shiling va yangi tillarni, so'zlarni va bilimlarni o'z sur'atingizda o'rganishni boshlang!
        </p>
        <div className="text-center mt-8">
          <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:scale-110 hover:shadow-xl transform transition-all duration-300" onClick={handlelu}>
            Boshlash
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
