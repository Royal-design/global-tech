import { Label } from "./ui/label";
import { ChangeEvent, useState } from "react";
import { Search } from "lucide-react";
import { UseProducts } from "@/Context/Products/UseProducts";

export const BrandsCommand = () => {
  const { allProducts, filterProducts, setFilterProducts } = UseProducts();
  const [brands, setBrands] = useState<string[]>([]);
  const dataCategories = Array.from(
    new Set(allProducts.map((product) => product.brand))
  );
  const [filterBrands, setFilterBrands] = useState<string[]>(dataCategories);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target;

    setBrands((prev) =>
      checked ? [...prev, value] : prev.filter((brand) => brand !== value)
    );
    console.log(filterProducts);

    setFilterProducts(() => {
      const updatedBrands = checked
        ? [...brands, value]
        : brands.filter((brand) => brand.toLowerCase() !== value.toLowerCase());

      if (updatedBrands.length === 0) {
        return allProducts;
      }

      return allProducts.filter((product) =>
        updatedBrands.includes(product.brand.toLowerCase())
      );
    });

    console.log(
      "Selected brands:",
      checked ? [...brands, value] : brands.filter((brand) => brand !== value)
    );
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const searchValue = e.target.value;
    if (!searchValue) {
      setFilterBrands(dataCategories);
      return;
    }
    const filteredBrands = filterBrands.filter((brand) =>
      brand.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilterBrands(filteredBrands);
    const filteredProducts = allProducts.filter((product) =>
      product.brand.toLowerCase().includes(searchValue.toLocaleLowerCase())
    );
    setFilterProducts(filteredProducts);
  };
  return (
    <div className="">
      <div className="search-group relative mb-3">
        <input
          type="text"
          onChange={handleSearchChange}
          placeholder="Search brands"
          className="h-[2rem] dark:bg-transparent overflow-hidden focus:border-none border px-2 w-full pl-7"
        />
        <Search
          size={15}
          className="absolute top-[25%] left-2 hover:text-gray-400"
        />
      </div>
      {filterBrands.map((brand: string) => (
        <div
          className="checkbox-group flex items-center gap-2 mb-2"
          key={brand}
        >
          <Label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              id={brand.toLowerCase()}
              value={brand.toLowerCase()}
              onChange={handleChange}
              checked={brands.includes(brand.toLowerCase())}
              className="peer sr-only"
            />

            <span className="inline-block w-4 h-4 border-2 relative cursor-pointer after:content-[''] after:absolute after:top-2/4 after:left-2/4 after:-translate-x-1/2 after:-translate-y-1/2 after:w-[10px] after:h-[10px] dark:after:bg-white after:bg-[#333] after:rounded-[2px] after:opacity-0 peer-checked:after:opacity-100"></span>

            <span>{brand}</span>
          </Label>
        </div>
      ))}
    </div>
  );
};
