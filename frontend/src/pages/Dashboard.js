import DashboardCards from "../components/DashboardCards";
import DashboardKanban from "../components/DashboardKanban";

function Dashboard({ jobs = [], refresh, loading }) {
  return (
    <>
      <DashboardCards jobs={jobs} loading={loading} />
      <DashboardKanban jobs={jobs} refresh={refresh} />
    </>
  );
}

export default Dashboard;
