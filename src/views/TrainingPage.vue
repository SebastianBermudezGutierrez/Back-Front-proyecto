<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="dark">
        <ion-title>Entrenamientos</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-list>
        <ion-item v-for="(workout, index) in workouts" :key="index">
          <ion-label>
            <h2>{{ workout.name }}</h2>
            <p>{{ workout.duration }} min</p>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel } from '@ionic/vue'

const workouts = [
  { name: 'Pecho y tríceps', duration: 45 },
  { name: 'Espalda y bíceps', duration: 50 },
  { name: 'Piernas', duration: 60 },
  { name: 'Hombros y abdomen', duration: 40 }
]
</script>

<style scoped>
ion-content {
  background-color: black;
  color: white;
}

ion-item {
  --background: #1c1c1c;
  margin: 5px 0;
  border-radius: 10px;
}
</style>
