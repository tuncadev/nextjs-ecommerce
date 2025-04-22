"use client";
import React from "react";

type Attribute = {
  name: string;
  options: string[];
};

type Props = {
  attributes: Attribute[];
  selectedAttributes: Record<string, string>;
  setSelectedAttributes: (value: Record<string, string>) => void;
};

export const ProductVariationSelector: React.FC<Props> = ({
  attributes,
  selectedAttributes,
  setSelectedAttributes,
}) => {
  return (
    <div className="flex flex-wrap gap-4 w-full">
      {attributes.map((attr) => (
        <div key={attr.name} className="flex flex-col gap-1">
          <label className="text-sm font-semibold">{attr.name}</label>
          <select
            className="border rounded px-3 py-2 text-xs"
            value={selectedAttributes[attr.name] || ""}
            onChange={(e) =>
              setSelectedAttributes({
                ...selectedAttributes,
                [attr.name]: e.target.value,
              })
            }
          >
            <option value="">Оберіть {attr.name.toLowerCase()}</option>
            {attr.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};
