import React from "react"
import Image from "next/image"
const BotaoChat = () => {
	return (
		<div className="fixed bottom-5 right-5 z-50 cursor-pointer">
			<Image src="/chatbot.png" alt="chat" width={70} height={70} />
		</div>
	)
}

export default BotaoChat
