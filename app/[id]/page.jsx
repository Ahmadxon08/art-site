import { cards } from "@/db/db";
import Image from "next/image";
import { HiOutlineLocationMarker } from "react-icons/hi";
const CardDeteilPage = ({ params }) => {
  const card = cards.find((c) => c.id === parseInt(params.id));

  if (!card) {
    return <div className="text-center mt-10">Card not found</div>;
  }
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-4 mt-6">
      <Image
        src={card.image}
        alt={card.title}
        width={800}
        height={400}
        className="w-full h-[300px] object-cover rounded-lg"
      />
      <div className="mt-4">
        <h1 className="text-2xl font-bold">{card.title}</h1>
        <div className="flex gap-4 text-gray-600 mt-2">
          <span>{card.year}</span>
          <div className="flex items-center">
            <HiOutlineLocationMarker size={20} />
            <span className="ml-1">{card.location}</span>
          </div>
        </div>
        <p className="mt-4 text-gray-700">{card.description}</p>
      </div>
    </div>
  );
};

export default CardDeteilPage;
