import { Component, OnInit } from '@angular/core';
// import * as S3 from 'aws-sdk/clients/s3';
// import { Observable, of } from 'rxjs';


// class S3Controller {
//   FOLDER = '/* s3-folder-name */';
//   BUCKET = '/* s3-bucket-name */';

//   private static getS3Bucket(): any {
//     return new S3(
//       {
//         accessKeyId: '/* access key here */',
//         secretAccessKey: '/* secret key here */',
//         region: '/* region here */'
//       }
//     );
//   }

//   public getFiles(): Observable<Array<FileUpload>> {
//     const fileUploads = [];

//     const params = {
//       Bucket: this.BUCKET,
//       Prefix: this.FOLDER
//     };

//     S3Controller.getS3Bucket().listObjects(params, function (err, data) {
//       if (err) {
//         console.log('There was an error getting your files: ' + err);
//         return;
//       }
//       console.log('Successfully get files.', data);

//       const fileDetails = data.Contents;

//       fileDetails.forEach((file) => {
//         fileUploads.push(new FileUpload(
//           file.Key,
//           'https://s3.amazonaws.com/' + params.Bucket + '/' + file.Key
//         ));
//       });
//     });

//     return of(fileUploads);
//   }
// }

@Component({
  selector: 'app-scripture',
  templateUrl: './scripture.component.html',
  styleUrls: ['./scripture.component.css']
})
export class ScriptureComponent implements OnInit {

  verse: string;
  text: string;

  constructor() { }

  ngOnInit() {

    this.getVerse();

  }

  getVerse() {
    this.verse = 'Scripture TBD';
    this.text = 'Branson will be picking this week!';


  }

}
