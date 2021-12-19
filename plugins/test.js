/* Copyright (C) 2020 TERROR-BOY.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
White Devil - TERROR-BOY
*/


// UNDER TEST DONT USE THIS PLUGIN

const Asena = require('../events');
const Config = require('../config');
const {MessageType} = require('@adiwajshing/baileys');
const fs = require("fs")

const Language = require('../language');
const Lang = Language.getString('_asena');

let td = Config.WORKTYPE == 'public' ? false : true

 Asena.addCommand({pattern: 'oic ?(.*)', fromMe: td, dontAddCommandList: true}, (async (message, match) => {

        var CMD_HELP = '';
        if (match[1] === '') {
            Asena.commands.map(
                async (command) =>  {
                    if (command.dontAddCommandList || command.pattern === undefined) return;
                    try {
                        var match = command.pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
                        var mmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2]
                    } catch {
                        var match = [command.pattern];
                    }
    
                    var HANDLER = '';
    
                    if (/\[(\W*)\]/.test(Config.HANDLERS)) {
                        HANDLER = Config.HANDLERS.match(/\[(\W*)\]/)[1][0];
                    } else {
                        HANDLER = '.';
                    }
                    if (command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '▣ ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '◯⦁⦁━━► ' + Lang.EXAMPLE + ': ```' + command.usage + '```\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '▣ ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '◯⦁⦁━━► ' + ' ```' + command.desc + '``` \n\n';
                    }
                    if (command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '▣ ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '◯⦁⦁━━► ' + ' ```' + command.warn + '```\n\n'
                    }
                    if (!command.desc == '' && !command.usage == '' && command.warn == '') {
                        CMD_HELP += '▣ ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '◯⦁⦁━━► ' + ' ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n\n';
                    }
                    if (!command.desc == '' && command.usage == '' && !command.warn == '') {
                        CMD_HELP += '▣ ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '◯⦁⦁━━► ' + ' ```' + command.desc + '``` \n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                    if (command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '▣ ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '◯⦁⦁━━► ' + ' ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                    if  (command.desc == '' && command.usage == '' && command.warn == '') {
                        CMD_HELP += '▣ ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n\n'
                    }
                    if  (!command.desc == '' && !command.usage == '' && !command.warn == '') {
                        CMD_HELP += '▣ ' + (match.length >= 3 ? (HANDLER + mmatch) : command.pattern) + '\n' + '◯⦁⦁━━► ' + ' ```' + command.desc + '``` \n' + '*⌨️ ' + Lang.EXAMPLE + ':* ```' + command.usage + '```\n' + '*⚠️ ' + Lang.WARN + ':* ```' + command.warn + '```\n\n'
                    }
                }
            );
          
          
          const rows = [ {title: CMD_HELP, description: '◯⦁⦁━━► ' + Lang.EXAMPLE + ': ```' + command.usage + '```\n\n'+'◯⦁⦁━━► ' + ' ```' + command.desc + '``` \n\n'+ '◯⦁⦁━━► ' + ' ```' + command.usage + '```\n', rowId:"001"}
                        ] 
          
          const sections = [{title: "WhiteDevil", rows: rows}] 
          const button = {
 buttonText: 'Click Me Here!!!',
 description: "*Hello,This is  Whitedevil bot*\n\n ```please check it```",
 sections: sections,
 listType: 1
}
          
          await message.client.sendMessage(message.jid, button, MessageType.listMessage)
                    }
            }
         )
     )
     // UNDER TEST DONT USE THIS PLUGIN
