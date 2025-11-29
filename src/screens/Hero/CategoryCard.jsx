
import { Title } from "../../components/common/Design";

const CategoryCard = ({ item }) => {
  return (
    <>
      <div className="flex items-center flex-col gap-2 py-8 rounded-lg bg-green_100 shadow-s1">
        <div className="h-24">
          <img
            src={item.image}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <Title>{item.title}</Title>
      </div>
    </>
  );
};

export default CategoryCard;
