/*CMD
  command: /099
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Broadcast

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var notify = Libs.ResourcesLib.anotherChatRes("notify", "global")
var nbb = User.getProperty("MynumberN")
var no = Libs.ResourcesLib.anotherChatRes("BGB", "global")
if(params){
no.set(0)
Bot.sendMessage("reset")
return 
}

Bot.sendMessage(
  "Registered Total: " +
    notify.value() +
    "\nMy number: " +
    nbb +
    "\nBGB done: " +
    no.value()
)
