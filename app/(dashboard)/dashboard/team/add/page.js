import TeamMemberForm from "../../../../../components/dashboard_components/TeamMemberForm";

function TeamMemberAddPage() {
  return (
    <div className=" px-8 space-y-8">
      <div className="flex justify-between">
        <h1 className="text-2xl">Add Member</h1>
      </div>

      <div className="w-10/12">
        <TeamMemberForm />
      </div>
    </div>
  );
}

export default TeamMemberAddPage;
