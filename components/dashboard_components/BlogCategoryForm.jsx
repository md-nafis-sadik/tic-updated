"use client";
import { addBlogCategory } from "@/actions/dataActions";
import FormSubmit from "../FormSubmit";
import { useFormState } from "react-dom";
import { Fragment } from "react";

const renderCategories = (items, level = 0) => (
  <>
    {items.map((item) => (
      <Fragment key={item.id}>
        <option value={item.id} data-url={item.url}>
          {"-".repeat(level) + " " + item.name}
        </option>
        {item.subcategories && renderCategories(item.subcategories, level + 1)}
      </Fragment>
    ))}
  </>
);

function BlogCategoryForm({ data }) {
  const [formState, formAction] = useFormState(addBlogCategory, {});
  return (
    <form action={formAction} className="space-y-5">
      <div className="flex flex-col gap-3">
        <label htmlFor="name">Category Name</label>
        <input
          type="text"
          name="name"
          className="input input-bordered input-sm"
        />
      </div>

      <div className="flex flex-col gap-3">
        <label htmlFor="priority">Parent Category:</label>
        <select
          className="select select-sm select-bordered"
          defaultValue=""
          name="parentCategory"
        >
          <option value="">Select Parent</option>
          {renderCategories(data)}
        </select>
      </div>

      <div className="flex flex-col gap-3">
        <label htmlFor="priority">Priority:</label>
        <select
          className="select select-sm select-bordered"
          defaultValue=""
          name="priority"
        >
          <option value="">Select Priority</option>
          {Array.from({ length: 10 }, (_, i) => i + 1).map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>

      <FormSubmit text="Add" />
    </form>
  );
}

export default BlogCategoryForm;
