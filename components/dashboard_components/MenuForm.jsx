"use client";
import { addMenuItem } from "@/actions/dataActions";
import { Fragment, useState } from "react";
import { useFormState } from "react-dom";
import FormSubmit from "../FormSubmit";

const renderMenuItems = (items, level = 0) => (
  <>
    {items.map((menuItem) => (
      <Fragment key={menuItem.id}>
        <option value={menuItem.id} data-url={menuItem.url}>
          {"-".repeat(level) + " " + menuItem.name}
        </option>
        {menuItem.children && renderMenuItems(menuItem.children, level + 1)}
      </Fragment>
    ))}
  </>
);

function MenuForm({ data }) {
  const [formState, formAction] = useFormState(addMenuItem, {});
  const [url, setUrl] = useState("");

  const handleParentMenuChange = (event) => {
    const selectedOption = event.target.selectedOptions[0];
    const selectedUrl = selectedOption.getAttribute("data-url");
    setUrl(selectedUrl || "");
  };

  return (
    <form action={formAction} className="w-2/3 grid md:grid-cols-2 gap-8">
      <div className="flex flex-col gap-3">
        <label htmlFor="name">Menu Title</label>
        <input
          type="text"
          name="name"
          className="input input-bordered input-sm"
        />
      </div>

      <div className="flex flex-col gap-3">
        <label htmlFor="parentMenu" className="w-1/3">
          Parent Menu:
        </label>
        <select
          className="select select-sm select-bordered w-2/3"
          defaultValue=""
          name="parentMenu"
          onChange={handleParentMenuChange}
        >
          <option value="">Select Parent Menu</option>
          {renderMenuItems(data)}
        </select>
      </div>

      <div className="flex flex-col gap-3">
        <label htmlFor="url">Url</label>
        <input
          type="text"
          name="url"
          className="input input-bordered input-sm"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="priority" className="w-1/3">
          Priority:
        </label>
        <select
          className="select select-sm select-bordered w-2/3"
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
      <FormSubmit text="Add Menu" />
    </form>
  );
}

export default MenuForm;
