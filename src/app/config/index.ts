export const Settings = {
  fichas: {
    demographicSocioHeader: {
      date: 'Fecha',
      fullName: 'Nombre',
      age: 'Edad',
      gender: 'Genero',
      ci: 'Cedula de Identidad',
      occupation: 'Ocupacion',
      study: 'Formacion',
      maritalStatus: 'Estado Civil',
      economy: 'Economia',
      numberOfChildren: 'Hijos',
      question01: 'Pregunta 1',
      question02: 'Pregunta 2',
      question03: 'Pregunta 3',
      question04: 'Pregunta 4',
      question05: 'Pregunta 5',
      points: 'Puntos',
      anxiety: 'Ansiedad'
    }
  }
};

function getValueObject(object) {
  const display = [];
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      const element = object[key];
      display.push(element);
    }
  }
  return display;
}

export const DataValueDemographicSocio = getValueObject(Settings.fichas.demographicSocioHeader);

export const DataKeyDemographicSocio = Object.keys(Settings.fichas.demographicSocioHeader);

export const QUESTIONNAIRE_IDARE = [
  {
    question1: {
      code: 1,
      type: false,
      index: 15,
      question: 'Me siento bien',
    }
  },
  {
    question2: {
      code: 2,
      type: true,
      index: 16,
      question: 'Me canso rápindexamente'
    }
  },
  {
    question3: {
      code: 3,
      type: true,
      index: 17,
      question: 'Siento ganas de llorar'
    }
  },
  {
    question4: {
      code: 4,
      type: true,
      index: 18,
      question: 'Quisiera ser tan feliz como otros parecen serlo'
    }
  },
  {
    question5: {
      code: 5,
      type: true,
      index: 19,
      question: 'Me pierdo cosas por no poder decindexirme rápindexamente'
    }
  },
  {
    question6: {
      code: 6,
      type: false,
      index: 20,
      question: 'Me siento descansado'
    }
  },
  {
    question7: {
      code: 7,
      type: false,
      index: 21,
      question: 'Soy una persona “tranquila serena y sosegada'
    }
  },
  {
    question8: {
      code: 8,
      type: true,
      index: 22,
      question: 'Siento que las dificultades se me amontonan al punto de no poder superarlas'
    }
  },
  {
    question9: {
      code: 9,
      type: true,
      index: 23,
      question: 'Me preocupo demasiado por cosas sin importancia'
    }
  },
  {
    question10: {
      code: 10,
      type: false,
      index: 24,
      question: 'Soy feliz '
    }
  },
  {
    question11: {
      code: 11,
      type: true,
      index: 25,
      question: 'Tomo las cosas muy a pecho'
    }
  },
  {
    question12: {
      code: 12,
      type: true,
      index: 26,
      question: 'Me falta confianza en mí mismo'
    }
  },
  {
    question13: {
      code: 13,
      type: false,
      index: 27,
      question: 'Me siento seguro'
    }
  },
  {
    question14: {
      code: 14,
      type: true,
      index: 28,
      question: 'Trato de evitar enfrentar una crisis o dificultad'
    }
  },
  {
    question15: {
      code: 15,
      type: false,
      index: 29,
      question: 'Me siento melancólico'
    }
  },
  {
    question16: {
      code: 16,
      type: true,
      index: 30,
      question: 'Me siento satisfecho'
    }
  },
  {
    question17: {
      code: 17,
      type: true,
      index: 31,
      question: 'Algunas ideas poco importantes pasan por mi cabeza y me molestan'
    }
  },
  {
    question18: {
      code: 18,
      type: true,
      index: 32,
      question: 'Me afectan tanto los desengaños que no me los puedo quitar de la cabeza'
    }
  },
  {
    question19: {
      code: 19,
      type: false,
      index: 33,
      question: 'Soy una persona estable'
    }
  },
  {
    question20: {
      code: 20,
      type: true,
      index: 34,
      question: 'Cuando pienso en los asuntos que tengo entre manos me pongo tenso y alterado'
    }
  }
];

