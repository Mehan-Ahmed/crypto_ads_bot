/*CMD
  command: /webc
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 💻 Visit Sites
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!content) {
  return
}
var ads = Bot.getProperty("all_in_ads")
var json = ads.list[params]
var button = [
  [
    {
      text: "🚀 Go to Website 🚀",
      url: content
    }
  ],
  [
    { text: "➡️ Skip", callback_data: "/skip /visit " + params },
    {
      text: "🚫 Report",
      callback_data: "/report " + params + "&Link URL 🔗"
    }
  ]
]
Api.sendMessage({
  text:
    "<b>" +
    json.title +
    "</b>\n\n" +
    json.description +
    "\n\n------------------------------------------------\n⚠️<i> You will be redirected to a third party website.</i>",
  reply_markup: { inline_keyboard: button },
  disable_web_page_preview: true,
  parse_mode: "html"
})
