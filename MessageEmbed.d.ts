import { MessageEmbed, Message, User } from 'discord.js';

interface optionType {
    title?: string;
    color?: string;
    MusicOverTitle?: string;
    timestamp?: boolean;
}
  
export default class VexoBot {
    VexoEmbed: MessageEmbed;
    play: MessageEmbed;




    
    public setTitle(title: string): any;
    public setColor(color: string): any;
    public setTimestamp(): any;
}