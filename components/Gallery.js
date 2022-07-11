import Image from "next/image";

function Gallery({ images }) {
  return (
    <section className="bg-gray-100">
      <div className="container flex flex-col justify-center p-4 mx-auto">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 sm:grid-cols-2">
          {images?.map((image, index) => (
            <a
              key={index}
              href={image}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={image}
                alt=""
                width={64}
                height={64}
                layout="responsive"
                className="object-cover w-full bg-gray-500 aspect-square"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
