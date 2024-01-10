

export const HomeCard = ({item}) => {
    // console.log(item);
    return (
      <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-auto w-[15rem] mx-3">
        <div className="h-[13rem] w-[10rem]">
                <img
            className="object-cover object-top w-full h-50"
            src={item.image}
            alt={item.title}
          />
        </div>

        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900">{item.category}</h3>
          <p className="mt-2 text-sm text-gray-500">{item.title}</p>
        </div>
      </div>
    );

}