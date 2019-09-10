import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'friday-breakfast';
}

const verse = 'Praison will be picking something soon for this week!';


// const params = {
//   Bucket: 'fridaybreakfast',
//   Key: 'Scripture/Current/Romans 8 1.txt'
// };

// const s3 = new S3();


// // tslint:disable-next-line:only-arrow-functions
// s3.getObject(params, function(err, data) {
//   if (err) { console.log(err, err.stack); } else {     console.log(data); }           // successful response
// });
