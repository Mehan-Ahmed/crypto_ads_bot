/*CMD
  command: /broadcast
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Broadcast
  answer: 
  keyboard: 
  aliases: 
CMD*/

var text = ""
var admin = Bot.getProperty("admin_admin")
var notification = Bot.getProperty("broadcast_notification", { list: {} })
//for admin only
if (admin == user.telegramid) {
  var no = Libs.ResourcesLib.anotherChatRes("BGB", "global")
  for (var ind = 1; ind < 20; ind++) {
    GoBroadCast(no.value() + ind)
  }
  GoBroadCast(no.value() + 20, "true")
  return
}
//function
function GoBroadCast(value, last_catch) {
  if (last_catch == "true") {
    Bot.sendMessage("Broadcast completed " + no.value())
    no.add(+20)
  }
  var number = value
  if (notification[value]) {
    var security = notification[number].notification
    if (security == "true") {
      var user_id = notification[number].user
      Api.sendMessage({ chat_id: user_id, text: text })
    }
  }
}

