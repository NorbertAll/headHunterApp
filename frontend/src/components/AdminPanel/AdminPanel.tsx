// import React from 'react';
import  { CSSProperties} from 'react';
import FileUploader from './FileUploader/FileUploader';
import './AdminPanel.css';

const styles = {
  titlepa: {
    textAlign: 'center',
  } as CSSProperties,
};



const AdminPanel = () => {
    

  return (<>

  <div>
    <h1 style={styles.titlepa}>Panel Admina</h1>
</div>
<div>
        dodanie hr
    </div>
    <div>
    <FileUploader/>
    </div>


    
    </>
    
    )
};

export default AdminPanel;
