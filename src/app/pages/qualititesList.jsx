import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import QualitiesTable from '../components/ui/qualitiesTable';
import axios from 'axios';

const QualitiesListPage = () => {
  const [qualities, setQualities] = useState([]);
  const history = useHistory();

  useEffect(async () => {
    const { data } = await axios.get('http://localhost:4000/api/v1/quality');
    setQualities(data.content);
  }, []);

  const handleEdit = param => {
    console.log(param);
    history.push(`/edit/${param}`);
  };
  const handleDelete = param => {
    console.log(param);
  };
  return (
    <>
      <h1>Qualitites List Page</h1>
      <QualitiesTable onDelete={handleDelete} onEdit={handleEdit} data={qualities} />
    </>
  );
};

export default QualitiesListPage;
