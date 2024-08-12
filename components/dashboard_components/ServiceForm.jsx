"use client";
import { addService } from "@/actions/dataActions";
import FormSubmit from "../FormSubmit";
import { useFormState } from "react-dom";
import { Fragment } from "react";

const renderServices = (items, level = 0) => (
  <>
    {items.map((item) => (
      <Fragment key={item.id}>
        <option value={item.id} data-url={item.url}>
          {"-".repeat(level) + " " + item.title}
        </option>
        {item.children && renderServices(item.children, level + 1)}
      </Fragment>
    ))}
  </>
);

function ServiceForm({ data }) {
  const [formState, formAction] = useFormState(addService, {});
  return (
    <form action={formAction} className="grid md:grid-cols-2 gap-8">
      <div className="flex flex-col gap-3">
        <label htmlFor="name">Service Name</label>
        <input
          type="text"
          name="serviceName"
          className="input input-bordered input-sm"
        />
      </div>

      <div className="flex flex-col gap-3">
        <label htmlFor="priority" className="w-1/3">
          Parent Service:
        </label>
        <select
          className="select select-sm select-bordered w-2/3"
          defaultValue=""
          name="parentService"
        >
          <option value="">Select Parent</option>
          {renderServices(data)}
        </select>
      </div>

      <div className="flex flex-col gap-3">
        <label htmlFor="name">Service Url</label>
        <input
          type="text"
          name="serviceUrl"
          className="input input-bordered input-sm"
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

      <FormSubmit text="Add" />
    </form>
  );
}

export default ServiceForm;
