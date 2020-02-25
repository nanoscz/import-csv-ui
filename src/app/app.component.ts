import { Component, ViewChild } from '@angular/core';
import { DemographicSocioData, DataCasit } from './models';
import { QUESTIONNAIRE_IDARE, DataKeyDemographicSocio, QUESTIONNAIRE_CASIT } from './config';
import { IDARE, REVERSE_IDARE, FILETYPE, CASIT } from './dictionary';

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
  dataSourceParent: Array<DemographicSocioData> = [];
  dataSourceChildren: Array<any> = [];
  dataSourceAll: Array<any> = [];

  constructor() {}

  isValidCSVFile(file: any) {
    return file.name.endsWith('.csv');
  }

  getFileData(file: any) {
    this.file = file;
  }

  getFatherAndSonFiles(object: any) {
    let fileParent = null;
    let fileChildren = null;

    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        const element = object[key];
        if (element.name.includes('IDARE')) {
          fileParent = element;
        }
        if (element.name.includes('CASIT')) {
          fileChildren = element;
        }
      }
    }
    return [fileParent, fileChildren];
  }

  async uploadListener($event) {
    const files = $event.srcElement.files;
    if (files.length > 2) {
      alert('Solo se debe cargar dos archivos.');
      this.fileReset();
      return;
    }
    const [fileParent, fileChildren] = this.getFatherAndSonFiles(files);
    this.getFileData(fileParent);

    if (this.isValidCSVFile(fileParent)) {
      this.dataSourceParent = await this.readFileParent(fileParent) as any;
      this.dataSourceChildren = await this.readFileChildren(fileChildren) as any;
      this.dataSourceAll = this.matchData(this.dataSourceParent, this.dataSourceChildren);
      console.log(this.dataSourceParent);
      console.log(this.dataSourceChildren);
      console.log(this.dataSourceAll);
    } else {
      alert('Please import valid .csv file.');
      this.fileReset();
    }
  }

  matchData(dataSourceParent: Array<any>, dataSourceChildren: Array<any>) {
    let dataAll = []
    dataAll = dataSourceParent.map(parent => {
      let children = dataSourceChildren.filter(children => parent.ci == children.ci);
      parent.children = children;
      return parent;
    });

    return dataAll;
  }

  readFileChildren(fileChildren) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsText(fileChildren);
      reader.onload = () => {
        const csvData = reader.result;
        let fileResult = null;
        const csvRecordsArray: any = (csvData as string).split(/\r\n|\n/);
        csvRecordsArray.splice(0, 1);
        fileResult = this.getDataCASITFromCSVFile(csvRecordsArray);
        resolve(fileResult);
      };
      reader.onerror = function () {
        const msg = 'error is occured while reading file children!';
        console.error(msg);
        reject(msg);
      };
    });
  }

  getDataCASITFromCSVFile(csvRecordsArray: any) {
    let dataCasit: Array<DataCasit>;
    dataCasit = csvRecordsArray.map(item => {
      const ficha = (item as string).split(',');
      const currentFicha = ficha.map(item => item.replace(/(")/g, ''));
      return {
        date: currentFicha[0].trim(),
        parent: currentFicha[1].trim(),
        ci: parseInt(currentFicha[2].trim()),
        fullName: currentFicha[3].trim(),
        age: currentFicha[4].trim(),
        gender: currentFicha[5].trim(),
        course: currentFicha[6].trim(),
        question01: currentFicha[7].trim(),
        questionnaire: this.generateQuestions(currentFicha, QUESTIONNAIRE_CASIT, FILETYPE.children)
      };
    });
    return dataCasit;
  }
  

  readFileParent(fileParent: any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsText(fileParent);
      reader.onload = () => {
        const csvData = reader.result;
        let fileResult = null;
        const csvRecordsArray: any = (csvData as string).split(/\r\n|\n/);
        csvRecordsArray.splice(0, 1);
        fileResult = this.getDataIDAREFromCSVFile(csvRecordsArray);
        fileResult = this.assessAnxiety(fileResult);
        resolve(fileResult);
      };
      reader.onerror = function () {
        const msg = 'error is occured while reading file parent!';
        console.error(msg);
        reject(msg);
      };
    });
  }

  getQuestionnaireResult(questionnaire: any) {
    const points = questionnaire.map(question => question.point);
    return points.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    });
  }

  assessAnxiety(fichas: any) {
    const data = fichas.map(data => {
      const newData = { ...data };
      newData.points = this.getQuestionnaireResult(newData.questionnaire);
      return newData;
    });
    return data;
  }

  getheaderDemographicSocio(headerArray: any) {
    return headerArray.splice(0, 9);
  }

  getDataIDAREFromCSVFile(csvRecordsArray: any) {
    let demographicSocioData: Array<DemographicSocioData>;
    demographicSocioData = csvRecordsArray.map(item => {
      const ficha = (item as string).split(',');
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
        questionnaire: this.generateQuestions(currentFicha, QUESTIONNAIRE_IDARE, FILETYPE.parent)
      };
    });
    return demographicSocioData;
  }

  generateQuestions(ficha: any, questionnaire: any, fileType: any) {
    let answers = [];
    answers = questionnaire.map((question, idx) => {
      const i = idx + 1;
      let point = null;
      const index = question[`question${i}`].index;
      const reply = ficha[index];
      const type = question[`question${i}`].type;
      const code = question[`question${i}`].code;
      switch (fileType) {
        case 0:
          point = type ? IDARE[reply] : REVERSE_IDARE[reply];
          break;
        case 1:
          point = CASIT[reply];
          break;
        default:
          alert('Error Type File.')
          break;
      }
      return {
        code,
        index,
        reply,
        point,
        verify: i === code ? 'success' : 'fail',
        question: question[`question${i}`].question,
      };
    });
    return answers;
  }

  getHeaderArray(csvRecordsArr: any) {
    const headers = (csvRecordsArr[0] as string).split(',');
    const headerArray = [];
    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }
    return headerArray;
  }

  fileReset() {
    this.csvReader.nativeElement.value = '';
    this.dataSourceParent = [];
  }
}
