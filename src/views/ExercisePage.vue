<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="dark">
        <ion-title>Nuevo Ejercicio</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-input
        label="Nombre del ejercicio"
        label-placement="floating"
        placeholder="Ej: Press de banca"
      />
      <ion-input
        label="Número de series"
        label-placement="floating"
        type="number"
        placeholder="Ej: 4"
      />
      <ion-input
        label="Repeticiones"
        label-placement="floating"
        type="number"
        placeholder="Ej: 12"
      />
      <ion-input
        label="Peso (kg)"
        label-placement="floating"
        type="number"
        placeholder="Ej: 60"
      />
      <ion-button expand="block" color="dark" router-link="/tabs/daily-log">
        Guardar Ejercicio
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonButton
} from '@ionic/vue'
</script>

<style scoped>
ion-content {
  background-color: black;
  color: white;
}
</style>

