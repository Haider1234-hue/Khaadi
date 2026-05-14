import { useNavigate } from "react-router-dom";

export default function CountrySelect() {
  const navigate = useNavigate();

  const handleSelect = (country) => {
    localStorage.setItem("country", country);
    navigate("/home");
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      
      {/* Background Image */}
      <img
        src="https://www.khaadi.com/on/demandware.static/-/Library-Sites-KhaadiSharedLibrary/default/dwf2b4ade8/images/splash/splash-img-desktop.jpg"
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover object-top"
        onError={(e) => (e.target.src = "/khaadi-bg.jpg")}
      />

      {/* RIGHT SIDE — Logo + Modal */}
      <div className="absolute bottom-[18%] right-[8%] z-10 flex flex-col items-center">

        {/* Orange blob logo */}
        <img
          src="/khaadi-logo.svg"
          alt="Khaadi"
          className="h-36 w-auto mb-4"
        />

        {/* Country selector modal */}
        <div
          className="rounded-3xl px-4 py-5 w-[310px] shadow-lg"
          style={{
            background: "rgba(240, 236, 228, 0.75)",
            backdropFilter: "blur(10px)",
          }}
        >
          {/* Title */}
          <h2 className="text-center text-sm font-medium text-gray-700 mb-3 tracking-wide">
            Select Your Country
          </h2>

          <hr className="border-[#c0b8a8] mb-3" />

          {/* Countries */}
          {[
            { name: "Pakistan", flag: "https://flagcdn.com/w40/pk.png" },
            { name: "United Kingdom", flag: "https://flagcdn.com/w40/gb.png" },
            { name: "United States", flag: "https://flagcdn.com/w40/us.png" },
            { name: "United Arab Emirates", flag: "https://flagcdn.com/w40/ae.png" },
            { name: "Global", flag: "https://flagcdn.com/w40/un.png" },
          ].map((country) => (
            <button
              key={country.name}
              onClick={() => handleSelect(country.name)}
              className="flex items-center gap-4 px-3 py-2 w-full text-left rounded bg-transparent hover:bg-black/5 transition-colors duration-200"
            >
              <img
                src={country.flag}
                alt={country.name}
                className="w-7 h-5 object-cover rounded-sm"
              />
              <span className="text-sm text-gray-700 font-normal">
                {country.name}
              </span>
            </button>
          ))}
        </div>
      </div>

    </div>
  );
}