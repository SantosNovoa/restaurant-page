import { content } from "./index.js";

export function loadContactPage() {
    const contactHeader = document.createElement("div");
    contactHeader.className = "contact-header";
    contactHeader.textContent = "Contact Whiskers & Brews";

    content.appendChild(contactHeader);

    const contactContainer = document.createElement("div");
    contactContainer.className = "contact-container";

    content.appendChild(contactContainer);

    const phoneNum = document.createElement("div");
    phoneNum.className = "phone-number";
    phoneNum.textContent = "📞 123 456 7890"

    const email = document.createElement("div");
    email.className = "email";
    email.textContent  = "totallyarealemail@mail.com"

    const message = document.createElement("div");
    message.className = "messahe";
    message.textContent = "Our cats are terrible at answering phones, but our team isn’t! Reach out anytime."


    const address = document.createElement("span");
    address.textContent = "🏠 123 Forestville drive, CA 90000";

        
    contactContainer.appendChild(phoneNum);
    contactContainer.appendChild(email);
    contactContainer.appendChild(message);
    contactContainer.appendChild(address);
}