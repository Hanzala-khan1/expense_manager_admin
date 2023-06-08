import React, { useEffect, useState } from 'react'
import "./Interest.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import Navbar from '../navbar/Navbar';
import axios from 'axios';
import { App_host } from '../../assets/dataconfig';

const Interest = () => {

  const [categories, setCategories] = useState([]);
  const [data, setData] = useState("");
  /////////////// get all interest value //////////////
  useEffect(() => {
    fetchcategories();
  }, []);

  const fetchcategories = async () => {
    try {
      const res = await axios({
        url: `${App_host}/categories/getCategory`,
        method: 'get',
        data: {},
        headers: {
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAsImlhdCI6MTY4NTAxOTMxOX0._hk0XM_tqmi3Mu1wKyyeHwEKJaSMz69RaMdEnvqg9Ww',
        },
      });
      setCategories(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  ///////////// add into interest /////////////////
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios({
        url: `${App_host}/categories/createCategory`,
        method: 'post',
        data: {},
        headers: {
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAsImlhdCI6MTY4NTAxOTMxOX0._hk0XM_tqmi3Mu1wKyyeHwEKJaSMz69RaMdEnvqg9Ww',
        },
      });
      setData("")
      fetchcategories()
    } catch (err) {
      console.log(err);
    }
  };
  /////////////////// delete interest //////////////////////
  const handleDelete = async (categories) => {
    try {
      const res = await axios({
        url: `${App_host}/categories/deleteCategory/${categories._id}`,
        method: 'delete',
        data: {},
        headers: {
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAsImlhdCI6MTY4NTAxOTMxOX0._hk0XM_tqmi3Mu1wKyyeHwEKJaSMz69RaMdEnvqg9Ww',
        },
      });
      fetchcategories()
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className='home'>
      <Navbar />
      <div className='divmain'>
        <div className='main_user'>
          <div className='addinterest'>
            <h1> Add Cetegory</h1>
            <div className='divinput'>
              <input
                className='input'
                value={data}
                placeholder='Add category Name'
                onChange={(e) => { setData(e.target.value) }}
              />
              <input
                className='input'
                value={data}
                placeholder='categoryIconId'
                onChange={(e) => { setData(e.target.value) }}
              />
              <input
                className='input'
                value={data}
                placeholder='type'
                onChange={(e) => { setData(e.target.value) }}
              />
              <button
                className='addbtn'
                onClick={handleClick} > Add </button>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th className='right'>Status</th>
              </tr>
            </thead>
            <tbody>
              {categories.map(categories => {
                return <tr key={categories._id}>
                  <td>{categories.categoryName}</td>
                  <td className='right'>
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      className='delbt'
                      onClick={() => handleDelete(categories)}
                    />
                  </td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Interest
