import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateAnxiety'
})
export class CalculateAnxietyPipe implements PipeTransform {

  transform(value: string) {
    const response = this.calculateAnxiety(value);
    return response;
  }

  calculateAnxiety(value) {
    let response = 'Fail';
    if (value <= 30) {
      response = 'Bajo'
    }
    if (value > 30 && value < 44) {
      response = 'Medio'
    }
    if (value >= 45) {
      response = 'Alto'
    }
    // switch (value) {
    //   case (value <= 30):
    //     response = 'Bajo'
    //     break;
    //   case (value > 30 && value < 44):
    //     response = 'Medio'
    //     break;
    //   case (value >= 45):
    //     response = 'Alto'
    //     break;
    //   default:
    //     response = 'Fail'
    //     break;
    // }
    return response;
  }
}
