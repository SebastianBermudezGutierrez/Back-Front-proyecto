<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet />

      <ion-tab-bar slot="bottom" color="dark">
        <ion-tab-button tab="training" href="/tabs/training">
          <ion-icon name="barbell" />
          <ion-label>Entrenamientos</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="daily-log" href="/tabs/daily-log">
          <ion-icon name="calendar" />
          <ion-label>Registro Diario</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="exercise" href="/tabs/exercise">
          <ion-icon name="add" />
          <ion-label>Nueva Rutina</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel
} from '@ionic/vue'
</script>


