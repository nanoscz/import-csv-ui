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

export const Questionnaire = [
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
