<template>
  <div class="calculo-notas">
    <h2>Cálculo de Calificaciones</h2>
    <div class="input-group">
      <label for="nota1">Nota 1:</label>
      <input
        v-model="notas.nota1"
        type="number"
        min="10"
        max="70"
        placeholder="Nota 1"
        @blur="validarNota('nota1')"
      />
      <span v-if="errores.nota1" class="error">{{ errores.nota1 }}</span>
    </div>
    <div class="input-group">
      <label for="nota2">Nota 2:</label>
      <input
        v-model="notas.nota2"
        type="number"
        min="10"
        max="70"
        placeholder="Nota 2"
        @blur="validarNota('nota2')"
      />
      <span v-if="errores.nota2" class="error">{{ errores.nota2 }}</span>
    </div>
    <div class="input-group">
      <label for="nota3">Nota 3:</label>
      <input
        v-model="notas.nota3"
        type="number"
        min="10"
        max="70"
        placeholder="Nota 3"
        @blur="validarNota('nota3')"
      />
      <span v-if="errores.nota3" class="error">{{ errores.nota3 }}</span>
    </div>
    <div class="input-group">
      <label for="asistencia">Asistencia (%):</label>
      <input
        v-model="notas.asistencia"
        type="number"
        min="0"
        max="100"
        placeholder="Asistencia (%)"
        @blur="validarAsistencia"
      />
      <span v-if="errores.asistencia" class="error">{{ errores.asistencia }}</span>
    </div>
    <button @click="calcularNota">Calcular</button>
    <p>{{ mensaje }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notas: { nota1: '', nota2: '', nota3: '', asistencia: '' },
      mensaje: '',
      errores: {
        nota1: '',
        nota2: '',
        nota3: '',
        asistencia: '',
      },
    };
  },
  methods: {
    validarNota(nota) {
      if (this.notas[nota] < 10 || this.notas[nota] > 70) {
        this.errores[nota] = 'Por favor ingrese valores válidos entre 10 y 70';
      } else {
        this.errores[nota] = '';
      }
    },
    validarAsistencia() {
      // No es obligatorio, pero si se ingresa, debe ser mayor o igual a 80
      if (this.notas.asistencia && this.notas.asistencia < 80) {
        this.errores.asistencia = 'La asistencia debe ser superior a 80%';
      } else {
        this.errores.asistencia = '';
      }
    },
    calcularNota() {
      const { nota1, nota2, nota3, asistencia } = this.notas;

      // Validar que las notas estén completas
      if (!nota1 || !nota2 || !nota3) {
        this.mensaje = 'Todos los campos de notas son obligatorios';
        return;
      }

      // Validar que la asistencia sea mayor o igual a 80%
      if (asistencia && asistencia < 80) {
        this.mensaje = 'Reprobado por asistencia insuficiente';
        return;
      }

      // Cálculo del promedio ponderado
      const promedio =
        (parseFloat(nota1) * 0.35 + parseFloat(nota2) * 0.35 + parseFloat(nota3) * 0.30) / 1;

      // Verificar si el promedio es suficiente para aprobar
      if (promedio >= 40) {
        this.mensaje = `Aprobado! Promedio: ${promedio.toFixed(2)}`;
      } else {
        this.mensaje = `Reprobado! Promedio: ${promedio.toFixed(2)}`;
      }
    },
  },
};
</script>

<style scoped>
.calculo-notas {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  max-width: 400px;
  margin: auto;
  background-color: #f9f9f9;
}

h2 {
  text-align: center;
}

.input-group {
  margin-bottom: 15px;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
}

.input-group input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

p {
  text-align: center;
  font-weight: bold;
  margin-top: 20px;
}

.error {
  color: red;
  font-size: 14px;
}
</style>
