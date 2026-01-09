import DashboardCards from "../components/DashboardCards";
import DashboardKanban from "../components/DashboardKanban";

function Dashboard({ jobs = [] }) {
  return (
    <>
      <DashboardCards jobs={jobs} />

      <div style={{ marginTop: "32px" }}>
        <DashboardKanban jobs={jobs} />
      </div>
    </>
  );
}

export default Dashboard;
