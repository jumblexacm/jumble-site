import EmbdedForm from '../../components/Forms/EmbedForm';

function add() {
  const src =
    'https://docs.google.com/forms/d/e/1FAIpQLSdKA1vFdT-IgFBmd8ipfbbHl-FYcoVkRXru3iAaXeSakUXgFA/viewform?usp=sf_link';

  return <EmbdedForm src={src}></EmbdedForm>;
}

export default add;
