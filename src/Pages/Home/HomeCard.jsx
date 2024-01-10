

export const HomeCard = () => {
    
    return (
      <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-auto w-[15rem] mx-3">
        <div className="h-[13rem] w-[10rem]">
          <img
            className="object-cover object-top w-full h-full"
            src="https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/z/q/l/m-kast110md-majestic-man-original-imafw49uamqn455g-bb.jpeg?q=70"
            alt="img"
          />
        </div>

        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900">Portronics</h3>
          <p className="mt-2 text-sm text-gray-500">
            {" "}
            Key5 Combo, POR 1407 Wireless Laptop Keyboard
          </p>
        </div>
      </div>
    );

}