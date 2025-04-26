import App from "@/App.vue"
import { AppState } from "@/AppState.js"

class MineService{

    mine() {
        let bonus = AppState.clickUpgrades.reduce((total, u) => total + u.qty * u.multiplier, 0)
        let cheesePerClick = bonus
        AppState.cheese += 1 + bonus
        console.log(bonus)
}


    buyClickUpgrade(id) {
        const upgrade = AppState.clickUpgrades.find(u => u.id == id)
        if (AppState.cheese >= upgrade.price) {
          AppState.cheese -= upgrade.price
          upgrade.qty++
          upgrade.price = Math.ceil(upgrade.price * 1.15)
          console.log(`${upgrade.id} was purchased!`)
        }
      }

    buyAutoUpgrade(id) {
        const upgrade = AppState.autoUpgrades.find(u => u.id == id)
        if (AppState.cheese >= upgrade.price) {
            AppState.cheese -= upgrade.price
            upgrade.qty++
            upgrade.price = Math.ceil(upgrade.price * 1.15)
        }
        }
      
    collectAutoCheese() {
        let autoCheese = AppState.autoUpgrades.reduce((total, u) => total + u.qty * u.multiplier, 0)
        AppState.cheese += autoCheese
        }
          
}
export const mineService = new MineService()
