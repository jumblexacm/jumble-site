import Image from "next/image";

function Gallery({ images }) {

  return (
    <section className="bg-gray-200">
      <div className="container flex flex-col justify-center p-4 mx-auto">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
          {images?.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt=""
              width={128}
              height={128}
              className="object-cover w-full bg-gray-500 aspect-square"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
