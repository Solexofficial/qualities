import React from 'react';
import QualityForm from '../components/ui/qualityForm';
import { useQualities } from '../hooks/useQualities';
import { useHistory } from 'react-router';

const AddQualityPage = () => {
  const history = useHistory();
  const { addQuality } = useQualities();
  const handleSubmit = data => {
    addQuality(data).then(data => {
      if (data) history.push('/');
    });
  };

  return (
    <>
      <h1>Add Quality</h1>
      <QualityForm onSubmit={handleSubmit} />
    </>
  );
};

export default AddQualityPage;
