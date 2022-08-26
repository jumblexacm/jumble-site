import OrgCard from './OrgCard';

function OrgList({ orgs }) {
  return (
    <ul>
      {orgs?.map((org, index) => (
        <li key={index}>
          <OrgCard org={org}></OrgCard>
        </li>
      ))}
    </ul>
  );
}

export default OrgList;
