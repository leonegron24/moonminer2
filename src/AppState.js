import { reactive, ref } from 'vue'
import { Upgrades } from './models/Upgrades.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,

  // CHEESE
  cheese: 0,
  cheesePerClick: 1,
  autoCheese: 0,

  // CHEESE CLICK UPGRADES
   /** @type {import('./models/Upgrades.js').Upgrades[]} */
  clickUpgrades: [
    new Upgrades({
      id: 'equip',
      name: 'Equipment',
      price: 20,
      qty: 0,
      multiplier: 2
    }),
    new Upgrades({
      id: 'gen',
      name: 'Generator',
      price: 100,
      qty:0,
      multiplier: 3
    })
  ],

  // CHEESE AUTO UPGRADES
  /** @type {import('./models/Upgrades.js').Upgrades[]} */
  autoUpgrades: [
    new Upgrades({
      id: 'bank',
      name: 'CheeseBank',
      price: 1500,
      qty: 0,
      multiplier: 4
    }),
    new Upgrades({
      id: 'res',
      name: 'Research',
      price: 2000,
      qty: 0,
      multiplier:5
    })
  ]




})

