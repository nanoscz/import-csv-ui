import { Component, ViewChild } from '@angular/core';
import { DemographicSocioData } from './models';
import { Questionnaire, DataKeyDemographicSocio } from './config';
import { IDARE, REVERSE_IDARE } from './dictionary';

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
  file: any;
  displayedColumns: string[] = DataKeyDemographicSocio;
  dataSource: Array<DemographicSocioData>;

  constructor() {}

  isValidCSVFile(file: any) {

    return file.name.endsWith(".csv");
  }

  setFileData(file: any) {
    this.file = file;
  }

  uploadListener($event) {
    const files = $event.srcElement.files;
    this.setFileData(files[0]);
    if (this.isValidCSVFile(files[0])) {
      const input = $event.target;
      const reader = new FileReader();
      reader.readAsText(input.files[0]);
      reader.onload = () => {
        const csvData = reader.result;
        let csvRecordsArray:any = (<string>csvData).split(/\r\n|\n/);
        csvRecordsArray.splice(0, 1);
        this.dataSource = this.getDataDemographicSocioArrayFromCSVFile(csvRecordsArray);
        this.dataSource = this.assessAnxiety(this.dataSource);
      };
      reader.onerror = function () {
        console.log('error is occured while reading file!');
      };

    } else {
      alert("Please import valid .csv file.");
      this.fileReset();
    }
  }

  getQuestionnaireResult(questionnaire: any) {
    const points = questionnaire.map(question => question.point);
    return points.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    });
  }
  
  assessAnxiety(fichas: any) {
    const data = fichas.map(data => {
      let newData = {...data};
      newData.points = this.getQuestionnaireResult(newData.questionnaire);
      return newData;
    });
    return data
  }

  getheaderDemographicSocio(headerArray: any) {
    return headerArray.splice(0, 9);
  }

  getDataDemographicSocioArrayFromCSVFile(csvRecordsArray: any) {
    let demographicSocioData: Array<DemographicSocioData>;
    demographicSocioData = csvRecordsArray.map(item => {
      const ficha = (<string>item).split(',');
      const currentFicha = ficha.map(item => item.replace(/(")/g, ''));
      return {
        date: currentFicha[0].trim(),
        fullName: currentFicha[1].trim(),
        age: parseInt(currentFicha[2].trim()),
        gender: currentFicha[3].trim(),
        ci: currentFicha[4].trim(),
        occupation: currentFicha[5].trim(),
        study: currentFicha[6].trim(),
        maritalStatus: currentFicha[7].trim(),
        economy: currentFicha[8].trim(),
        numberOfChildren: currentFicha[9].trim(),
        question01: currentFicha[10].trim(),
        question02: currentFicha[11].trim(),
        question03: currentFicha[12].trim(),
        question04: currentFicha[13].trim(),
        question05: currentFicha[14].trim(),
        questionnaire: this.generateQuestions(currentFicha)
      }
    });
    return demographicSocioData;
  }

  generateQuestions(ficha: any) {
    let answers = [];
    answers = Questionnaire.map((question, idx) => {
      let i = idx + 1;
      let index = question[`question${i}`].index;
      let reply = ficha[index];
      let type = question[`question${i}`].type;
      let code = question[`question${i}`].code;
      return {
        code,
        index,
        reply,
        verify: i === code ? 'success' : 'fail',
        question: question[`question${i}`].question,
        point: type ? IDARE[reply] : REVERSE_IDARE[reply]
      }
    });
    return answers;
  }

  getHeaderArray(csvRecordsArr: any) {
    let headers = (<string>csvRecordsArr[0]).split(',');
    let headerArray = [];
    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }
    return headerArray;
  }

  fileReset() {
    this.csvReader.nativeElement.value = "";
    this.dataSource  = []
  }
}
