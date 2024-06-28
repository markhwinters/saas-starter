import { redirect } from "next/navigation";

const DashboardPage = async () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl md:text-4xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground text-sm md:text-lg">
          Lorem ipsum dolor sit amet, aperiri accusamus ad eam.
        </p>
      </div>
      <div>dashboard content</div>
    </div>
  );
};

export default DashboardPage;
