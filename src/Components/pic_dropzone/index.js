const React = require('react');
const Dropzone = require('react-dropzone');
import axios from 'axios';
var aws = require('aws-sdk');
import './style.css';

 class PicDropzone extends React.Component{

    dropHandler(files){
    aws.config.update({
    accessKeyId: "AKIAICZW5GU2SMA5ZIVA",
    secretAccessKey: "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",
    region: 'us-west-1'
    });    

    var file = files[0];
    var s3 = new aws.S3();

    var params = {
        Bucket: "tys204434",
        Key: file.name,
        Expires: 60*60,
        ContentType: file.type
    };
    var signedUrl;
    s3.getSignedUrl('putObject', params, function(err, data) {
        if (err) {
            console.log(err);
            return;
        } else {
            signedUrl = data;
            console.log("Get sign Response:");
            console.log(data);
        }
    });

    var options = {
        headers: {
          'Content-Type': file.type
        }
      };
    
    axios.put(signedUrl, file, options)
    .then(function (result) {
      console.log("Put Response:");
      
      console.log(result);
    })
    .catch(function (err) {
    });
    this.props.Raddress("https://s3-us-west-1.amazonaws.com/tys204434/" + file.name);
    }

    render(){
    return (
      <div className = "Dropzone-Wrapper">
      <Dropzone className = "Dropzone-Default" disableClick ={false} multiple={false} accept={'image/*'} onDrop={this.dropHandler.bind(this)}>
        <div> Drop a photo, or click to add. </div>
      </Dropzone>
      </div>
        );
    }
};

export default PicDropzone;


