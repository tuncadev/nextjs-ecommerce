"use client";

import { Drawer } from "flowbite-react";
import Link from "next/link";
import { Loading } from "@/app/components/actions/Loading";
import { useProducts } from "@/app/context/ProductsContext";
import getCategoryLink from "@/app/utils/getCategoryLink";
import { TbCategory } from "react-icons/tb";
import { JSX } from "react";

type Props = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  user: { username: string } | null;
};

export const DrawerNav = ({ isOpen, setIsOpen, user }: Props) => {
  const { productsLoading, getCategoryTree } = useProducts();
  const handleClose = () => setIsOpen(false);
  const categoryTree = getCategoryTree();

  const renderSubcategories = (
    subs: any[],
    depth: number = 1
  ): JSX.Element[] => {
    return subs
      .filter((sub) => sub.count > 0)
      .map((sub) => (
        <div key={sub.wpId}>
          <a
            href={getCategoryLink(sub.wpId, sub.slug)}
            onClick={() => setIsOpen(false)}
            className={`subcat-${depth} hover:text-customGreen w-full flex gap-2 items-center ${depth == 1 ? "pl-10"  : "pl-16"} py-1 cursor-pointer text-xs border-b border-b-sky-100/20`}
          >
            {sub.name} ({sub.count})
          </a>
          {sub.subcategories?.length > 0 &&
            renderSubcategories(sub.subcategories, depth + 1)}
        </div>
      ));
  };

  return (
    <>
      <Drawer
        open={isOpen}
        onClose={handleClose}
        className="bg-secondaryBackground text-secondaryForeground p-0"
      >
        <Drawer.Header
          title="каталог"
          className="px-4 py-2 bg-sky-100 flex items-center"
          data-testid="mainNav_title"
        />
        <Drawer.Items>
          <div className="mb-4 flex text-left justify-start flex-col">
            {productsLoading ? (
              <Loading text="menu" />
            ) : categoryTree.length > 0 ? (
              <>
                {/* All Categories Link */}
                <a
                  href="/shop"
                  onClick={() => setIsOpen(false)}
                  className="mt-2"
                >
                  <div className="flex hover:text-customGreen items-center justify-start gap-4 text-gray-50 pl-4 mb-4 border-y border-y-gray-200/30 py-1">
                    <TbCategory className="text-sky-300" />
                    всі категорії
                  </div>
                </a>

                {/* Category Loop */}
                {categoryTree.map((parentCategory) =>
                  parentCategory?.count > 0 ? (
                    <div key={parentCategory.wpId}>
                      <a
                        onClick={() => setIsOpen(false)}
                        href={getCategoryLink(
                          parentCategory.wpId,
                          parentCategory.slug
                        )}
                        className="hover:text-customGreen w-full flex gap-2 items-center px-4 text-xs p-1 border-b border-b-sky-500/40"
                      >
                        <i className="fa-solid fa-caret-right text-sky-600"></i>
                        {parentCategory.name} ({parentCategory.count})
                      </a>

                      {/* Recursive subcategory render */}
                      {renderSubcategories(parentCategory.subcategories)}
                    </div>
                  ) : null
                )}
              </>
            ) : (
              <Loading text="categories" />
            )}
          </div>

          {/* Auth Links */}
          {!user && (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 px-4 pt-6 pb-10">
              <Link
                href="login#register"
                onClick={() => setIsOpen(false)}
                className="rounded-lg text-xs text-center w-full bg-white border py-2 text-primaryForeground hover:bg-secondaryBackground hover:border hover:border-primaryBackground hover:text-secondaryForeground"
              >
                Реєстрація
              </Link>
            </div>
          )}
        </Drawer.Items>
      </Drawer>
    </>
  );
};
