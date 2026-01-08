import DashboardCards from "../components/DashboardCards";
import DashboardKanban from "../components/DashboardKanban";

function Dashboard() {
  return (
    <>
      <DashboardCards />
      <div style={{ marginTop: "32px" }}>
        <DashboardKanban />
      </div>
    </>
  );
}

export default Dashboard;
