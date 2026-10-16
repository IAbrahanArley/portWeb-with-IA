import { MessageSquare } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import JanelaChat from "./JanelaChat"

export default function BotaoChat() {
	return <Popover><PopoverTrigger asChild><button type="button" aria-label="Abrir assistente do portfólio" className="chat-launcher"><MessageSquare size={20} aria-hidden="true" /><span>Converse com meu assistente</span></button></PopoverTrigger>
		<PopoverContent side="top" align="end" sideOffset={12} className="w-[calc(100vw-2rem)] max-w-[420px] p-0 border-0"><JanelaChat /></PopoverContent>
	</Popover>
}
