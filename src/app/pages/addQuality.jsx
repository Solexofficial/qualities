import React from 'react';
import QualityForm from '../components/ui/qualityForm';
import { useQualities } from '../hooks/useQualities';
const AddQualityPage = () => {
  const { addQuality } = useQualities();
  const handleSubmit = data => {
    addQuality(data);
    console.log(data);
  };

  return (
    <>
      <h1>Add Quality</h1>
      <QualityForm onSubmit={handleSubmit} />
    </>
  );
};

export default AddQualityPage;
