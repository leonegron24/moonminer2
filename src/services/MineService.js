import App from "@/App.vue"
import { AppState } from "@/AppState.js"
import { Pop } from "@/utils/Pop.js"

class MineService{

mine(){
    AppState.cheese+=AppState.cheesePerClick
}
          
purchaseClickUpgrade(upgradeId){
    const clickUpgrades = AppState.clickUpgrades
    const purchasedUpgrade = clickUpgrades.find(upgrade => upgrade.id == upgradeId)
    console.log("Attempting to purchase: ", purchasedUpgrade.name )
    if (AppState.cheese >= purchasedUpgrade.price){
        AppState.cheese -= purchasedUpgrade.price
        AppState.cheesePerClick += purchasedUpgrade.multiplier
        purchasedUpgrade.qty++
        Pop.success(purchasedUpgrade.name, " has been purchased!")
    }
    else{
        Pop.toast("Can not afford, need more cheese!")
    }
    
}

purchaseAutoUpgrade(upgradeId){
    const autoUpgrades = AppState.autoUpgrades
    const purchasedUpgrade = autoUpgrades.find(upgrade => upgrade.id == upgradeId)
    console.log("Attempting to purchase: ", purchasedUpgrade.name )
    if (AppState.cheese >= purchasedUpgrade.price){
        AppState.cheese -= purchasedUpgrade.price
        AppState.autoCheese += purchasedUpgrade.multiplier
        purchasedUpgrade.qty++
        Pop.success(purchasedUpgrade.name, " has been purchased!")
    }
    else{
        Pop.toast("Can not afford, need more cheese!")
    }
}

}
export const mineService = new MineService()
