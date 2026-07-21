class Message {

    send(): string {
        return "Sending message...";
    }
}

class EmailMessage extends Message { // extend the Message class
    override send(): string {       // override the send method
        return "Sending email...";
    }
}

class SMSMessage extends Message { // extend the Message class
    override send(): string { // override the send method
        return "Sending SMS...";
    }
}


const messages: Message[] = [new Message(), new EmailMessage(), new SMSMessage()];

messages.forEach((msg) => {

    console.log(msg.send());

})