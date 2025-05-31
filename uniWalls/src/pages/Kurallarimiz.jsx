import React from "react";
import { Link } from "react-router-dom";

function Kurallarimiz() {
  return (
    <div
      className="text-[#223344] font-sans"
      style={{
        backgroundImage: "url('son_pictures/arkaplan.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-4xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold mb-10 text-center">
          <span className="text-[#ff6b6b]">Topluluk</span>{" "}
          <span className="text-[#223344]">Kurallarımız</span>
        </h1>

        <div className="space-y-6">
          <details className="group bg-white rounded-2xl shadow p-6 overflow-hidden transition-all duration-500 max-h-20 open:max-h-96">
            <summary className="cursor-pointer text-lg font-semibold text-[#223344] hover:text-[#ff6b6b] flex justify-between items-center list-none">
              Saygı ve hoşgörü çerçevesinde iletişim kurun
              <span className="transition-transform duration-300 group-open:rotate-45 select-none">
                +
              </span>
            </summary>
            <p className="mt-3 text-gray-600">
              Tüm kullanıcılarımızdan, görüş farklılıklarına rağmen birbirlerine
              karşı saygılı bir dil kullanmaları beklenmektedir.
            </p>
          </details>

          <details className="group bg-white rounded-2xl shadow p-6 overflow-hidden transition-all duration-500 max-h-20 open:max-h-96">
            <summary className="cursor-pointer text-lg font-semibold text-[#223344] hover:text-[#ff6b6b] flex justify-between items-center list-none">
              Nefret söylemleri yasaktır
              <span className="transition-transform duration-300 group-open:rotate-45 select-none">
                +
              </span>
            </summary>
            <p className="mt-3 text-gray-600">
              Irk, cinsiyet, din, etnik köken veya cinsel yönelim gibi kimliklere
              yönelik nefret söylemleri ve ayrımcılık kesinlikle kabul edilmez.
            </p>
          </details>

          <details className="group bg-white rounded-2xl shadow p-6 overflow-hidden transition-all duration-500 max-h-20 open:max-h-96">
            <summary className="cursor-pointer text-lg font-semibold text-[#223344] hover:text-[#ff6b6b] flex justify-between items-center list-none">
              Spam ve reklam içeriklerine izin verilmez
              <span className="transition-transform duration-300 group-open:rotate-45 select-none">
                +
              </span>
            </summary>
            <p className="mt-3 text-gray-600">
              Platformda yalnızca ilgili ve anlamlı paylaşımlara yer verilir. İzinsiz
              tanıtım veya spam içerikler kaldırılır.
            </p>
          </details>

          <details className="group bg-white rounded-2xl shadow p-6 overflow-hidden transition-all duration-500 max-h-20 open:max-h-96">
            <summary className="cursor-pointer text-lg font-semibold text-[#223344] hover:text-[#ff6b6b] flex justify-between items-center list-none">
              Gizlilik haklarına saygı gösterin
              <span className="transition-transform duration-300 group-open:rotate-45 select-none">
                +
              </span>
            </summary>
            <p className="mt-3 text-gray-600">
              Başka kullanıcıların kişisel bilgilerini izinsiz paylaşmak, özel hayatın
              gizliliğini ihlal eder ve kesinlikle yasaktır.
            </p>
          </details>

          <details className="group bg-white rounded-2xl shadow p-6 overflow-hidden transition-all duration-500 max-h-20 open:max-h-96">
            <summary className="cursor-pointer text-lg font-semibold text-[#223344] hover:text-[#ff6b6b] flex justify-between items-center list-none">
              Topluluğu korumak için şikayet mekanizmasını kullanın
              <span className="transition-transform duration-300 group-open:rotate-45 select-none">
                +
              </span>
            </summary>
            <p className="mt-3 text-gray-600">
              Kurallara uymayan içeriklerle karşılaştığınızda, ilgili gönderiyi ya da
              kullanıcıyı bildirerek platformun güvenliğini destekleyebilirsiniz.
            </p>
          </details>
        </div>

        <p className="text-sm text-center mt-12 text-gray-500">
          Daha fazla bilgiye ihtiyacınız mı var?{" "}
          <Link
            to="/bizesorun"
            className="text-[#88b7a5] font-medium hover:underline"
          >
            Bize sorun
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Kurallarimiz;
