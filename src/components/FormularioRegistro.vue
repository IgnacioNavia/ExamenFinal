<template>
  <div class="formulario-registro">
    <h2>Formulario de Registro</h2>
    <div class="input-group">
      <label for="nombre">Nombre:</label>
      <input
        v-model="form.nombre"
        type="text"
        placeholder="Ingrese su nombre"
        @blur="validarNombre"
      />
      <span v-if="errores.nombre" class="error">{{ errores.nombre }}</span>
    </div>
    <div class="input-group">
      <label for="correo">Correo:</label>
      <input
        v-model="form.correo"
        type="email"
        placeholder="Ingrese su correo"
        @blur="validarCorreo"
      />
      <span v-if="errores.correo" class="error">{{ errores.correo }}</span>
    </div>
    <div class="input-group">
      <label for="contrasena">Contraseña:</label>
      <input
        v-model="form.contrasena"
        type="password"
        placeholder="Ingrese su contraseña"
        @blur="validarContrasena"
      />
      <span v-if="errores.contrasena" class="error">{{ errores.contrasena }}</span>
    </div>
    <div class="input-group">
      <label for="repetirContrasena">Repetir Contraseña:</label>
      <input
        v-model="form.repetirContrasena"
        type="password"
        placeholder="Repita su contraseña"
        @blur="validarRepetirContrasena"
      />
      <span v-if="errores.repetirContrasena" class="error">{{ errores.repetirContrasena }}</span>
    </div>
    <button :disabled="formInvalido" @click="enviarFormulario">Enviar</button>
    <p v-if="mensaje" class="mensaje">{{ mensaje }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        nombre: '',
        correo: '',
        contrasena: '',
        repetirContrasena: ''
      },
      mensaje: '',
      errores: {
        nombre: '',
        correo: '',
        contrasena: '',
        repetirContrasena: ''
      }
    };
  },
  computed: {
    formInvalido() {
      return (
        this.errores.nombre ||
        this.errores.correo ||
        this.errores.contrasena ||
        this.errores.repetirContrasena ||
        !this.form.nombre ||
        !this.form.correo ||
        !this.form.contrasena ||
        !this.form.repetirContrasena
      );
    }
  },
  methods: {
    validarNombre() {
      if (!this.form.nombre) {
        this.errores.nombre = 'El nombre es obligatorio';
      } else if (/[^a-zA-Z\s]/.test(this.form.nombre)) {
        this.errores.nombre = 'El nombre solo debe contener letras';
      } else {
        this.errores.nombre = '';
      }
    },
    validarCorreo() {
      const regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!this.form.correo) {
        this.errores.correo = 'El correo es obligatorio';
      } else if (!regexCorreo.test(this.form.correo)) {
        this.errores.correo = 'Por favor ingrese un correo válido';
      } else {
        this.errores.correo = '';
      }
    },
    validarContrasena() {
      if (!this.form.contrasena) {
        this.errores.contrasena = 'La contraseña es obligatoria';
      } else if (this.form.contrasena.length < 6) {
        this.errores.contrasena = 'La contraseña debe tener al menos 6 caracteres';
      } else {
        this.errores.contrasena = '';
      }
    },
    validarRepetirContrasena() {
      if (this.form.repetirContrasena !== this.form.contrasena) {
        this.errores.repetirContrasena = 'Las contraseñas no coinciden';
      } else {
        this.errores.repetirContrasena = '';
      }
    },
    enviarFormulario() {
      this.validarNombre();
      this.validarCorreo();
      this.validarContrasena();
      this.validarRepetirContrasena();

      if (!this.errores.nombre && !this.errores.correo && !this.errores.contrasena && !this.errores.repetirContrasena) {
        this.mensaje = 'El registro se ha realizado correctamente';
        alert(this.mensaje);
      } else {
        this.mensaje = ''; // Limpiar el mensaje si hay errores
      }
    }
  }
};
</script>

<style scoped>
.formulario-registro {
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

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

button:hover {
  background-color: #0056b3;
}

p.mensaje {
  text-align: center;
  font-weight: bold;
  margin-top: 20px;
}

.error {
  color: red;
  font-size: 14px;
}
</style>
