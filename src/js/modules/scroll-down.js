// scroll.js

export function scrollToBottom() {
    const scrollToBottomButton = document.getElementById("scrollToBottom");
    const bottomAnchor = document.getElementById("bottomAnchor");

    scrollToBottomButton.addEventListener("click", () => {
        bottomAnchor.scrollIntoView({ behavior: "smooth" });
    });
}

export default scrollToBottom;