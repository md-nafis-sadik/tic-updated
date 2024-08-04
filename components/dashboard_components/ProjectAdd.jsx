"use client";
import { useState } from "react";
import FormSubmit from "../FormSubmit";
import { useFormState } from "react-dom";
import { addProjects } from "@/actions/dataActions";
import Image from "next/image";
import { Fragment } from "react";
import ReactQuill from "../ReactQuill";
import { useRouter } from "next/navigation";

const renderCategories = (items, level = 0) => (
  <>
    {items.map((category) => (
      <Fragment key={category.id}>
        {category.subcategories ? (
          <option value={`${category.id}`} className="font-bold px-2" disabled>
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

function ProjectAdd({ data }) {
  const [formState, formAction] = useFormState(addProjects, {});
  const [pickedImage, setPickedImage] = useState(null);
  const [value, setValue] = useState("");
  const router = useRouter();

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
    formData.append("description", value);

    const response = await addProjects(null, formData);
    console.log(response);
  };

  return (
    <div className=" px-8 space-y-8">
      <div className="flex justify-between">
        <h1 className="text-2xl">Add Project</h1>
      </div>

      <form onSubmit={handleSubmit} className="">
        <div className="py-8 space-y-5 max-w-2xl">
          <div className="flex gap-3 items-center ">
            <label htmlFor="name" className="w-1/3">
              Project Name:
            </label>
            <input
              type="text"
              placeholder="Category Name"
              name="name"
              className="input input-bordered input-sm w-2/3"
              required
            />
          </div>

          <div className="flex gap-3 items-center ">
            <label htmlFor="name" className="w-1/3">
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
          <label htmlFor="name" className="">
            Description:
          </label>
          <ReactQuill value={value} setValue={setValue} />
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

export default ProjectAdd;
