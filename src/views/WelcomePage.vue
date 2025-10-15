<template>
  <ion-page>
    <ion-content class="ion-padding ion-text-center">
      <div class="welcome-container">
        <h1>Bienvenido a LION FIT PRO 🦁</h1>
        <p>Tu compañero de entrenamiento inteligente</p>

        <ion-button expand="block" router-link="/login" color="dark">
          Iniciar Sesión
        </ion-button>

        <ion-button expand="block" router-link="/register" fill="outline" color="light">
          Registrarse
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonButton } from '@ionic/vue'
</script>

<style scoped>
.welcome-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: white;
  background-color: black;
  gap: 1rem;
}

h1 {
  font-weight: bold;
  font-size: 1.8rem;
}

p {
  font-size: 1.1rem;
}
</style>

