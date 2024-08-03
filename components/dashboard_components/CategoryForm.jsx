"use client";

import FormSubmit from "../FormSubmit";
import { useFormState } from "react-dom";
import { addCategory } from "@/actions/dataActions";
import { useRef, useState } from "react";
import Image from "next/image";
import { Fragment } from "react";

const renderCategories = (items, level = 0) => (
  <>
    {items.map((category) => (
      <Fragment key={category.id}>
        <option value={`${category.id}`}>
          {"-".repeat(Number(level)) + " " + category.name}
        </option>
        {category.children && renderCategories(category.children, level + 1)}
      </Fragment>
    ))}
  </>
);

function CategoryForm({ data }) {
  const [formState, formAction] = useFormState(addCategory, {});
  const [pickedImage, setPickedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between">
        <h1 className="text-2xl">Add Category</h1>
        <button
          className="btn btn-error btn-sm"
          onClick={() => document.getElementById("my_modal_1").close()}
        >
          X
        </button>
      </div>

      <form action={formAction} className="flex flex-col space-y-5 mx-auto">
        <div className="flex gap-3 items-center">
          <label htmlFor="name" className="w-1/3">
            Category Name:
          </label>
          <input
            type="text"
            placeholder="Category Name"
            name="name"
            className="input input-bordered input-sm w-2/3 max-w-xs"
            required
          />
        </div>

        <div className="flex gap-3 items-center">
          <label htmlFor="name" className="w-1/3">
            Parent Category:
          </label>
          <select
            className="select select-sm select-bordered w-2/3"
            defaultValue=""
            name="parentCategory"
          >
            <option value="">Select Category</option>
            {renderCategories(data)}
          </select>
        </div>
        <div className="flex gap-3 items-center">
          <label htmlFor="name" className="w-1/3">
            Priority:
          </label>
          <select
            className="select select-sm select-bordered w-2/3"
            defaultValue=""
            name="priority"
          >
            <option value="" disabled>
              Select Category
            </option>
            {Array.from({ length: 10 }).map((_, i) => (
              <option key={i}>{i + 1}</option>
            ))}
          </select>
        </div>

        <div className="flex gap-3 items-center">
          <label htmlFor="name" className="w-1/3">
            Image:
          </label>

          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            className={`file-input file-input-bordered file-input-sm w-2/3 max-w-xs ${
              pickedImage && "hidden"
            }`}
          />

          {pickedImage && (
            <div className="flex gap-3 items-center">
              <Image
                src={pickedImage}
                alt="category image"
                width={100}
                height={100}
              />
              <button
                className="btn btn-error btn-sm"
                onClick={() => setPickedImage(null)}
              >
                Remove
              </button>
            </div>
          )}
        </div>

        {formState.errors && (
          <ul>
            {Object.keys(formState.errors).map((error) => (
              <li key={error} className="text-red-500">
                {formState.errors[error]}
              </li>
            ))}
          </ul>
        )}

        <FormSubmit text="Add" />
      </form>
    </div>
  );
}

export default CategoryForm;
