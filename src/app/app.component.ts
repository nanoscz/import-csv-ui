import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('csvReader') csvReader: any;
  title = 'import-csv-ui';
  subtitle = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices 
              eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate 
              semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.`;
  file = null;
  objectLength = null;
  records: any[] = [];
  constructor() {
    console.log("File", this.file, 'Type:', typeof this.file);
  }

  isValidCSVFile(file: any) {
    
    return file.name.endsWith(".csv");
  } 

  setFileData(file: any) {
    this.file = file;
    this.objectLength = Object.keys(file);
  }

  uploadListener($event) {
    const files = $event.srcElement.files;
    this.setFileData(files[0]);
    if (this.isValidCSVFile(files[0])) {
      let input = $event.target;
      let reader = new FileReader();
      reader.readAsText(input.files[0]);
      reader.onload = () => {  
        let csvData = reader.result;  
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);
  
        let headersRow = this.getHeaderArray(csvRecordsArray);
        console.log('headersRow', headersRow);
      };  
      reader.onerror = function () {  
        console.log('error is occured while reading file!');
      };  

    }
  }

  getHeaderArray(csvRecordsArr: any) {
    let headers = (<string>csvRecordsArr[0]).split(',');
    let headerArray = [];  
    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }  
    return headerArray;
  }
}
