<template>
  <ion-menu content-id="main-content">
    <ion-header>
      <ion-toolbar color="warning">
        <ion-title>Menú</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-item router-link="/tabs/training">Entrenamientos</ion-item>
        <ion-item router-link="/tabs/daily-log">Registro Diario</ion-item>
        <ion-item router-link="/tabs/exercise">Historial Semanal</ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

<script setup>
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem } from '@ionic/vue';
</script>