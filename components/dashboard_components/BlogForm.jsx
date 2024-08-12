"use client";
import { useState } from "react";
import FormSubmit from "../FormSubmit";
import { useFormState } from "react-dom";
import { addBlogPost } from "@/actions/dataActions";
import Image from "next/image";
import { Fragment } from "react";
import ReactQuill from "../ReactQuill";

const renderCategories = (items, level = 0) => (
  <>
    {items.map((category) => (
      <Fragment key={category.id}>
        {category.subcategories ? (
          <option value={`${category.id}`} className="font-bold px-2">
            {"-".repeat(Number(level)) + " " + category.name}
          </option>
        ) : (
          <option value={category.id}>
            {"-".repeat(Number(level)) + " " + category.name}
          </option>
        )}

        {category.subcategories &&
          renderCategories(category.subcategories, level + 1)}
      </Fragment>
    ))}
  </>
);

function BlogForm({ data }) {
  const [pickedImage, setPickedImage] = useState(null);
  const [value, setValue] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("content", value);

    const response = await addBlogPost(null, formData);
    console.log(response);
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="py-8 space-y-5 max-w-2xl">
        <div className="flex gap-3 items-center ">
          <label htmlFor="blogTitle" className="w-1/3">
            Blog Title:
          </label>
          <input
            type="text"
            placeholder="Blog Title"
            name="blogTitle"
            className="input input-bordered input-sm w-2/3"
            required
          />
        </div>

        <div className="flex gap-3 items-center ">
          <label htmlFor="slug" className="w-1/3">
            Slug:
          </label>
          <input
            type="text"
            placeholder="Slug"
            name="slug"
            className="input input-bordered input-sm w-2/3"
            required
          />
        </div>

        <div className="flex gap-3 items-center ">
          <label htmlFor="category" className="w-1/3">
            Category:
          </label>
          <select
            className="select select-sm select-bordered w-2/3 "
            defaultValue=""
            name="category"
          >
            <option value="">Select Category</option>
            {renderCategories(data)}
          </select>
        </div>

        <div className="flex gap-3 items-center">
          <label htmlFor="image" className="w-1/3">
            Image:
          </label>

          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            className={`file-input file-input-bordered file-input-sm w-2/3 ${
              pickedImage ? "hidden" : ""
            }`}
          />

          {pickedImage && (
            <div className="flex gap-8 items-center">
              <Image
                src={pickedImage}
                alt="Picked Image"
                width={80}
                height={50}
              />
              <button
                className="btn btn-sm"
                onClick={() => setPickedImage(null)}
              >
                Change Image
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-5">
        <label htmlFor="content" className="">
          Content:
        </label>
        <ReactQuill value={value} setValue={setValue} />
      </div>

      <FormSubmit text="Add" />
    </form>
  );
}

export default BlogForm;
