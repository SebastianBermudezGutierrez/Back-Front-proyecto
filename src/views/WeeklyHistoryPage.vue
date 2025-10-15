<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="dark">
        <ion-title>Historial Semanal</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-card v-for="(day, index) in weekHistory" :key="index" color="medium">
        <ion-card-header>
          <ion-card-title>{{ day.day }}</ion-card-title>
          <ion-card-subtitle>{{ day.date }}</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <p><strong>Ejercicios:</strong> {{ day.exercises }}</p>
          <p><strong>Duración:</strong> {{ day.duration }} min</p>
          <p><strong>Calorías:</strong> {{ day.calories }} kcal</p>
        </ion-card-content>
      </ion-card>

      <ion-button
        expand="block"
        color="dark"
        router-link="/tabs/daily-log"
        class="ion-margin-top"
      >
        Volver al Registro Diario
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
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButton
} from '@ionic/vue'

import { ref } from 'vue'

const weekHistory = ref([
  { day: 'Lunes', date: '13 Oct', exercises: 5, duration: 60, calories: 480 },
  { day: 'Martes', date: '14 Oct', exercises: 4, duration: 45, calories: 420 },
  { day: 'Miércoles', date: '15 Oct', exercises: 6, duration: 70, calories: 520 },
  { day: 'Jueves', date: '16 Oct', exercises: 3, duration: 40, calories: 310 },
  { day: 'Viernes', date: '17 Oct', exercises: 5, duration: 55, calories: 460 },
  { day: 'Sábado', date: '18 Oct', exercises: 4, duration: 50, calories: 400 },
  { day: 'Domingo', date: '19 Oct', exercises: 2, duration: 30, calories: 250 }
])
</script>

<style scoped>
ion-content {
  background-color: #000;
  color: #fff;
}

ion-card {
  border-radius: 16px;
  margin-bottom: 16px;
}

ion-card-title {
  font-weight: bold;
}

p {
  margin: 4px 0;
}
</style>
