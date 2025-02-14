"use client";
import { useEffect, useState } from "react";
import { Drawer } from "flowbite-react";
import { useProducts } from "../hooks/useProducts";
import Link from "next/link";
import { Loading } from "./Loading";
import Image from "next/image";

export const DrawerNav = ({ isOpen, setIsOpen }) => {
  const handleClose = () => setIsOpen(false);
  const { categories = [], loading } = useProducts();

 
  const [categoryTree, setCategoryTree] = useState([]);

	useEffect(() => {
		if (categories.length > 0) {
			setCategoryTree(buildCategoryTree(categories));
		}
	}, [categories.length]); 

  function buildCategoryTree(categories) {
    const categoryMap = new Map();

    categories.forEach(category => {
      categoryMap.set(category.id, { ...category, subcategories: [] });
    });

    const tree = [];

    categories.forEach(category => {
      if (category.parent === 0) {
        tree.push(categoryMap.get(category.id));
      } else {
        const parent = categoryMap.get(category.parent);
				if (parent) parent.subcategories.push(categoryMap.get(category.id));
      }
    });

    return tree;
  }

  return (
    <>
      <Drawer open={isOpen} onClose={handleClose} className="bg-white p-0">
        <Drawer.Header title="все категорії" className="px-4 pt-2 bg-sky-100   " />
        <Drawer.Items>
          <div className="mb-4 flex text-left justify-start flex-col ">
					{loading ? (
						<Loading text="menu" />
						) : categoryTree.length > 0 ? (
									categoryTree.map(parentCategory => 
										parentCategory?.count > 0 ? (
											<div key={parentCategory.id}>
												<Link 
														key={parentCategory.id}
														onClick={() => setIsOpen(false)}
														href={`/${parentCategory.slug}/c${parentCategory.id}/`} 
														className=""
													>
												{/* Parent Category */}
													<div key={parentCategory.id} className="w-full flex gap-2 items-center px-4 hover:text-sky-100 hover:bg-sky-700 hover:cursor-pointer text-gray-600 font-semibold text-sm p-1 border-b border-b-sky-300">
														
															<i className="fa-solid fa-caret-right text-sky-600"></i>
 
															{parentCategory.name} ({parentCategory.count})
																
													</div>
												</Link>
												{/* Subcategories */}
												{parentCategory.subcategories.length > 0 && (
													<div>
														{parentCategory.subcategories
															.filter(subcategory => subcategory?.count > 0)
															.map(subcategory => (
																<Link
																	key={subcategory.id}
																	href={`/${subcategory.slug}/c${subcategory.id}/`}
																	onClick={() => setIsOpen(false)}
																>
																	<div className="w-full flex gap-2 items-center pl-12 py-1 hover:text-sky-100 hover:bg-sky-700 cursor-pointer text-gray-600 font-semibold text-sm border-b border-b-sky-300">
																		{subcategory.name} ({subcategory.count})
																	</div>
																</Link>
															))}
													</div>
												)}
											</div>
										) : null  
									)
								) : (
							<Loading text="categories" />
						)}
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 px-4 pt-6 pb-10">
            <a
              href="#"
              className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
              Learn more
            </a>
            <a
              href="#"
              className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            >
              Get access&nbsp;
              <svg
                className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="https://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </Drawer.Items>
      </Drawer>
    </>
  );
};
