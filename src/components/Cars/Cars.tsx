import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import axios from 'axios';
import Dropdown from 'react-dropdown';
import InfoTable from '../InfoTable/InfoTable';
import 'react-dropdown/style.css';
import './Cars.css';

const Cars: React.FC = () => {
  const Url: string = 'http://localhost:8080/api/';
  const { data } = useFetch(`${Url}makes`);
  const [error, setError] = useState<boolean>(false);
  const [make, setMake] = useState<string>('');
  const [model, setModel] = useState<string>('');
  const [models, setModels] = useState<string[]>([]);

  /**
   * Method base on make value and get models data.
   * set make value in state and clear previous values for model
   * @param value {make}
   */
  const handleMakeChange = (value: string) => {
    if (value) {
      setModels([]);
      setModel('');
      getModels(value);
      setMake(value);
    }
  };

  /**
   * Method fetching models data from Api.
   * @param model {model}
   */

  const getModels = (model: string): void => {
    axios
      .get(`${Url}models?make=${model}`)
      .then((response) => {
        if (response.status === 200 && response.data.length) {
          setModels(response.data);
          setError(false);
        } else {
          alert('Models are not available');
        }
      })
      .catch((error) => {
        if (error && error.message !== 'Network Error') {
          if (error.response.status === 503) {
            alert('Service Unavailable, Please Try Again');
            setError(true);
            setMake('');
            setModel('');
          }
        } else {
          // handled error which from request and 404 and others
          alert('Something Went Wrong');
        }
      });
  };

  return (
    <div className='container' data-testid='Cars-component'>
      <div className='dropdownInfo'>
        <Dropdown
          className={data.length ? 'makes' : 'makes disable'}
          options={data}
          value={make}
          onChange={(e) => handleMakeChange(e.value)}
          placeholder='Select Make Option'
        />

        {
          <Dropdown
            className={
              !error && models.length && make ? 'makes' : 'makes disable'
            }
            options={models}
            value={model}
            onChange={(e) => setModel(e.value)}
            placeholder='Select Model Option'
          />
        }
      </div>
      {model && make && <InfoTable model={model} make={make} url={Url} />}
    </div>
  );
};

export default Cars;
