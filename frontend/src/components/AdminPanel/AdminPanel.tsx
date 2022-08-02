// import React from 'react';
import  { CSSProperties} from 'react';
import FileUploader from './FileUploader/FileUploader';
import './AdminPanel.css';
import AddHr from './AddHR/AddHr';

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
    <br /><br />
    <div>
      <h2 style={styles.titlepa}>Dodawanie Studenta</h2>
    </div>
    <br /><br />
    <div>
    <FileUploader/>
    </div>
    <br /><hr /><br />
    <div>
      <h2 style={styles.titlepa}>Dodawanie HR</h2>
    </div><br /><br />
    <div>
        <AddHr/>
    </div>

    
    </>
    
    )
};

export default AdminPanel;
