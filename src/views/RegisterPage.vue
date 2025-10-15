<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="dark">
        <ion-title>Registro</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-input
        label="Nombre"
        label-placement="floating"
        placeholder="Ingrese su nombre"
      />
      <ion-input
        label="Correo electrónico"
        label-placement="floating"
        type="email"
        placeholder="Ingrese su correo"
      />
      <ion-input
        label="Contraseña"
        label-placement="floating"
        type="password"
        placeholder="Cree una contraseña"
      />
      <ion-button expand="block" router-link="/login" color="dark">
        Registrarse
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

