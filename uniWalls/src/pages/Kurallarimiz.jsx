import React from 'react';

function Kurallarimiz() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-10 text-center">
        <span className="text-[#ff6b6b]">Topluluk</span>
        <span className="text-[#223344]">Kurallarımız</span>
      </h1>

      <div className="space-y-6">
        <details className="bg-white rounded-2xl shadow p-6">
          <summary className="cursor-pointer text-lg font-semibold text-[#223344] hover:text-[#ff6b6b] transition">
            Saygı ve hoşgörü çerçevesinde iletişim kurun
          </summary>
          <p className="mt-3 text-gray-600">
            Tüm kullanıcılarımızdan, görüş farklılıklarına rağmen birbirlerine karşı saygılı bir dil kullanmaları beklenmektedir.
          </p>
        </details>

        <details className="bg-white rounded-2xl shadow p-6">
          <summary className="cursor-pointer text-lg font-semibold text-[#223344] hover:text-[#ff6b6b] transition">
            Nefret söylemleri yasaktır
          </summary>
          <p className="mt-3 text-gray-600">
            Irk, cinsiyet, din, etnik köken veya cinsel yönelim gibi kimliklere yönelik nefret söylemleri ve ayrımcılık kesinlikle kabul edilmez.
          </p>
        </details>

        <details className="bg-white rounded-2xl shadow p-6">
          <summary className="cursor-pointer text-lg font-semibold text-[#223344] hover:text-[#ff6b6b] transition">
            Spam ve reklam içeriklerine izin verilmez
          </summary>
          <p className="mt-3 text-gray-600">
            Platformda yalnızca ilgili ve anlamlı paylaşımlara yer verilir. İzinsiz tanıtım veya spam içerikler kaldırılır.
          </p>
        </details>

        <details className="bg-white rounded-2xl shadow p-6">
          <summary className="cursor-pointer text-lg font-semibold text-[#223344] hover:text-[#ff6b6b] transition">
            Gizlilik haklarına saygı gösterin
          </summary>
          <p className="mt-3 text-gray-600">
            Başka kullanıcıların kişisel bilgilerini izinsiz paylaşmak, özel hayatın gizliliğini ihlal eder ve kesinlikle yasaktır.
          </p>
        </details>

        <details className="bg-white rounded-2xl shadow p-6">
          <summary className="cursor-pointer text-lg font-semibold text-[#223344] hover:text-[#ff6b6b] transition">
            Topluluğu korumak için şikayet mekanizmasını kullanın
          </summary>
          <p className="mt-3 text-gray-600">
            Kurallara uymayan içeriklerle karşılaştığınızda, ilgili gönderiyi ya da kullanıcıyı bildirerek platformun güvenliğini destekleyebilirsiniz.
          </p>
        </details>
      </div>

      <p className="text-sm text-center mt-12 text-gray-500">
        Daha fazla bilgiye ihtiyacınız mı var?{' '}
        <a href="bizesorun.html" className="text-[#88b7a5] font-medium hover:underline">
          Bize ulaşın
        </a>
      </p>
    </div>
  );
}

export default Kurallarimiz;
