<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="dark">
        <ion-title>Registro Diario</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-list>
        <ion-item v-for="(log, index) in dailyLogs" :key="index">
          <ion-label>
            <h2>{{ log.date }}</h2>
            <p>{{ log.notes }}</p>
          </ion-label>
        </ion-item>
      </ion-list>

      <ion-button expand="block" color="dark" router-link="/tabs/exercise">
        Añadir nuevo registro
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonButton } from '@ionic/vue'

const dailyLogs = [
  { date: '2025-10-13', notes: 'Entrenamiento completo de piernas.' },
  { date: '2025-10-14', notes: 'Día de descanso y estiramiento.' },
  { date: '2025-10-15', notes: 'Sesión de cardio de 30 minutos.' }
]
</script>

<style scoped>
ion-content {
  background-color: black;
  color: white;
}

ion-item {
  --background: #1c1c1c;
  margin: 6px 0;
  border-radius: 10px;
}
</style>

