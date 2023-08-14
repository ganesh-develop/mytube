


import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import React, { useEffect, useRef, useState } from 'react';
import './Imagebox.css'
import Imagedisplay from './Imagedisplay';


function ControlledTabs() {
  const [key, setKey] = useState('Home');
  const [renderedimg, setrenderedimg] = useState([]);
  const targetfile = useRef();
  const [uploadmsg, setuploadmsg] = useState(false)

  const UploadedFiles = localStorage.getItem('UserImages');

  useEffect(() => {
    if (UploadedFiles !== undefined && UploadedFiles !== null) {
      setrenderedimg(JSON.parse(UploadedFiles));
    }
  }, [key,UploadedFiles]);

  const handleFileChange = (e) => {

    let file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setrenderedimg([...renderedimg, { filesName: file.name, Imgsrc: reader.result }]);
      setuploadmsg(true);
    };

    if (file) reader.readAsDataURL(file);
    targetfile.current.value = '';
  };

  useEffect(() => {
    if (renderedimg.length !== 0) {
      localStorage.setItem('UserImages', JSON.stringify(renderedimg));

    }

  }, [uploadmsg, key]);



  
  setTimeout(() => {
    setuploadmsg(false)
  }, 3000)
//
  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3 fw-bold text-warning VisitorsPlace align-items-center justify-content-center"

    >
      <Tab eventKey="Home" title='News Feeds' className=''>
        <div className='Home'>
          <p className='mb-3 fw-bold mt-2 text-light text-center h3'>New Posts</p>
          <Imagedisplay renderedimg={renderedimg} />
        </div>
      </Tab>
      <Tab eventKey="Upload" title="Upload">

        <div className='Upload'>
          <div className='Uploadimg m-5 fw-bold'  > <i className=" bi bi-cloud-upload-fill text-primary fw-bold"> Create Post </i>
          <input className='  text-success' type="file" ref={targetfile} accept="image/*" onChange={handleFileChange} />
         </div>
          {uploadmsg === true && <h5 className='ms-5 mt-5  text-success'>File Uploaded Successfully</h5>}
        </div>

      </Tab>
      <Tab eventKey="Post" title="Your Post" >
        <div className="Post">
          <p className='fw-bold text-success m-5'>Coming Soon Please wait....</p>
        </div>

      </Tab>
    </Tabs>
  );
}

export default ControlledTabs;


