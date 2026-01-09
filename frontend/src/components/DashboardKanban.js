function DashboardKanban({ jobs = [] }) {
  const applied = jobs.filter((j) => !j.status || j.status === "Applied");

  const interview = jobs.filter((j) => j.status === "Interview");

  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}
    >
      <Column title="Applied">
        {applied.map((job) => (
          <Card key={job._id} company={job.companyName} role={job.role} />
        ))}
      </Column>

      <Column title="Interview">
        {interview.map((job) => (
          <Card key={job._id} company={job.companyName} role={job.role} />
        ))}
      </Column>
    </div>
  );
}

const Column = ({ title, children }) => (
  <div>
    <h3>{title}</h3>
    {children}
  </div>
);

const Card = ({ company, role }) => (
  <div>
    <strong>{company}</strong>
    <p>{role}</p>
  </div>
);

export default DashboardKanban;
