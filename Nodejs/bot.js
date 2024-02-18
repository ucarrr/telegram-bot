"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grammy_1 = require("grammy");
const menu_1 = require("@grammyjs/menu");
const bot = new grammy_1.Bot("6821101982:AAE9tEYj2eALITgQekzVrk70Hf0gW-n9j4s"); // <-- put your bot token between the ""
// Handle the /start command.
//bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));
//Pre-assign button text
const nextButton = "Next";
const backButton = "Back";
const firstMenu = "<b>Menu 1</b>\n\nA beautiful menu with a shiny inline button.";
const firstMenuMarkup = new grammy_1.InlineKeyboard().text(nextButton, backButton);
bot.command("menu", async (ctx) => {
    await ctx.reply(firstMenu, {
        parse_mode: "HTML",
        reply_markup: firstMenuMarkup,
    });
});
bot.on("message:text", async (ctx) => ctx.reply("Echo: " + ctx.message.text));
const menu = new menu_1.Menu("my-menu-identifier")
    .text("A", (ctx) => ctx.reply("You pressed A!"))
    .row()
    .text("B", (ctx) => ctx.reply("You pressed B!"));
bot.use(menu);
bot.command("start", async (ctx) => {
    // Send the menu.
    await ctx.reply("Check out this menu:", { reply_markup: menu });
});
bot.start();
