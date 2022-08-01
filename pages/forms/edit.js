import EmbdedForm from '../../components/Forms/EmbedForm';

function edit() {
  const src =
    'https://docs.google.com/forms/d/e/1FAIpQLSd47GCN1YMn0RSRGqNU6Ct3cv-mig1AHzSena1OvUv21WlFNg/viewform?usp=sf_link';

  return <EmbdedForm src={src}></EmbdedForm>;
}

export default edit;
