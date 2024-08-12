import FormSubmit from "../FormSubmit";

function TeamMemberForm() {
  return (
    <form action="">
      <div className=" grid grid-cols-2 items-center justify-center gap-8">
        <div className="form-group">
          <label htmlFor="title">Name</label>
          <input
            type="text"
            id="title"
            name="name"
            className="input input-sm input-bordered w-full"
          />
        </div>

        <div className="form-group">
          <label htmlFor="title">Designation</label>
          <input
            type="text"
            id="title"
            name="designation"
            className="input input-sm input-bordered w-full"
          />
        </div>

        <div className="form-group ">
          <label htmlFor="title">Email</label>
          <input
            type="text"
            id="title"
            name="email"
            className="input input-sm input-bordered w-full"
          />
        </div>

        <div className="form-group">
          <label htmlFor="title">Phone Number</label>
          <input
            type="text"
            id="title"
            name="phoneNumber"
            className="input input-sm input-bordered w-full"
          />
        </div>

        <div className="form-group ">
          <label htmlFor="title">Facebook</label>
          <input
            type="text"
            id="title"
            name="facebook"
            className="input input-sm input-bordered w-full"
          />
        </div>

        <div className="form-group ">
          <label htmlFor="title">Instagram</label>
          <input
            type="text"
            id="title"
            name="instagram"
            className="input input-sm input-bordered w-full"
          />
        </div>

        <div className="form-group ">
          <label htmlFor="title">Linkedin</label>
          <input
            type="text"
            id="title"
            name="linkedin"
            className="input input-sm input-bordered w-full"
          />
        </div>
      </div>

      <FormSubmit text="Add" />
    </form>
  );
}

export default TeamMemberForm;
