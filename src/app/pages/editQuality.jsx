import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import EditForm from '../components/ui/editForm';

const EditQualityPage = () => {
  const id = useParams().id;
  const [quality, setQuality] = useState(null);
  const qualityEndPoint = `http://localhost:4000/api/v1/quality/${id}`;
  const handleSubmit = data => {
    axios.put(qualityEndPoint, data).then(res => console.log(res.data.content));
  };
  useEffect(async () => {
    const { data } = await axios.get(qualityEndPoint);
    setQuality(data.content);
  }, []);

  return (
    <>
      <h1>Edit Quality Page</h1>
      {quality !== null ? <EditForm data={quality} onSubmit={handleSubmit} /> : <h1>Loading...</h1>}
    </>
  );
};

export default EditQualityPage;
