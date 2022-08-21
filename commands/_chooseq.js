/*CMD
  command: /chooseq
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var cur = Bot.getProperty("admin_currency")
var min = 0.06
var balance = Libs.ResourcesLib.userRes("payout")
Bot.sendKeyboard(
  "🏠 Menu",
  "📤 *How many " +
    cur +
    " you want to withdraw?*\n\n " +
    "   *Minimum*: " +
    min +
    " " +
    cur +
    "\n    *Maximum*: " +
    balance.value().toFixed(10) +
    " " +
    cur +
    "\n    Maximum amount corresponds to your balance\n\n    ➡ *Send now the amount of  you want to withdraw*"
)
if (message == "LTC") {
  Bot.run({
    command: "/go_withdraw_LTC",
    options: { me: "ok" }
  })
  return
}
if (message == "DGB") {
  Bot.run({
    command: "/go_withdraw_DGB",
    options: { me: "ok" }
  })
  return
}
if (message == "BCH") {
  Bot.run({
    command: "/go_withdraw_BCH",
    options: { me: "ok" }
  })
  return
}

