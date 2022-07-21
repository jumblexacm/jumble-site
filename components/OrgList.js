import OrgCard from './OrgCard';

const arr = [0, 1, 2, 3];

function OrgList() {
  const description =
    //'This is a short description.';
    'This is a test description for an org. Lets say this text was really really long and full of nothing pretty much. This is a test description for an org. Lets say this text was really really long and full of nothing pretty much. This is a test description for an org. Lets say this text was really really long and full of nothing pretty much.';
  return (
    <ul>
      {arr.map((index) => (
        <li key={index}>
          <OrgCard description={description}></OrgCard>
        </li>
      ))}
    </ul>
  );
}

export default OrgList;
