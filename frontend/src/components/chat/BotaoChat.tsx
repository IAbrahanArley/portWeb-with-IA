import React from "react"
import Image from "next/image"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import JanelaChat from "./JanelaChat"
const BotaoChat = () => {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<div className="fixed bottom-5 right-5 z-50 cursor-pointer">
					<Image src="/chatbot.png" alt="chat" width={70} height={70} />
				</div>
			</PopoverTrigger>
			<PopoverContent
				side="top"
				align="end"
				sideOffset={10}
				className="w-[400px] sm:w-[500px]"
				style={{ backgroundColor: "transparent", border: "none" }}
			>
				<JanelaChat />
			</PopoverContent>
		</Popover>
	)
}

export default BotaoChat
