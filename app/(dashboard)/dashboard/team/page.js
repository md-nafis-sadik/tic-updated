import Link from "next/link";

function TeamPage() {
  return (
    <main>
      <div className="header-section flex gap-8 items-center">
        <h1 className="text-2xl font-bold ">Team</h1>

        <Link className="btn btn-sm btn-info " href="./team/add">
          Add Member
        </Link>
      </div>

      <div className="overflow-x-auto mt-16 rounded-md p-5 shadow-standard">
        {/* <BlogPostTable data={posts} /> */}
      </div>
    </main>
  );
}

export default TeamPage;
