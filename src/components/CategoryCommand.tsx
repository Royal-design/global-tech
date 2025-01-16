import { Label } from "./ui/label";
import { ChangeEvent, useState } from "react";
import { Search } from "lucide-react";
import { UseProducts } from "@/Context/Products/UseProducts";

export const CategoryCommand = () => {
  const { allProducts, setFilterProducts } = UseProducts();
  const [categories, setCategories] = useState<string[]>([]);
  const dataCategories = Array.from(
    new Set(allProducts.map((product) => product.category))
  );

  const [filterCategory, setFilterCategory] =
    useState<string[]>(dataCategories);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target;

    setCategories((prev) =>
      checked ? [...prev, value] : prev.filter((category) => category !== value)
    );

    setFilterProducts(() => {
      const updatedCategories = checked
        ? [...categories, value]
        : categories.filter(
            (category) => category.toLowerCase() !== value.toLowerCase()
          );

      if (updatedCategories.length === 0) {
        return allProducts;
      }

      return allProducts.filter((product) =>
        updatedCategories.includes(product.category.toLowerCase())
      );
    });
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const searchValue = e.target.value;
    if (!searchValue) {
      setFilterCategory(dataCategories);
      return;
    }
    const filterCategories = filterCategory.filter((category) =>
      category.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilterCategory(filterCategories);
    const filteredProducts = allProducts.filter((product) =>
      product.category.toLowerCase().includes(searchValue.toLocaleLowerCase())
    );
    setFilterProducts(filteredProducts);
  };
  return (
    <div className="">
      <div className="search-group relative mb-3">
        <input
          type="text"
          onChange={handleSearchChange}
          placeholder="Search categories..."
          className="h-[2rem] dark:bg-transparent overflow-hidden focus:border-none border px-2 w-full pl-7"
        />
        <Search
          size={15}
          className="absolute top-[25%] left-2 hover:text-gray-400"
        />
      </div>
      {filterCategory.map((category: string) => (
        <div
          className="checkbox-group flex items-center gap-2 mb-2"
          key={category}
        >
          <Label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              id={category.toLowerCase()}
              value={category.toLowerCase()}
              onChange={handleChange}
              checked={categories.includes(category.toLowerCase())}
              className="peer sr-only"
            />

            <span className="inline-block w-4 h-4 border-2 relative cursor-pointer after:content-[''] after:absolute after:top-2/4 after:left-2/4 after:-translate-x-1/2 after:-translate-y-1/2 after:w-[10px] after:h-[10px] dark:after:bg-white after:bg-[#333] after:rounded-[2px] after:opacity-0 peer-checked:after:opacity-100"></span>

            <span>{category}</span>
          </Label>
        </div>
      ))}
    </div>
  );
};
