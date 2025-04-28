<!-- JS -->
<script setup>
import { computed, ref, onMounted } from 'vue'
import { AppState } from './AppState.js'
import { mineService } from './services/MineService.js'


function mine(){
  mineService.mine()
}

function purchaseClickUpgrade(upgradeId){
  mineService.purchaseClickUpgrade(upgradeId)
}

function purchaseAutoUpgrade(upgradeId){
  mineService.purchaseAutoUpgrade(upgradeId)
}

const cheese = computed(()=> AppState.cheese)
const clickUpgrades = computed(()=> AppState.clickUpgrades)
const autoUpgrades = computed(()=> AppState.autoUpgrades)
const autoCheese = computed(()=> AppState.autoCheese)

onMounted(() => {
  setInterval(() => {
    AppState.cheese += AppState.autoCheese
  }, 1000)
})


</script>

<!-- HTML -->
<template>
<div class="d-flex flex-column min-vh-100">
  <!-- BgPicture -->
  <main class="container-fluid cheesePicture d-flex flex-column justify-content-end align-items-center">
    <h1 class="row justify-content-center text-warning">🧀 : {{ cheese }}</h1>
    <div class="row justify-content-center w-100">
      <div class="col-md-3 d-flex justify-content-center">
        <!-- Minebutton -->
        <div class="btn btn-success w-100 mb-2" @click="mine">
          ⛏️ + {{ AppState.cheesePerClick }} Mine Cheese
        </div>
      </div>
      <div class="col-md-3 d-flex justify-content-center">
        <!-- Bank -->
        <div class="text-white text-center bg-primary mb-2 p-2 w-100">
          <p>AutoCheese = {{ autoCheese }}cps</p>
        </div>
      </div>
    </div>
  </main>
<!-- Bg Picture Footer -->
  <footer class="container-fluid shipPicture p-5">
    <h1 class="row justify-content-center text-center text-white">Mouse Terminal</h1>
    <div class="row justify-content-around">
      <!-- ClickUpgrades -->
      <div class="col-md-5 d-flex flex-column align-items-center">
        <h4 class="text-white">Click Upgrades</h4>
        <div v-for="upgrade in clickUpgrades" :key="upgrade.id">
          <button @click="purchaseClickUpgrade(upgrade.id)" class="row m-2">{{ upgrade.name }} ({{ upgrade.multiplier }}) = {{ upgrade.price }}</button>
        </div>
      </div>
      <!-- AutoUpgrades -->
      <div class="col-md-5 d-flex flex-column align-items-center">
        <h4 class="text-white">Auto-Upgrades</h4>
        <div v-for="upgrade in autoUpgrades" :key="upgrade.id">
          <button @click="purchaseAutoUpgrade(upgrade.id)" class="row m-2">{{ upgrade.name }} ({{ upgrade.multiplier }}) = {{ upgrade.price }}</button>
        </div>
      </div>
    </div>
  </footer>
</div>




</template>

<!-- Style -->
<style lang="scss">
@import "./assets/scss/main.scss";

.cheesePicture{
  flex: 1 0 auto;
  background-image: url('https://media.istockphoto.com/id/1279541204/photo/concept-of-dreaming-or-longing-or-illustration-of-the-belief-that-the-moon-is-made-of-cheese.webp?a=1&b=1&s=612x612&w=0&k=20&c=H4yAdveH8qkwyYOLCbjaYOraC0hCNH2QcwB6NfUtdUI=');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.shipPicture{
  background-image: url('https://images.unsplash.com/flagged/photo-1595524288414-a7fda0a12d0c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNwYWNlc2hpcHxlbnwwfHwwfHx8MA%3D%3D');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}


</style>
