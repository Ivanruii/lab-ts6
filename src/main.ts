type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
    id: number;
    nombre: string;
    apellidos: string;
    sexo: string;
    temperatura: number;
    frecuenciaCardiaca: number;
    especialidad: Especialidad;
    edad: number;
}

interface NumeroPacientesPorEspecialidad {
    medicoDeFamilia: number;
    pediatria: number;
    cardiologia: number;
}

const pacientes: Pacientes[] = [
    {
        id: 1,
        nombre: "John",
        apellidos: "Doe",
        sexo: "Male",
        temperatura: 36.8,
        frecuenciaCardiaca: 80,
        especialidad: "Medico de familia",
        edad: 44,
    },
    {
        id: 2,
        nombre: "Jane",
        apellidos: "Doe",
        sexo: "Female",
        temperatura: 36.8,
        frecuenciaCardiaca: 70,
        especialidad: "Medico de familia",
        edad: 43,
    },
    {
        id: 3,
        nombre: "Junior",
        apellidos: "Doe",
        sexo: "Male",
        temperatura: 36.8,
        frecuenciaCardiaca: 90,
        especialidad: "Pediatra",
        edad: 8,
    },
    {
        id: 4,
        nombre: "Mary",
        apellidos: "Wien",
        sexo: "Female",
        temperatura: 36.8,
        frecuenciaCardiaca: 120,
        especialidad: "Medico de familia",
        edad: 20,
    },
    {
        id: 5,
        nombre: "Scarlett",
        apellidos: "Somez",
        sexo: "Female",
        temperatura: 36.8,
        frecuenciaCardiaca: 110,
        especialidad: "Cardiólogo",
        edad: 30,
    },
    {
        id: 6,
        nombre: "Brian",
        apellidos: "Kid",
        sexo: "Male",
        temperatura: 39.8,
        frecuenciaCardiaca: 80,
        especialidad: "Pediatra",
        edad: 11,
    },
];


// Apartado 1
// A)

const obtenPacientesAsignadosAPediatria = (pacientes: Pacientes[]): Pacientes[] => {
    const pacientesPediatra: Pacientes[] = [];
    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad === "Pediatra") {
            pacientesPediatra.push(pacientes[i]);
        }
    }
    return pacientesPediatra;
};

console.log("(Apartado 1 | A):");
console.log(obtenPacientesAsignadosAPediatria(pacientes));
// B)

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: Pacientes[]): Pacientes[] => {
    const pacientesPediatra: Pacientes[] = obtenPacientesAsignadosAPediatria(pacientes);

    for (let i = 0; i < pacientesPediatra.length; i++) {
        if (pacientesPediatra[i].edad > 10) {
            pacientesPediatra.splice(i, 1);
        }
    }
    return pacientesPediatra;
};

console.log("(Apartado 1 | B):");
console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));

// Apartado 2

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
    let activarProctolo = false;

    for (let i = 0; i < pacientes.length; i++) {
        activarProctolo = (pacientes[i].temperatura > 39 && pacientes[i].frecuenciaCardiaca > 100) ? true : false;
    }

    return activarProctolo;
};

console.log("(Apartado 2):");
console.log(activarProtocoloUrgencia(pacientes));

// Apartado 3

const reasignaPacientesAMedicoFamilia = (pacientes: Pacientes[]): Pacientes[] => {

    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad === "Pediatra") {
            pacientes[i].especialidad = "Medico de familia";
        }
    }

    return pacientes;
};

console.log("(Apartado 3):")
console.log(reasignaPacientesAMedicoFamilia(pacientes));

// Apartado 4

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
    let hayPacientes = false;

    for (let i = 0; i < pacientes.length; i++) {
        hayPacientes = (pacientes[i].especialidad === "Pediatra") ? true : false;
    }

    return hayPacientes;
};


// Apartado 5

const cuentaPacientesPorEspecialidad = (pacientes: Pacientes[]): NumeroPacientesPorEspecialidad => {
    const pacientesPorEspecialidad = {
        medicoDeFamilia: 0,
        pediatria: 0,
        cardiologia: 0,
    };

    for (let i = 0; i < pacientes.length; i++) {
        switch (pacientes[i].especialidad) {
            case "Medico de familia":
                pacientesPorEspecialidad.medicoDeFamilia++;
                break;
            case "Pediatra":
                pacientesPorEspecialidad.pediatria++;
                break;
            case "Cardiólogo":
                pacientesPorEspecialidad.cardiologia++;
                break;
        }
    }

    return pacientesPorEspecialidad;
};

console.log("(Apartado 5):")
console.log(cuentaPacientesPorEspecialidad(pacientes));