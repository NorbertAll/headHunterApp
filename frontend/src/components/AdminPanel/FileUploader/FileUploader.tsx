import  { CSSProperties, useState } from 'react';
import { useCSVReader } from 'react-papaparse';
import Button from '@mui/material/Button';
import axios from "axios";



const styles = {
    csvReader: {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: 10,
      paddingLeft:'15%',
      paddingRight:'15%',
    } as CSSProperties,
    browseFile: {
      width: '20%',
      
    } as CSSProperties,
    acceptedFile: {
      border: '1px solid #ccc',
      height: 45,
      lineHeight: 2.5,
      paddingLeft: 10,
      width: '90%',
    } as CSSProperties,
    remove: {
      borderRadius: 0,
      padding: '0 20px',
    } as CSSProperties,
    progressBarBackgroundColor: {
      backgroundColor: 'red',
    } as CSSProperties,
    sendButton:{
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
    } as CSSProperties,
  };
  

const FileUploader = () => {
    const { CSVReader } = useCSVReader();
    const [csvfiles, setCSVfiles] = useState({});
   
  const handleSubmit =  () =>{
    let jsonString: string='[';
   // const spa: string=' ';
    const kl: string='{';
    const kp: string='}';
    const zl: string='"';
    const zp: string='" : "';
    const zk: string='", ';
    const ko: string="]";
    const c:Object=csvfiles;
    const b:Object = Object.values(c)[0]
    const keya: string[]=[];
    const s:Object= Object.values(b)[0];
     for(let n = 0; n < Object.keys(s).length; n+=1){
       keya.push(Object.values(s)[n]);
     }
     for(let n = 1; n < Object.keys(b).length; n+=1){
        const p:Object= Object.values(b)[n];
        jsonString+=kl;
        for(let o = 0; o < Object.keys(p).length; o+=1){
             if(!Object.values(p)[o])
             break;
              jsonString+=zl+keya[o]+zp+Object.values(p)[o]+zk;
       }
       jsonString+=kp;
     }
     jsonString+=ko;
     jsonString.toString();
     jsonString=jsonString.replace('{}', '');
     jsonString = jsonString.replace('}{', '},{');
     jsonString = jsonString.replaceAll(', }', '}');
     const json = JSON.parse(jsonString);
    

  axios.post("http://localhost:3001/adminpanel/", json
  , {
    headers: {
      // Overwrite Axios's automatically set Content-Type
      'Content-Type': 'application/json'
    }
  });
  }
  
  return (<>
  
    <CSVReader
    onUploadAccepted={(results: Object) => {
      setCSVfiles(results);
      console.log(results);
      
    }}
  >
    {({
      getRootProps,
      acceptedFile,
      ProgressBar,
      getRemoveFileProps,
    }: any) => (
      <>
        <div style={styles.csvReader}>
          <Button variant="contained" color="primary" type='button' {...getRootProps()} style={styles.browseFile}>
            Wyszukaj pliku
          </Button>
          <div style={styles.acceptedFile}>
            {acceptedFile && acceptedFile.name}
          </div>
          <Button {...getRemoveFileProps()} style={styles.remove} type='button' variant="contained" color="error" >
            Wyczyść
          </Button>
        </div>
        <ProgressBar style={styles.progressBarBackgroundColor} />
      </>
    )}
  </CSVReader>
  <Button style={styles.sendButton} variant="contained" color="success" onClick={handleSubmit}>Wyślij</Button>
 
  </>
  )
}

export default FileUploader