export const QUESTIONNAIRE_CASIT = [
  {
    question1: {
      code: 1,
      type: true,
      index: 8,
      question: 'Si usted le dice a su hijo que va a la tienda a comprar algo y que se quede él solo unos minutos, ¿su hijo se opone firmemente a ello?',
    }
  },
  {
    question2: {
      code: 2,
      type: true,
      index: 9,
      question: 'Si en el colegio o en otro sitio le proponen a su hijo ir de campamento o acampada, ¿su hijo/a se niega a ello?',
    }
  },
  {
    question3: {
      code: 3,
      type: true,
      index: 10,
      question: 'Si usted tiene que asistir a una reunión y su hijo debe quedarse unas horas en compañia de un vecino u otra persona conocida, su hijo pone resistencia a ello?'
    }
  },
  {
    question4: {
      code: 4,
      type: true,
      index: 11,
      question: 'Los primeros dias de clase, al empezar el curso o renaudarlo (vacaciones, navidad, semana santa etc.), ¿su hijo llora, protesta, tiene rabietas o muestra señales de ansiedad?'
    }
  },
  {
    question5: {
      code: 5,
      type: true,
      index: 12,
      question: 'En el momento de ir al colegio, ¿su hijo presenta síntomas somáticos, o se queja de náuseas, vómitos, dolores de cabeza, dolores de estómago, etc.?'
    }
  },
  {
    question6: {
      code: 6,
      type: true,
      index: 13,
      question: 'Si ofertan actividades extracurriculares en el colegio, su hijo se niega a apuntarse, aunque sean actividades divertidas para él?'

    }
  },
  {
    question7: {
      code: 7,
      type: true,
      index: 14,
      question: '¿Su hijo está preocupado porque le ocurra algo a usted o a su pareja (enfermedad, accidente, muerte, etc.)?'
    }
  },
  {
    question8: {
      code: 8,
      type: true,
      index: 15,
      question: 'Si usted o su pareja , ha estado ingresado en el hospial, ¿su hijo ha presentado excesivas muestras de ansiedad?'
    }
  },
  {
    question9: {
      code: 9,
      type: true,
      index: 16,
      question: 'Después de la desaparición o muerte de un familiar cercano, ¿su hijo ha experimentado ansiedad intensa?'
    }
  },
  {
    question10: {
      code: 10,
      type: true,
      index: 17,
      question: 'Si tiene que realizar un viaje y va estar ausente algunos días, ¿su hijo protesta, se opone o manifiesta ansiedad?'
    }
  },
  {
    question11: {
      code: 11,
      type: true,
      index: 18,
      question: 'Si se separa de su hijo para asistir a algun acontecimiento social (cena, boda, etc.), ¿su hijo está deseoso de que usted vuelva a casa o siente la necesidad imperiosa de telefonearle?'
    }
  },
  {
    question12: {
      code: 12,
      type: true,
      index: 19,
      question: 'Cuando le da las buenas noches y se despida hasta mañana, su hijo protesta y muestra mucho miedo?'
    }
  },
  {
    question13: {
      code: 13,
      type: true,
      index: 20,
      question: 'Cuando le apaga la luz para que se duerma, su hijo ruega para que le deje la luz encendida?'
    }
  },
  {
    question14: {
      code: 14,
      type: true,
      index: 21,
      question: 'Cuando su hijo/a se acuesta pide intensamiente que usted o su pareja se quede haciéndole compañía hasta que se duerma?'
    }
  },
  {
    question15: {
      code: 15,
      type: true,
      index: 22,
      question: 'Si su hijo se despierta durante la noche, ¿lo llama con insistencia y tiene que ir a su habitacion para calmarlo?'
    }
  },
  {
    question16: {
      code: 16,
      type: true,
      index: 23,
      question: '¿Su hijo duerme con usted o con un hermano o se pasa a la cama de usted o a la de un hermano durante la noche?'
    }
  },
  {
    question17: {
      code: 17,
      type: true,
      index: 24,
      question: 'Cuando su hijo esta solo por la noche, ¿se asusta porque afirma ver monstruos o personas malvadas, o se queja de que siente unos ojos malévolos miránde fíjamente?'
    }
  },
  {
    question18: {
      code: 18,
      type: true,
      index: 25,
      question: 'Tiene pesadillas su hijo sobre la separación y la destrucción de la familia, por ejemplo Incendio del hogar, asesinato o rapto de un ser querido, etc.?'
    }
  },
  {
    question19: {
      code: 19,
      type: true,
      index: 26,
      question: 'Los temas de conversación de su hijo reflejan miedo a que le suceda algo grave a usted o a su pareja (enfermedad, accidente, muerte, etc.)?'
    }
  },
  {
    question20: {
      code: 20,
      type: true,
      index: 27,
      question: 'Su hijo, ¿tiene miedo de que pueda morir usted, su pareja, un hermano, o algún otro familiar o ser querido?'
    }
  },
  {
    question21: {
      code: 21,
      type: true,
      index: 28,
      question: 'Su hijo, ¿siente miedo cuando usted o su pareja viajan en avion o situaciones que percibe peligrosas para la familia?'
    }
  },
  {
    question22: {
      code: 22,
      type: true,
      index: 29,
      question: 'su hijo, ¿teme que algun suceso negativo lo separe de usted, de su pareja o de su familia (miedo a morir, a ser victima de un accidente, secuestro, etc.)?'
    }
  },
  {
    question23: {
      code: 23,
      type: true,
      index: 30,
      question: 'cuando están en algunos grandes almacenes o en otros lugares donde existe aglomeración de gente ¿su hijo tiene mucho miedo de perderse?'
    }
  },
  {
    question24: {
      code: 24,
      type: true,
      index: 31,
      question: 'su hijo, ¿se muestra excesivamente preocupado por la salud de su familia en general, por la suya o la de su pareja?'
    }
  },
]