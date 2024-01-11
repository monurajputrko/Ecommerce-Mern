import './ProductCard.css';

export const ProductCard = ({item}) => (
  <div className="productCard w-[15rem] transition-all cursor-pointer">
    <div className="h-[20rem] ">
      <img
        className="h-full w-full object-cover object-left-top"
        src={item.image}
        alt={item.title}
      />
    </div>
    <div className="textPart bg-white p-3 text-left">
      <div>
        <p className="font-bold opacity-60">{item.category}</p>
                <p>{item.title}</p>
      </div>
      <div className="flex items-center space-x-2">
                <p className="font-semibold">₹ {item.price}</p>
        <p className="line-through opacity-50">₹1999</p>
        <p className="font-semibold text-green-600">70% off</p>
      </div>
    </div>
  </div>
);
