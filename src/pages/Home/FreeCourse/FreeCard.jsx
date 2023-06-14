const FreeCard = ({ title, subtitle, description, image }) => {
    return (
      <div className="flex flex-col items-center justify-center w-[90%] mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
        <img className="object-cover w-full h-64" src={image} alt="Card" />
        <div className="px-6 py-4">
          <div className="mb-2 text-lg font-semibold text-green-600">{subtitle}</div>
          <h2 className="mb-2 text-2xl font-bold text-purple-700">{title}</h2>
          <p className="text-base text-gray-700">{description}</p>
        </div>
        <div className="w-full px-6 py-4">
          <button className="w-full px-4 py-2 font-bold text-blue-500 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white">
            Get it now
          </button>
        </div>
      </div>
    );
  };
  
  export default FreeCard;
  