<!-- JS -->
<script setup>
import { computed, ref, onMounted } from 'vue'
import { AppState } from './AppState.js'
import { mineService } from './services/MineService.js'

// Mine Function
function mine(){
mineService.mine()
}
// Upgrade Functions
function buyClickUpgrade(id) {
  mineService.buyClickUpgrade(id)
}

function buyAutoUpgrade(id) {
  mineService.buyAutoUpgrade(id)
}


// Computations
const cheese = computed(()=> AppState.cheese)
const clickUpgrades = computed(()=> AppState.clickUpgrades)
const autoUpgrades = computed(()=> AppState.autoUpgrades)

// Mounting for Auto Upgrades
onMounted(() => {
  setInterval(() => {
    mineService.collectAutoCheese()
  }, 3000)
})

</script>

<!-- HTML -->
<template>

<div>Cheese: {{ AppState.cheese }}</div>
<div>
  <button @click = "mine">Mine Cheese!</button>
</div>

<div v-for="upgrade in clickUpgrades" :key="upgrade.id">
  <button @click="buyClickUpgrade(upgrade.id)">
    {{ upgrade.name }} | Price: {{ upgrade.price }} | Qty: {{ upgrade.qty }} | Multiplier: {{ upgrade.multiplier }}
  </button>
</div>

<div v-for="upgrade in autoUpgrades" :key="upgrade.id">
  <button @click="buyAutoUpgrade(upgrade.id)">
    {{ upgrade.name }} | Price: {{ upgrade.price }} | Qty: {{ upgrade.qty }} | Multiplier: {{ upgrade.multiplier }}
  </button>
</div>


</template>

<!-- Style -->
<style lang="scss">
@import "./assets/scss/main.scss";

</style>
