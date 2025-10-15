<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="dark">
        <ion-title>LION FIT PRO</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-input
        label="Usuario"
        label-placement="floating"
        placeholder="Ingrese su usuario"
      />
      <ion-input
        label="Contraseña"
        label-placement="floating"
        type="password"
        placeholder="Ingrese su contraseña"
      />
      <ion-button expand="block" router-link="/tabs/training" color="dark">
        Entrar
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

ion-title {
  text-align: center;
  color: white;
}
</style>
