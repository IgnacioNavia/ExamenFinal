<template>
  <div id="app">
    <div class="tabs">
      <button
        :class="{ active: activeTab === 'calculoNotas' }"
        @click="activeTab = 'calculoNotas'"
      >
        Cálculo de Notas
      </button>
      <button
        :class="{ active: activeTab === 'registro' }"
        @click="activeTab = 'registro'"
      >
        Formulario de Registro
      </button>
    </div>

    <div v-if="activeTab === 'calculoNotas'">
      <CálculoDeNotas />
    </div>

    <div v-if="activeTab === 'registro'">
      <FormularioRegistro />
    </div>
  </div>
</template>

<script>
import CálculoDeNotas from './components/CalculadoraNotas.vue';
import FormularioRegistro from './components/FormularioRegistro.vue';

export default {
  components: {
    CálculoDeNotas,
    FormularioRegistro,
  },
  data() {
    return {
      activeTab: 'calculoNotas', // Pestaña activa por defecto
    };
  },
};
</script>

<style scoped>
/* Estilos generales */
#app {
  font-family: Arial, sans-serif;
  padding: 20px;
}

/* Pestañas */
.tabs {
  display: flex;
  margin-bottom: 20px;
}

.tabs button {
  background-color: #f0f0f0;
  padding: 10px;
  border: 1px solid #ccc;
  cursor: pointer;
  margin-right: 10px;
  transition: background-color 0.3s ease;
}

.tabs button.active {
  background-color: #007bff;
  color: white;
}

.tabs button:hover {
  background-color: #e0e0e0;
}

/* Componentes */
div {
  margin-top: 20px;
}
</style>
