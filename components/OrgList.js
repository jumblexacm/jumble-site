import OrgCard from './OrgCard';

const arr = [
  { description: '' },
  { description: 'This is a short description.' },
  {
    description:
      'This is a test description for an org. Lets say this text was really really long and full of nothing pretty much. This is a test description for an org. Lets say this text was really really long and full of nothing pretty much. This is a test description for an org. Lets say this text was really really long and full of nothing pretty much.',
  },
  { description: 'This is a short description' },
];

function OrgList() {
  return (
    <ul>
      {arr.map((org, index) => (
        <li key={index}>
          <OrgCard description={org.description}></OrgCard>
        </li>
      ))}
    </ul>
  );
}

export default OrgList;
