import DashboardCards from "../components/DashboardCards";
import DashboardKanban from "../components/DashboardKanban";

function Dashboard({ jobs = [] }) {
  return (
    <>
      <DashboardCards jobs={jobs} />
      <DashboardKanban jobs={jobs} />
    </>
  );
}

export default Dashboard;
