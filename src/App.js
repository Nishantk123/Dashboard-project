import React, { Component } from 'react';
import './App.css';
import  leftIcon from'./left.png';
import rightIcon from './right.png';
import './fgt.pdf';
class App extends Component {
  constructor(props){
    super(props)
    this.state={   
      index:0,
      update:true,
      documentData:[]
    };
  }
  componentWillMount(){
 this.documentData=[{
      "set_id": 1209,
      "name": "Batch 4290",
      "status": "processing",
      "documents": [{
        "set_id": 1209,
        "doc_id": 217,
        "name": "1823696_Proof_16Feb2017.pdf",
        "status": "uploaded",
        "uploader": "john",
        "preview_url": "/file/cluster/ZEFTLSPOIR/preview.jpeg",
        "date_uploaded": "2018-09-25T02:14:51"
      }, {
        "set_id": 1209,
        "doc_id": 218,
        "name": "10538_PA_16031.pdf",
        "status": "queued",
        "uploader": "john",
        "preview_url": "/file/cluster/DCZBFJCDLN/preview.jpeg",
        "date_uploaded": "2018-09-25T02:14:51"
      }, {
        "set_id": 1209,
        "doc_id": 219,
        "name": "3704_KR_130.pdf",
        "status": "failed",
        "uploader": "john",
        "preview_url": "/file/cluster/DCZBFJCDLN/preview.jpeg",
        "date_uploaded": "2018-09-25T02:14:51"
      }, {
        "set_id": 1209,
        "doc_id": 229,
        "name": "21104_NY_11830.pdf",
        "status": "processing",
        "uploader": "john",
        "preview_url": "/file/cluster/OPNJEBJMRC/preview.jpeg",
        "date_uploaded": "2018-09-25T02:14:51"
      }],
      "date_uploaded": "2018-09-25T02:14:50"
    },
    {
      "set_id": 1210,
      "name": "Batch 4291",
      "status": "success",
      "documents": [{
        "set_id": 1210,
        "doc_id": 224,
        "name": "NBUAT001.pdf",
        "status": "success",
        "uploader": "john",
        "preview_url": "/file/cluster/ZEFTLSPOIR/preview.jpeg",
        "date_uploaded": "2018-09-25T02:14:51"
      }, {
        "set_id": 1210,
        "doc_id": 225,
        "name": "NBUAT002.pdf",
        "status": "success",
        "uploader": "john",
        "preview_url": "/file/cluster/NZGBSYGUWR/preview.jpeg",
        "date_uploaded": "2018-09-25T02:14:54"
      }, {
        "set_id": 1210,
        "doc_id": 226,
        "name": "NBUAT003.pdf",
        "status": "success",
        "uploader": "john",
        "preview_url": "/file/cluster/WAVBKJHVNZ/preview.jpeg",
        "date_uploaded": "2018-09-25T02:14:54"
      }],
      "date_uploaded": "2018-09-25T02:14:50"
    },
    {
      "set_id": 1211,
      "name": "Batch 4292",
      "status": "queued",
      "documents": [{
        "set_id": 1211,
        "doc_id": 314,
        "name": "LBUAT001.pdf",
        "status": "queued",
        "uploader": "john",
        "preview_url": "/file/cluster/QWXTQTXL/preview.jpeg",
        "date_uploaded": "2018-09-25T02:14:51"
      }, {
        "set_id": 1211,
        "doc_id": 315,
        "name": "LBUAT002.pdf",
        "status": "queued",
        "uploader": "john",
        "preview_url": "/file/cluster/URUPOALZMF/preview.jpeg",
        "date_uploaded": "2018-09-25T02:14:54"
      }, {
        "set_id": 1211,
        "doc_id": 316,
        "name": "LBUAT003.pdf",
        "status": "queued",
        "uploader": "john",
        "preview_url": "/file/cluster/JDASQIB/preview.jpeg",
        "date_uploaded": "2018-09-25T02:14:54"
      }],
      "date_uploaded": "2018-09-25T02:14:50"
    }
  ]
  }

  leftIconHandler=()=>{
    let counts=this.state.index;
    if(counts>0){
      counts= counts - 1;
      this.setState({index:counts})
    }
  };
  rightIconHandler=()=>{
    let counts=this.state.index;
    if(counts<2){
      counts= counts + 1;
      this.setState({index:counts})
    }
  }
  render() {
    let dashBoardData=[]
    this.documentData.forEach((obj, index) => {
     let  documentDataObject=[];
     console.log(obj.documents)
      obj.documents.forEach((object, index)=> {
        console.log(object)
        documentDataObject.push(
          <tr>
              <td>{object.set_id}</td>
              <td>{object.doc_id}</td>
              <td>{object.name}</td>
              <td>{object.status}</td>
              <td>{object.uploader}</td>
              <td>{object.date_uploaded}</td>
              <td>{<img src= "`obj.preview_url`" />}</td>
            </tr>
        )
      });
      dashBoardData.push(
        <div className="dasboard-container">
          <div className="dashboard-heading">
          <div className="document-length">
            No of document: 4
            </div>
            <span>SET-ID: </span><span>{obj.set_id}</span>
            <br/>
            <span>NAME: </span><span>{obj.name}</span>
            <br/>
            <span>Status: </span><span>{obj.status}</span>
            <br/>
            <span>Date: </span><span>{obj.date_uploaded}</span>
            
          </div>
          <div className="dashboard-search">
          This Section is for searching and shorting
          </div>
          <div className="dashboard-body">
          <table>
          <thead>
            <tr> 
            <th>Set-Id</th>
            <th>Doc-Id</th>
            <th>Doc-Name</th>
            <th>Status</th>
            <th>Uploader Name</th>
            <th>Uploaded Date</th>
            <th>Preview</th>
            </tr>
          </thead>
          <tbody>
         {documentDataObject} 
          </tbody>
        </table>
          </div>
        
        </div>
      )
    });
    console.log(dashBoardData)
    return (
      <div className="app">
      {dashBoardData[this.state.index]}
        <div className="dasboard-bottom">
       
          <div className="right-icon" onClick={()=>this.leftIconHandler()}><img  src={leftIcon} alt ="left" /></div>
          <div className="count-one" onClick={()=>this.setState({index:0})} >1</div>
          <div className="count-one" onClick={()=>this.setState({index:1})}>2</div>
          <div className="count-one" onClick={()=>this.setState({index:2})}>3</div>
          <div className="right-icon" onClick={()=>this.rightIconHandler()}><img  src={rightIcon} alt ="right" /></div>
        </div>
      
      </div>
    );
  }
}

export default App;
