import OrgList from '../../components/OrgList';

export default function OrganizationsPage() {
  return (
    <div>
      <h1 className="text-center font-semibold text-2xl pt-6">
        Organization List
      </h1>
      <OrgList></OrgList>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}
