
import { Container,Heading } from "../../components/common/Design";
import { categorylists } from "../../utils/data";
import CategoryCard from "./CategoryCard";

const CategorySidebar = () => {
  return (
    <>
      <section className="catgeory-slider mt-8 md:mt-12">
        <Container>
          <Heading
            title="Browse the catgeorys"
            subtitle="Most viewed and all-time top-selling category"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-5 my-8">
            {categorylists.map((item) => (
              <CategoryCard key={item.id} item={item} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default CategorySidebar;
