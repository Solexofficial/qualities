import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import EditForm from '../components/ui/editForm';

axios.interceptors.response.use(
  res => res,
  function (error) {
    const expectedErrors = error.response && error.response.status >= 400 && error.response.status < 500;
    if (!expectedErrors) {
      console.log('unexpected error');
    }
    return Promise.reject(error);
  }
);

const EditQualityPage = () => {
  const id = useParams().id;
  const [quality, setQuality] = useState(null);
  const qualityEndPoint = `http://localhost:4000/api/v1/quality/${id}`;

  const handleSubmit = async data => {
    try {
      await axios.put(qualityEndPoint, data).then(res => console.log(res.data.content));
    } catch (error) {
      console.log('Expected Error');
    }
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
